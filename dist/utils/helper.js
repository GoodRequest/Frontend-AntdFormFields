"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateElementId = exports.getImagesFormValues = exports.getMaxSizeNotifyMessage = exports.createSlug = exports.transformNumberFieldValue = exports.fromStringToFloat = exports.formFieldID = void 0;
const lodash_1 = require("lodash");
const slugify_1 = __importDefault(require("slugify"));
const enums_1 = require("./enums");
const antd_1 = require("antd");
const text_json_1 = __importDefault(require("../utils/text.json"));
const formFieldID = (form, name) => {
    let id;
    if (form && name) {
        // NOTE: element can't be queried if id contains dots
        const fieldSelector = (0, lodash_1.chain)(name)
            .filter((char) => char !== ']')
            .map((char) => (char === '[' || char === '.' ? '-' : char))
            .value()
            .join('');
        id = `${form}-${fieldSelector}`;
    }
    return id;
};
exports.formFieldID = formFieldID;
const fromStringToFloat = (string) => {
    let result;
    if (string && (0, lodash_1.isString)(string)) {
        result = parseFloat((0, lodash_1.replace)(string, ',', '.').replace(' ', ''));
    }
    else if (string) {
        result = Number(string);
    }
    else {
        result = null;
    }
    return result;
};
exports.fromStringToFloat = fromStringToFloat;
/**
 * Returns null - e.g. input was cleared
 *
 * Returns NaN - e.g. input value is "asdf"
 */
const transformNumberFieldValue = (rawValue, min, max, precision, notNullValue) => {
    let result = null;
    const value = typeof rawValue === 'string' ? (0, exports.fromStringToFloat)(rawValue) : rawValue;
    if (!value && notNullValue) {
        result = min;
    }
    if ((0, lodash_1.isNumber)(value) && (0, lodash_1.isFinite)(value)) {
        if ((0, lodash_1.isNumber)(min) && value < min) {
            result = min;
        }
        else if ((0, lodash_1.isNumber)(max) && value > max) {
            result = max;
        }
        else if ((0, lodash_1.isNumber)(min) && (0, lodash_1.isNumber)(max) && value >= min && value <= max) {
            result = value;
        }
    }
    else if (Number.isNaN(value)) {
        result = NaN;
    }
    if ((0, lodash_1.isFinite)(result) && (0, lodash_1.isNumber)(precision)) {
        result = (0, lodash_1.round)(result, precision);
    }
    return result;
};
exports.transformNumberFieldValue = transformNumberFieldValue;
const createSlug = (value, separator = '-', lower = true) => {
    if (value) {
        return (0, slugify_1.default)(value, {
            replacement: separator,
            lower
        });
    }
    return '';
};
exports.createSlug = createSlug;
const getMaxSizeNotifyMessage = (maxFileSize, maxFileText) => {
    let notifyMaxSize;
    if (maxFileSize >= enums_1.BYTE_MULTIPLIER.MEGA) {
        notifyMaxSize = [maxFileSize / enums_1.BYTE_MULTIPLIER.MEGA, 'MB'];
    }
    else {
        notifyMaxSize = [maxFileSize / enums_1.BYTE_MULTIPLIER.KILO, 'KB'];
    }
    return antd_1.notification.error({
        message: (maxFileText === null || maxFileText === void 0 ? void 0 : maxFileText.title) || text_json_1.default.error,
        description: `${(maxFileText === null || maxFileText === void 0 ? void 0 : maxFileText.text) || text_json_1.default.errMessageFileMAxUpload} ${notifyMaxSize[0]} ${notifyMaxSize[1]}`
    });
};
exports.getMaxSizeNotifyMessage = getMaxSizeNotifyMessage;
const getImagesFormValues = (fileList, filesData) => {
    const values = (0, lodash_1.map)(fileList, (file) => {
        const fileData = filesData[(0, lodash_1.get)(file, 'uid')];
        return Object.assign(Object.assign({}, file), { id: (0, lodash_1.get)(file, 'id') || (fileData === null || fileData === void 0 ? void 0 : fileData.id), url: (0, lodash_1.get)(file, 'url') || (fileData === null || fileData === void 0 ? void 0 : fileData.path), signedUrl: fileData === null || fileData === void 0 ? void 0 : fileData.signedUrl });
    });
    return values;
};
exports.getImagesFormValues = getImagesFormValues;
const generateElementId = (key, form) => (form ? `#${form}-${key}` : `#${key}`);
exports.generateElementId = generateElementId;
//# sourceMappingURL=helper.js.map