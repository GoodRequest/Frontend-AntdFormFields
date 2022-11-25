"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
// ant
const antd_1 = require("antd");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const react_1 = require("react");
const helper_1 = require("../utils/helper");
const { Item } = antd_1.Form;
const CheckboxGroupField = (props) => {
    const { input, options, label, required, meta: { form, error, touched }, style, checkboxGroupStyles, defaultValue, horizontal, className, disabled, large } = props;
    const [value, setValue] = (0, react_1.useState)([]);
    const checkboxes = (0, lodash_1.map)(options, (option) => {
        if (typeof option === 'string') {
            return ((0, jsx_runtime_1.jsx)(antd_1.Checkbox, Object.assign({ value: option, className: (0, classnames_1.default)({ large, 'inline-flex': horizontal }), disabled: disabled }, { children: option }), option));
        }
        return ((0, jsx_runtime_1.jsx)(antd_1.Checkbox, Object.assign({ disabled: option.disabled, value: option.value, className: (0, classnames_1.default)('my-1', { large, 'inline-flex': horizontal }) }, { children: option.label }), `${option.value}`));
    });
    const onChange = (e) => {
        setValue(e);
    };
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, help: touched && error, className: (0, classnames_1.default)(className, 'radio', { 'checkbox-has-error': error && touched }, { 'form-item-disabled': disabled }), validateStatus: error && touched ? 'error' : undefined, style: style }, { children: (0, jsx_runtime_1.jsx)(antd_1.Checkbox.Group
        // @ts-ignore
        , Object.assign({ 
            // @ts-ignore
            id: (0, helper_1.formFieldID)(form, input.name), className: 'flex flex-wrap', value: value, onChange: onChange, defaultValue: defaultValue, style: Object.assign(Object.assign({}, checkboxGroupStyles), { flexDirection: horizontal ? 'row' : 'column' }) }, { children: checkboxes })) })));
};
exports.default = CheckboxGroupField;
//# sourceMappingURL=CheckboxGroupField.js.map