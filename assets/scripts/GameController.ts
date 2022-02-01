
import { _decorator, Component, Node, tween, ProgressBar, Sprite, Vec3, AudioClip, AudioSource } from 'cc';
import { Constants } from './Constants';
import { IntroController } from './IntroController';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = GameController
 * DateTime = Tue Feb 01 2022 11:13:11 GMT+0700 (Indochina Time)
 * Author = anhdv56
 * FileBasename = GameController.ts
 * FileBasenameNoExtension = GameController
 * URL = db://assets/scripts/GameController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('GameController')
export class GameController extends Component {
    // * FIELDs
    @property(Node)
    private loadingBar: Node = null;
    @property(Node)
    private infoContainer: Node = null;
    @property(AudioClip)
    private btnSound: AudioClip = null;
    @property(AudioClip)
    private priceSound: AudioClip = null;

    public static instance: GameController = null;
    private mode: number = Constants.NORMAL_MOD;
    // * LIFECYCLE FUNCTIONS
    onLoad(){
        if (GameController.instance === null){
            GameController.instance = this;
        }
    }

    start(){
        tween(this.loadingBar.getComponent(ProgressBar))
            .to(Constants.TIME_PROGRESS_BAR, {progress: 1})
            .call(() => this.startGame())
            .start();
    }

    // * PRIVATE FUNCTIONs
    startGame(){
        this.loadingBar.active = false;
        this.infoContainer.active = true;
        let defaultScale = this.infoContainer.getScale();
        console.log(defaultScale);
        this.infoContainer.scale = new Vec3(0, 0, 0);
        tween(this.infoContainer)
            .to(Constants.TIME_SHOW_POPUP, {scale: defaultScale})
            .start();
    }

    // * PUBLIC FUNCTIONs
    public openLixiBoard(){
        this.infoContainer.getComponent(IntroController).changeToLixiBoard();
    }

    /**
     * * Change mode of game
     * @param mode 
     */
    public changeMode(mode: number){
        this.mode = mode;
    }

    public getMode(){
        return this.mode;
    }

    public playBtnSound(){
        this.node.getComponent(AudioSource).playOneShot(this.btnSound, 1);
    }

    public playPriceSound(){
        this.node.getComponent(AudioSource).playOneShot(this.priceSound, 1);
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
