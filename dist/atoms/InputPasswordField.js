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
const antd_1 = require("antd");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
const helper_1 = require("../utils/helper");
const { Item } = antd_1.Form;
const InputPasswordField = (props) => {
    const { input, size, placeholder, label, required, type, prefix, disabled, style, customOnBlur, meta: { form, error, touched }, hideHelp, maxLength, readOnly, className, tooltip, icon, hideIcon } = props;
    const onChange = (0, react_1.useCallback)((e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        input.onChange((0, lodash_1.trimStart)(val));
    }, [input]);
    const onBlur = (0, react_1.useCallback)((e) => __awaiter(void 0, void 0, void 0, function* () {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        // NOTE: wait until redux-form "BLUR" action is finished
        yield input.onBlur(val);
        if (customOnBlur) {
            customOnBlur(val);
        }
    }), [input, customOnBlur]);
    const onFocus = (0, react_1.useCallback)((e) => __awaiter(void 0, void 0, void 0, function* () {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        if (input.onFocus) {
            input.onFocus(val);
        }
    }), [input]);
    const renderToggleIcon = (visible) => {
        if (visible) {
            return icon;
        }
        return hideIcon;
    };
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, style: style, className: (0, classnames_1.default)(className, { 'form-item-disabled': disabled, readOnly }), help: hideHelp ? undefined : touched && error, validateStatus: error && touched ? 'error' : undefined, tooltip: tooltip }, { children: (0, jsx_runtime_1.jsx)(antd_1.Input.Password, Object.assign({}, input, { id: (0, helper_1.formFieldID)(form, input.name), className: (0, classnames_1.default)('input-password'), onChange: onChange, onBlur: onBlur, size: size || 'middle', onFocus: onFocus, value: input.value, iconRender: renderToggleIcon, placeholder: placeholder, type: type || 'text', prefix: prefix, disabled: disabled, maxLength: maxLength })) })));
};
exports.default = (0, react_1.memo)(InputPasswordField);
//# sourceMappingURL=InputPasswordField.js.map