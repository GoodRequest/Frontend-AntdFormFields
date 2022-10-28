"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const helper_1 = require("../utils/helper");
const { Item } = antd_1.Form;
const CheckboxField = (props) => {
    const { input, label, required, disabled, meta: { form, error, touched }, placeholder, className, style } = props;
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ required: required, label: label, help: touched && error, className: className, validateStatus: error && touched ? 'error' : undefined, style: style }, { children: (0, jsx_runtime_1.jsx)(antd_1.Row, { children: (0, jsx_runtime_1.jsx)(antd_1.Checkbox, Object.assign({}, input, { id: (0, helper_1.formFieldID)(form, input.name), checked: !!input.value, disabled: disabled }, { children: placeholder })) }) })));
};
exports.default = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map