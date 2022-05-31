"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.generateElementId = exports.getImagesFormValues = exports.getMaxSizeNotifyMessage = exports.createSlug = exports.transformNumberFieldValue = exports.fromStringToFloat = exports.formFieldID = void 0;
var lodash_1 = require("lodash");
var slugify_1 = require("slugify");
var enums_1 = require("./enums");
var antd_1 = require("antd");
var text = require('../utils/text.json');
var formFieldID = function (form, name) {
    var id;
    if (form && name) {
        // NOTE: element can't be queried if id contains dots
        var fieldSelector = (0, lodash_1.chain)(name)
            .filter(function (char) { return char !== ']'; })
            .map(function (char) { return (char === '[' || char === '.' ? '-' : char); })
            .value()
            .join('');
        id = "".concat(form, "-").concat(fieldSelector);
    }
    return id;
};
exports.formFieldID = formFieldID;
var fromStringToFloat = function (string) {
    var result;
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
var transformNumberFieldValue = function (rawValue, min, max, precision, notNullValue) {
    var result = null;
    var value = typeof rawValue === 'string' ? (0, exports.fromStringToFloat)(rawValue) : rawValue;
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
var createSlug = function (value, separator, lower) {
    if (separator === void 0) { separator = '-'; }
    if (lower === void 0) { lower = true; }
    if (value) {
        return (0, slugify_1["default"])(value, {
            replacement: separator,
            lower: lower
        });
    }
    return '';
};
exports.createSlug = createSlug;
var getMaxSizeNotifyMessage = function (maxFileSize, maxFileText) {
    var notifyMaxSize;
    if (maxFileSize >= enums_1.BYTE_MULTIPLIER.MEGA) {
        notifyMaxSize = [maxFileSize / enums_1.BYTE_MULTIPLIER.MEGA, 'MB'];
    }
    else {
        notifyMaxSize = [maxFileSize / enums_1.BYTE_MULTIPLIER.KILO, 'KB'];
    }
    return antd_1.notification.error({
        message: (maxFileText === null || maxFileText === void 0 ? void 0 : maxFileText.title) || text.error,
        description: "".concat((maxFileText === null || maxFileText === void 0 ? void 0 : maxFileText.text) || text.errMessageFileMAxUpload, " ").concat(notifyMaxSize[0], " ").concat(notifyMaxSize[1])
    });
};
exports.getMaxSizeNotifyMessage = getMaxSizeNotifyMessage;
var getImagesFormValues = function (fileList, filesData) {
    var values = (0, lodash_1.map)(fileList, function (file) {
        var fileData = filesData[(0, lodash_1.get)(file, 'uid')];
        return __assign(__assign({}, file), { id: (0, lodash_1.get)(file, 'id') || (fileData === null || fileData === void 0 ? void 0 : fileData.id), url: (0, lodash_1.get)(file, 'url') || (fileData === null || fileData === void 0 ? void 0 : fileData.path), signedUrl: fileData === null || fileData === void 0 ? void 0 : fileData.signedUrl });
    });
    return values;
};
exports.getImagesFormValues = getImagesFormValues;
var generateElementId = function (key, form) { return (form ? "#".concat(form, "-").concat(key) : "#".concat(key)); };
exports.generateElementId = generateElementId;
