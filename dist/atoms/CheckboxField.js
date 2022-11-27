"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const classnames_1 = __importDefault(require("classnames"));
const helper_1 = require("../utils/helper");
const react_1 = require("react");
const { Item } = antd_1.Form;
const CheckboxField = (props) => {
    const { input, label, required, disabled, meta: { form, error, touched }, placeholder, className, style } = props;
    const [value, setValue] = (0, react_1.useState)(false);
    const onChange = (e) => {
        var _a;
        setValue((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked);
    };
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ required: required, label: label, help: touched && error, className: (0, classnames_1.default)(className, 'radio', { 'checkbox-has-error': error && touched }, { 'form-item-disabled': disabled }), validateStatus: error && touched ? 'error' : undefined, style: style }, { children: (0, jsx_runtime_1.jsx)(antd_1.Row, { children: (0, jsx_runtime_1.jsx)(antd_1.Checkbox, Object.assign({}, input, { id: (0, helper_1.formFieldID)(form, input.name), checked: input.onChange ? !!input.value : value, disabled: disabled, onChange: input.onChange ? input.onChange : onChange }, { children: placeholder })) }) })));
};
exports.default = CheckboxField;
//# sourceMappingURL=CheckboxField.js.map