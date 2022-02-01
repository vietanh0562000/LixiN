import { Prefab, _decorator } from "cc";

const { ccclass, property } = _decorator;

@ccclass('Test')
export class Test{
    @property(Prefab)
    private price: Prefab = null;
}