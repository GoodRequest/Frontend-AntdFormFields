"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lodash_1 = require("lodash");
const antd_1 = require("antd");
const classnames_1 = __importDefault(require("classnames"));
const TextareaField = (props) => {
    const { input, prefix, disabled, label, placeholder, required, meta: { error, touched }, rows, autoSize, allowClear, style, maxLength, focusRow, readOnly, className, size, showLettersCount } = props;
    const [autoSizeState, setSutoSizeState] = (0, react_1.useState)(undefined);
    const ref = (0, react_1.useRef)(null);
    const parseValue = (value) => (0, lodash_1.trimStart)(value) || null;
    const onChange = (0, react_1.useCallback)((e) => {
        if (input.onChange) {
            const val = parseValue((0, lodash_1.get)(e, 'target.value'));
            input.onChange(val, e.target.name);
        }
    }, [input]);
    const onFocus = (0, react_1.useCallback)((e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
        if (focusRow) {
            setSutoSizeState({ minRows: focusRow, maxRows: 10 });
            // ref?.current?.resizableTextArea?.resizeOnNextFrame()
        }
    }, [focusRow, input, setSutoSizeState]);
    const onBlur = (0, react_1.useCallback)((e) => {
        if (input.onBlur) {
            const val = parseValue((0, lodash_1.get)(e, 'target.value'));
            input.onBlur(val, e.target.name);
        }
        if (focusRow) {
            setSutoSizeState({ minRows: 1, maxRows: 10 });
            // ref?.current?.resizableTextArea?.resizeOnNextFrame()
        }
    }, [focusRow, input, setSutoSizeState]);
    const lettersCount = (0, react_1.useMemo)(() => {
        var _a;
        return ((0, jsx_runtime_1.jsxs)(antd_1.Row, Object.assign({ className: 'justify-between w-full pr-2' }, { children: [(0, jsx_runtime_1.jsx)("span", { children: label }), (0, jsx_runtime_1.jsx)("i", Object.assign({ className: 'xs-regular letters-count', style: { lineHeight: '22px' } }, { children: `${(_a = input === null || input === void 0 ? void 0 : input.value) === null || _a === void 0 ? void 0 : _a.length}/${maxLength}` }))] })));
    }, [maxLength, input, label]);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ label: showLettersCount ? lettersCount : label, required: required, style: style, help: touched && error, className: (0, classnames_1.default)(className, { 'form-item-disabled': disabled, readOnly }), validateStatus: error && touched ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)(antd_1.Input.TextArea, Object.assign({}, input, { onChange: onChange, className: 'textarea', value: input.value, onFocus: onFocus, onBlur: onBlur, placeholder: placeholder, prefix: prefix, disabled: disabled, rows: rows, autoSize: autoSizeState || autoSize, allowClear: allowClear, maxLength: maxLength, ref: ref, size: size })) })));
};
exports.default = TextareaField;
//# sourceMappingURL=TextareaField.js.map