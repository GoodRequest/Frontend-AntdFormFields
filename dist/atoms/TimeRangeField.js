"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const lodash_1 = require("lodash");
const classnames_1 = __importDefault(require("classnames"));
const react_1 = require("react");
const dayjs_1 = __importDefault(require("dayjs"));
const antd_1 = require("antd");
const helper_1 = require("../utils/helper");
const enums_1 = require("../utils/enums");
const icons_1 = require("@ant-design/icons");
const { Item } = antd_1.Form;
const TimeRangeField = (props) => {
    const { names, placeholders, labels, disabled, clearIcon, allowClear, minuteStep, getPopupContainer, required, size, itemClassName, timeFormat = enums_1.DEFAULT_TIME_FORMAT, hideHelp } = props;
    return ((0, jsx_runtime_1.jsx)(antd_1.Row, Object.assign({ gutter: enums_1.ROW_GUTTER_X_DEFAULT }, { children: (0, lodash_1.map)(names, (name, index) => {
            const meta = (0, lodash_1.get)(props, `${name}.meta`);
            const input = (0, lodash_1.get)(props, `${name}.input`);
            const inputRef = (0, react_1.createRef)();
            let pickerValue;
            if (input.value) {
                pickerValue = (0, dayjs_1.default)(input.value, timeFormat);
            }
            const onChangeWrap = (valueWithSeconds) => {
                var _a;
                // NOTE: neporovnavaj sekundy, ak kliknes na dropdown tlacidlo "Teraz"
                const value = valueWithSeconds.set('seconds', 0).set('milliseconds', 0);
                let newValue = value.format(timeFormat);
                const other = (0, dayjs_1.default)((0, lodash_1.get)(props, `${names[index === 0 ? 1 : 0]}.input.value`), timeFormat);
                let isNorm;
                if (index === 0 && value >= other) {
                    newValue = other.subtract(1, 'minute').format(timeFormat);
                    isNorm = true;
                }
                else if (index === 1 && value <= other) {
                    newValue = other.set('minutes', other.minute() + 1).format(timeFormat);
                    isNorm = true;
                }
                // NOTE: blurni input aby sa normalizovana hodnota prejavila hned po vybere
                if (isNorm) {
                    (_a = inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) === null || _a === void 0 ? void 0 : _a.blur();
                }
                input.onChange(newValue);
            };
            const onClear = (value) => {
                if (!value) {
                    input.onChange(null);
                }
                else {
                    onChangeWrap(value);
                }
            };
            return ((0, jsx_runtime_1.jsx)(antd_1.Col, Object.assign({ span: 12 }, { children: (0, jsx_runtime_1.jsx)(Item, Object.assign({ className: (0, classnames_1.default)('w-full', itemClassName), label: labels === null || labels === void 0 ? void 0 : labels[index], required: required, help: hideHelp ? undefined : meta.touched && meta.error, validateStatus: meta.touched && meta.error ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)(antd_1.TimePicker, { ref: inputRef, id: (0, helper_1.formFieldID)(meta.form, input.name), dropdownAlign: enums_1.DROPDOWN_POSITION.BOTTOM_LEFT, onSelect: onChangeWrap, onChange: onClear, format: timeFormat, value: pickerValue, className: 'w-full date-input time-input', popupClassName: 'time-dropdown', size: size, suffixIcon: (0, jsx_runtime_1.jsx)(icons_1.ClockCircleOutlined, { className: 'text-black' }), placeholder: placeholders[index], disabled: disabled, clearIcon: clearIcon, allowClear: allowClear, minuteStep: minuteStep, getPopupContainer: getPopupContainer || ((node) => node) }) })) }), name));
        }) })));
};
exports.default = TimeRangeField;
//# sourceMappingURL=TimeRangeField.js.map