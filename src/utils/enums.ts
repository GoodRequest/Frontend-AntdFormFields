import { Gutter } from 'antd/lib/grid/row'

export enum KEYBOARD_KEY {
    ENTER = 'Enter'
}

export enum FIELD_MODE {
    INPUT = 'INPUT',
    FILTER = 'FILTER'
}

export const DROPDOWN_POSITION = {
    BOTTOM_LEFT: {
        points: ['tl', 'bl'],
        offset: [0, 4],
        overflow: {
            adjustX: false,
            adjustY: false
        }
    }
}

export enum BYTE_MULTIPLIER {
    KILO = 10 ** 3,
    MEGA = 10 ** 6
}

export const ROW_GUTTER_X_DEFAULT = [4, 0] as Gutter

export const DEFAULT_DATE_INPUT_FORMAT = 'DD.MM.YYYY'

export const DEFAULT_DATE_INIT_FORMAT = 'YYYY-MM-DD'

export const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY'

export const DEFAULT_TIME_FORMAT = 'HH:mm'
