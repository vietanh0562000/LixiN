
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = LixiController
 * DateTime = Tue Feb 01 2022 14:41:47 GMT+0700 (Indochina Time)
 * Author = anhdv56
 * FileBasename = LixiController.ts
 * FileBasenameNoExtension = LixiController
 * URL = db://assets/scripts/LixiController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('LixiController')
export class LixiController extends Component {
    // * FIELDs
    @property
    private priceType: number = 0;

    // * PUBLIC FUNCTIONs
    public getPriceType(){
        return this.priceType;
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
