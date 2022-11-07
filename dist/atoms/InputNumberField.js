"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
// ant
const antd_1 = require("antd");
// utils
// eslint-disable-next-line import/no-cycle
const helper_1 = require("../utils/helper");
const { Item } = antd_1.Form;
const InputNumberField = (props) => {
    const { input, size, placeholder, label, required, disabled, style, meta: { form, error, touched, valid }, min = -99999999, max = 999999999, precision, step, parser, prefix, maxChars = 9, // NOTE: Kazde 9 ciferne cislo je bezpecne pre Postgres Integer typ
    smallInput, defaultValue, type = 'text', rounded, hideHelp, className, notNullValue = false, onPressEnter, readOnly } = props;
    const maxCharsParser = (displayValue) => {
        if (maxChars && maxChars > 0 && displayValue && displayValue.length > maxChars) {
            const formatted = displayValue.slice(0, maxChars);
            return formatted;
        }
        return displayValue || '';
    };
    const inputRef = (0, react_1.useRef)(null);
    const onFocus = (0, react_1.useCallback)((e) => __awaiter(void 0, void 0, void 0, function* () {
        if (input.onFocus) {
            const val = (0, helper_1.transformNumberFieldValue)(e.target.value);
            input.onFocus(val);
        }
    }), [input]);
    const onPressEnterWrap = (0, react_1.useCallback)(() => __awaiter(void 0, void 0, void 0, function* () {
        // NOTE: e.target.value v onPressEnter() može byť 5.5555€ aj keď je precision = 0, v parent komponente treba zavolať ref.blur() a do onBlur príde už zaokrúhlená number hodnota
        if (onPressEnter) {
            const ref = inputRef.current;
            onPressEnter(ref);
        }
    }), [onPressEnter]);
    const onBlur = (0, react_1.useCallback)((e) => __awaiter(void 0, void 0, void 0, function* () {
        const val = (0, helper_1.transformNumberFieldValue)(e.target.value, Number(min), Number(max), precision, notNullValue);
        // NOTE: wait until redux-form "BLUR" action is finished
        yield input.onBlur(val);
    }), [min, max, precision, notNullValue, input]);
    let inputSizeClassName = '';
    if (size && size === 'large') {
        inputSizeClassName = 'ant-input-number-affix-wrapper-large';
    }
    else if (size && size === 'small') {
        inputSizeClassName = 'ant-input-number-affix-wrapper-small';
    }
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, style: style, help: touched && !hideHelp && error, validateStatus: error && touched ? 'error' : touched && valid ? 'success' : undefined, className: (0, classnames_1.default)(className, { 'small-input': smallInput, 'form-item-disabled': disabled, readOnly }) }, { children: (0, jsx_runtime_1.jsx)(antd_1.InputNumber, Object.assign({}, input, { ref: inputRef, style: { width: '100%' }, id: (0, helper_1.formFieldID)(form, input.name), min: min, max: max, size: size || 'middle', defaultValue: defaultValue, value: input.value, placeholder: placeholder, disabled: disabled, precision: precision, prefix: prefix, step: step, type: type || 'text', className: `${(0, classnames_1.default)('input-number', { 'rounded-full': rounded })} ${inputSizeClassName}`, onFocus: onFocus, decimalSeparator: ',', parser: maxChars && maxChars > 0 ? maxCharsParser : parser, 
            // NOTE: Prevent proti posielaniu BLUR akcie so string payloadom - posiela Ant na pozadi
            onBlur: onBlur, onPressEnter: onPressEnterWrap, onChange: input.onChange })) })));
};
exports.default = (0, react_1.memo)(InputNumberField);
//# sourceMappingURL=InputNumberField.js.map