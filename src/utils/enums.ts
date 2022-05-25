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

export const DEFAULT_DATE_INPUT_FORMAT = 'DD.MM.YYYY'

export const DEFAULT_DATE_INIT_FORMAT = 'YYYY-MM-DD'

export const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY'

export const DEFAULT_TIME_FORMAT = 'HH:mm'
