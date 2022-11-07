"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const antd_1 = require("antd");
const react_input_mask_1 = __importDefault(require("react-input-mask"));
const classnames_1 = __importDefault(require("classnames"));
const { Item } = antd_1.Form;
const InputMaskedField = (props) => {
    const { input, label, required, disabled, style, meta: { error, touched, valid }, mask, uppercaseOnChange, placeholder, size } = props;
    const handleChange = (0, react_1.useCallback)((e) => {
        // NOTE: prevent to have "" empty string as empty value
        let val = e.target.value ? e.target.value : null;
        if (val && uppercaseOnChange) {
            val = val.toUpperCase();
        }
        input.onChange(val);
    }, [input, uppercaseOnChange]);
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, style: style, help: touched && error, validateStatus: error && touched ? 'error' : touched && valid ? 'success' : undefined }, { children: (0, jsx_runtime_1.jsx)(react_input_mask_1.default, Object.assign({}, input, { className: (0, classnames_1.default)('ant-input', 'input', 'input-masked', { 'input-masked--large': size === 'large' }), mask: mask, onChange: handleChange, value: input.value, disabled: disabled, placeholder: placeholder })) })));
};
exports.default = (0, react_1.memo)(InputMaskedField);
//# sourceMappingURL=InputMaskedField.js.map