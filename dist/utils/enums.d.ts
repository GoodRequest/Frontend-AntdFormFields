import { Gutter } from 'antd/lib/grid/row';
export declare enum KEYBOARD_KEY {
    ENTER = "Enter"
}
export declare enum FIELD_MODE {
    INPUT = "INPUT",
    FILTER = "FILTER"
}
export declare const DROPDOWN_POSITION: {
    BOTTOM_LEFT: {
        points: string[];
        offset: number[];
        overflow: {
            adjustX: boolean;
            adjustY: boolean;
        };
    };
};
export declare enum BYTE_MULTIPLIER {
    KILO = 1000,
    MEGA = 1000000
}
export declare const ROW_GUTTER_X_DEFAULT: Gutter;
export declare const DEFAULT_DATE_INPUT_FORMAT = "DD.MM.YYYY";
export declare const DEFAULT_DATE_INIT_FORMAT = "YYYY-MM-DD";
export declare const DEFAULT_DATE_FORMAT = "DD.MM.YYYY";
export declare const DEFAULT_TIME_FORMAT = "HH:mm";
