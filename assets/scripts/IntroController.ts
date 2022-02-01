
import { _decorator, Component, Node, PageViewComponent, tween, Prefab, instantiate, random, LabelComponent, EditBoxComponent } from 'cc';
import { Constants } from './Constants';
import { GameController } from './GameController';
import { LixiController } from './LixiController';
import { PriceController } from './PriceController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = IntroController
 * DateTime = Tue Feb 01 2022 09:58:20 GMT+0700 (Indochina Time)
 * Author = anhdv56
 * FileBasename = IntroController.ts
 * FileBasenameNoExtension = IntroController
 * URL = db://assets/scripts/IntroController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 * * This function control action in "Container"
 */
 
@ccclass('IntroController')
export class IntroController extends Component {
    // * FIELDs
    @property(Node)
    private pageView: Node = null;
    @property(Node)
    private backBtn: Node = null;
    @property(Node)
    private nextBtn: Node = null;
    @property(Node)
    private priceLabel: Node = null;
    @property(Node)
    private birthdayBox: Node = null;
    @property({type: [Prefab]})
    private prices: Prefab[] = [];

    // ? this container contains two state (info container and lixi board)
    private containerState: number = Constants.INFO_CONTAINER;
    private pageViewComponent: PageViewComponent = null;
    // * LIFECYCLE FUNCTIONs
    start(){
        this.pageViewComponent = this.pageView.getComponent(PageViewComponent);
    }

    // * Update every frame
    update(dt: number){
        switch (this.containerState){
            case Constants.INFO_CONTAINER:
                this.nextBtn.active = true;
                this.backBtn.active = true;
                if (this.pageViewComponent.getCurrentPageIndex() == this.pageViewComponent.getPages().length - 1){
                    this.nextBtn.active = false;
                }
                if (this.pageViewComponent.getCurrentPageIndex() == 0){
                    this.backBtn.active = false;
                }
                break;
            case Constants.LIXI_BOARD:
                this.nextBtn.active = false;
                this.backBtn.active = false;
                this.node.getChildByName("PageView").active = false;
                break;
            default:
                console.log("Wrong state");
                break;        
        }
    }

    // * PUBLIC FUNCTIONs
    /**
     * * This function turn to next page. IF page is the last -> hide the next button
     */
    public nextPage(){
        GameController.instance.playBtnSound();
        this.pageViewComponent.scrollToPage(
            this.pageViewComponent.getCurrentPageIndex() + 1, Constants.TIME_CHANGE_PAGE);
    }

    /**
     * * This function turn to previous page. IF page is the first -> hide the back button
     */
    public backPage(){
        GameController.instance.playBtnSound();
        this.pageViewComponent.scrollToPage(
            this.pageViewComponent.getCurrentPageIndex() - 1, Constants.TIME_CHANGE_PAGE);
    }

    /**
     * * This function change container to lixi board state
     */
    public changeToLixiBoard(){
        GameController.instance.playBtnSound();
        // * Change state of container
        this.containerState = Constants.LIXI_BOARD;

        // * Show new board
        let currentScale = this.node.getScale();
        console.log(currentScale);
        console.log(currentScale.multiply(Constants.SCALE_UP_ANIM));
        tween(this.node)
            .to(0.2, {scale: currentScale.multiply(Constants.SCALE_DOWN_ANIM)})
            .to(0.1, {scale: currentScale.multiply(Constants.SCALE_UP_ANIM)})
            .start();
        
        // * Open Lixi
        let lixiList =this.node.children.filter(child => child.name === "Lixi");
        let luckyNumber = Math.floor(Math.random() * lixiList.length);
        let index = 0;
        lixiList.forEach(lixi => {
            let lixiMoveType = Math.round(Math.random());
            tween(lixi)
                .by(2 * Math.random(), {position: Constants.LIXI_MOVES[lixiMoveType]})
                .by(2 * Math.random(), {position: Constants.LIXI_MOVES[1 - lixiMoveType]})
                .start();
            if (index === luckyNumber){
                console.log(index);
                setTimeout(() => {
                    tween(lixi)
                    .to(Constants.TIME_LIXI_TO_CENTER, {position: this.node.position})
                    .call(() => this.openLixi(lixi))
                    .start();
                }, 2500)
            }     
            index++;    
        })
    }

    /**
     * * Open lixi. show result
     * @param lixi 
     */
    public openLixi(lixi: Node){
        GameController.instance.playPriceSound();
        // * Check birthday
        let birthday = this.birthdayBox.getComponent(EditBoxComponent).string;
        if (birthday === "1911" || birthday === "1811"){
            GameController.instance.changeMode(Constants.NHUNG_MOD);
        }

        lixi.active = false;
        let price = instantiate(this.prices[lixi.getComponent(LixiController).getPriceType()]);
        this.node.addChild(price);
        this.priceLabel.getParent().active = true;

        this.priceLabel.getComponent(LabelComponent).string = price.getComponent(PriceController).getNamePrice().toString();
        if (GameController.instance.getMode() == Constants.NHUNG_MOD){
            this.priceLabel.getComponent(LabelComponent).string += " Và Vanh";
        }
    }
}

/**
 * [1] Class member could be defined like this.
 * [2] Use `property` decorator if your want the member to be serializable.
 * [3] Your initialization goes here.
 * [4] Your update function goes here.
 *
 * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
 * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/ccclass.html
 * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
 */
