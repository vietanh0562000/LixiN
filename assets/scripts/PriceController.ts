
import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

/**
 * Predefined variables
 * Name = PriceController
 * DateTime = Tue Feb 01 2022 16:44:48 GMT+0700 (Indochina Time)
 * Author = anhdv56
 * FileBasename = PriceController.ts
 * FileBasenameNoExtension = PriceController
 * URL = db://assets/scripts/PriceController.ts
 * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
 *
 */
 
@ccclass('PriceController')
export class PriceController extends Component {
    // * FIELDs
    @property(String)
    private namePrice: String = null;

    // * PUBLIC FUNCTIONs
    public getNamePrice(){
        return this.namePrice;
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
