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
const icons_1 = require("@ant-design/icons");
const lodash_1 = require("lodash");
const enums_1 = require("../utils/enums");
// eslint-disable-next-line import/no-cycle
const helper_1 = require("../utils/helper");
const { Item } = antd_1.Form;
const InputField = (props) => {
    const { input, size, placeholder, label, required, type, prefix, disabled, style, customOnBlur, meta: { form, error, touched }, hideHelp, maxLength, fieldMode = enums_1.FIELD_MODE.INPUT, readOnly, className, customOnChange, allowClear, suffix, addonBefore, focused } = props;
    const inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (inputRef.current && focused) {
            inputRef.current.focus();
        }
    }, [focused]);
    const onChange = (0, react_1.useCallback)((e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? (0, lodash_1.trimStart)(e.target.value) : null;
        const change = customOnChange || input.onChange;
        change(val);
    }, [input, customOnChange]);
    const onBlur = (0, react_1.useCallback)((e) => __awaiter(void 0, void 0, void 0, function* () {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? (0, lodash_1.trim)(e.target.value) : null;
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
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, style: style, className: (0, classnames_1.default)(className, { 'form-item-disabled': disabled, readOnly }), help: hideHelp ? undefined : touched && error, validateStatus: error && touched ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)(antd_1.Input, Object.assign({}, input, { id: (0, helper_1.formFieldID)(form, input.name), className: (0, classnames_1.default)('input', { 'input-filter': fieldMode === enums_1.FIELD_MODE.FILTER }), onChange: onChange, onBlur: onBlur, addonBefore: addonBefore, size: size || 'middle', onFocus: onFocus, value: input.value, placeholder: placeholder, type: type || 'text', 
            // Ak je filter cez RemoveIcon zmaat string (ant ma pre input aj allowClear ale neda sa mu zmenit ikona tak ako napr v selecte preto to je takto robene)
            suffix: (allowClear || fieldMode === enums_1.FIELD_MODE.FILTER) && input.value ? ((0, jsx_runtime_1.jsx)(icons_1.CloseOutlined, { onClick: () => input.onChange('') })) : (suffix), prefix: fieldMode === enums_1.FIELD_MODE.FILTER ? (0, jsx_runtime_1.jsx)(icons_1.SearchOutlined, {}) : prefix, disabled: disabled, maxLength: maxLength, ref: inputRef })) })));
};
exports.default = (0, react_1.memo)(InputField);
//# sourceMappingURL=InputField.js.map