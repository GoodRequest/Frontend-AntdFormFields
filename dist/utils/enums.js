"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_TIME_FORMAT = exports.DEFAULT_DATE_FORMAT = exports.DEFAULT_DATE_INIT_FORMAT = exports.DEFAULT_DATE_INPUT_FORMAT = exports.ROW_GUTTER_X_DEFAULT = exports.BYTE_MULTIPLIER = exports.DROPDOWN_POSITION = exports.FIELD_MODE = exports.KEYBOARD_KEY = void 0;
var KEYBOARD_KEY;
(function (KEYBOARD_KEY) {
    KEYBOARD_KEY["ENTER"] = "Enter";
})(KEYBOARD_KEY = exports.KEYBOARD_KEY || (exports.KEYBOARD_KEY = {}));
var FIELD_MODE;
(function (FIELD_MODE) {
    FIELD_MODE["INPUT"] = "INPUT";
    FIELD_MODE["FILTER"] = "FILTER";
})(FIELD_MODE = exports.FIELD_MODE || (exports.FIELD_MODE = {}));
exports.DROPDOWN_POSITION = {
    BOTTOM_LEFT: {
        points: ['tl', 'bl'],
        offset: [0, 4],
        overflow: {
            adjustX: false,
            adjustY: false
        }
    }
};
var BYTE_MULTIPLIER;
(function (BYTE_MULTIPLIER) {
    BYTE_MULTIPLIER[BYTE_MULTIPLIER["KILO"] = 1000] = "KILO";
    BYTE_MULTIPLIER[BYTE_MULTIPLIER["MEGA"] = 1000000] = "MEGA";
})(BYTE_MULTIPLIER = exports.BYTE_MULTIPLIER || (exports.BYTE_MULTIPLIER = {}));
exports.ROW_GUTTER_X_DEFAULT = [4, 0];
exports.DEFAULT_DATE_INPUT_FORMAT = 'DD.MM.YYYY';
exports.DEFAULT_DATE_INIT_FORMAT = 'YYYY-MM-DD';
exports.DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
exports.DEFAULT_TIME_FORMAT = 'HH:mm';
//# sourceMappingURL=enums.js.map