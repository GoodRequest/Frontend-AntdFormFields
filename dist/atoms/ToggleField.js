"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const { Item } = antd_1.Form;
const ToggleField = (props) => {
    const { input, label, required, options, size, meta: { error, touched }, style, disabled } = props;
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ required: required, label: label, help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style }, { children: (0, jsx_runtime_1.jsx)(antd_1.Radio.Group, { optionType: 'button', size: size, className: 'toggle-btn', buttonStyle: 'solid', value: input.value || [], options: options, onChange: input.onChange, disabled: disabled }) })));
};
exports.default = ToggleField;
//# sourceMappingURL=ToggleField.js.map