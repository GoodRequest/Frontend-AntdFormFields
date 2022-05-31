"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const antd_1 = require("antd");
const helper_1 = require("../utils/helper");
const enums_1 = require("../utils/enums");
const { Item } = antd_1.Form;
const SwitchField = (props) => {
    const { input, label, disabled, meta: { form, error, touched }, style, size, onClick, checked, className, suffixIcon, extraText, description, offsetLabel, customLabel, customOnChange } = props;
    // NOTE: ak existuje label znamena to ze switch je pouzity ako label vo forme a vtedy sa pouzije novy layout ikona + label text + switch
    // Ak nie je label pouzite je v tabulke alebo vo filtri a vtedy sa nerenderuje label ani ikona ale len samotny switch field
    const checkedState = input.value === 'true' || input.value === true || checked;
    const onChange = (0, react_1.useCallback)((chck) => {
        if (customOnChange) {
            customOnChange(chck);
        }
        else {
            input.onChange(chck);
        }
    }, [input, customOnChange]);
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, className: (0, classnames_1.default)(className, { 'pt-25px': offsetLabel }) }, { children: label || customLabel ? ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: (0, classnames_1.default)('switch', { 'pointer-events-none': disabled, 'bg-gray-50': disabled }), onClick: () => onChange(!checkedState), onKeyDown: (e) => {
                if (e.key === enums_1.KEYBOARD_KEY.ENTER) {
                    onChange(!checkedState);
                }
            }, role: 'checkbox', "aria-checked": checkedState, tabIndex: 0 }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'flex items-center justify-between w-full' }, { children: [(0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'switch-label flex items-center w-11/12' }, { children: [customLabel || ((0, jsx_runtime_1.jsx)(antd_1.Typography.Paragraph, Object.assign({ ellipsis: { rows: 1, tooltip: true }, className: 'label' }, { children: label }))), description && ((0, jsx_runtime_1.jsx)(antd_1.Tooltip, Object.assign({ title: description, className: 'cursor-pointer' }, { children: suffixIcon })))] })), (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: (0, classnames_1.default)('flex justify-end extra-text w-2/12 sm:w-4/12 text-right', { 'text-blue-600': checkedState }) }, { children: [(0, jsx_runtime_1.jsx)("div", { children: extraText }), (0, jsx_runtime_1.jsx)("span", Object.assign({ id: (0, helper_1.formFieldID)(form, input.name) }, { children: (0, jsx_runtime_1.jsx)(antd_1.Switch, { className: 'ml-2', checked: checkedState, disabled: disabled, size: size, onClick: onClick, tabIndex: -1 }) }))] }))] })) }))) : ((0, jsx_runtime_1.jsx)(antd_1.Switch, { onChange: onChange, checked: checkedState, disabled: disabled, size: size, onClick: onClick })) })));
};
exports.default = SwitchField;
//# sourceMappingURL=SwitchField.js.map