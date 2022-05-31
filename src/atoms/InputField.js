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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var antd_1 = require("antd");
var classnames_1 = require("classnames");
var icons_1 = require("@ant-design/icons");
var lodash_1 = require("lodash");
var enums_1 = require("../utils/enums");
// eslint-disable-next-line import/no-cycle
var helper_1 = require("../utils/helper");
var Item = antd_1.Form.Item;
var InputField = function (props) {
    var input = props.input, size = props.size, placeholder = props.placeholder, label = props.label, required = props.required, type = props.type, prefix = props.prefix, disabled = props.disabled, style = props.style, customOnBlur = props.customOnBlur, _a = props.meta, form = _a.form, error = _a.error, touched = _a.touched, hideHelp = props.hideHelp, maxLength = props.maxLength, _b = props.fieldMode, fieldMode = _b === void 0 ? enums_1.FIELD_MODE.INPUT : _b, readOnly = props.readOnly, className = props.className, customOnChange = props.customOnChange, allowClear = props.allowClear, suffix = props.suffix, addonBefore = props.addonBefore, focused = props.focused;
    var inputRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(function () {
        if (inputRef.current && focused) {
            inputRef.current.focus();
        }
    }, [focused]);
    var onChange = (0, react_1.useCallback)(function (e) {
        // NOTE: prevent to have "" empty string as empty value
        var val = e.target.value ? (0, lodash_1.trimStart)(e.target.value) : null;
        var change = customOnChange || input.onChange;
        change(val);
    }, [input, customOnChange]);
    var onBlur = (0, react_1.useCallback)(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    val = e.target.value ? (0, lodash_1.trim)(e.target.value) : null;
                    // NOTE: wait until redux-form "BLUR" action is finished
                    return [4 /*yield*/, input.onBlur(val)];
                case 1:
                    // NOTE: wait until redux-form "BLUR" action is finished
                    _a.sent();
                    if (customOnBlur) {
                        customOnBlur(val);
                    }
                    return [2 /*return*/];
            }
        });
    }); }, [input, customOnBlur]);
    var onFocus = (0, react_1.useCallback)(function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var val;
        return __generator(this, function (_a) {
            val = e.target.value ? e.target.value : null;
            if (input.onFocus) {
                input.onFocus(val);
            }
            return [2 /*return*/];
        });
    }); }, [input]);
    return (<Item label={label} required={required} style={style} className={(0, classnames_1["default"])(className, { 'form-item-disabled': disabled, readOnly: readOnly })} help={hideHelp ? undefined : touched && error} validateStatus={error && touched ? 'error' : undefined}>
			<antd_1.Input {...input} id={(0, helper_1.formFieldID)(form, input.name)} className={(0, classnames_1["default"])('input', { 'input-filter': fieldMode === enums_1.FIELD_MODE.FILTER })} onChange={onChange} onBlur={onBlur} addonBefore={addonBefore} size={size || 'middle'} onFocus={onFocus} value={input.value} placeholder={placeholder} type={type || 'text'} 
    // Ak je filter cez RemoveIcon zmaat string (ant ma pre input aj allowClear ale neda sa mu zmenit ikona tak ako napr v selecte preto to je takto robene)
    suffix={(allowClear || fieldMode === enums_1.FIELD_MODE.FILTER) && input.value ? (<icons_1.CloseOutlined onClick={function () { return input.onChange(''); }}/>) : (suffix)} prefix={fieldMode === enums_1.FIELD_MODE.FILTER ? <icons_1.SearchOutlined /> : prefix} disabled={disabled} maxLength={maxLength} ref={inputRef}/>
		</Item>);
};
exports["default"] = (0, react_1.memo)(InputField);
