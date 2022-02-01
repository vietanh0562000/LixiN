import { Vec3 } from "cc";

export class Constants {
    public static TIME_CHANGE_PAGE = 0.2;
    public static TIME_PROGRESS_BAR = 3;
    public static TIME_SHOW_POPUP = 0.6;
    public static TIME_LIXI_TO_CENTER = 0.4;
    public static SCALE_DOWN_ANIM = new Vec3(0.8, 0.8, 0.8);
    public static SCALE_UP_ANIM = new Vec3(1.3, 1.3, 1.3);
    public static INFO_CONTAINER = 1;
    public static LIXI_BOARD = 2;
    public static LIXI_MOVES = [
        new Vec3(-150, 0, 0),
        new Vec3(150, 0, 0)
    ]
    public static NORMAL_MOD = 1;
    public static NHUNG_MOD = 2;
}