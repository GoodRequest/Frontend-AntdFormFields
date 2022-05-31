"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const antd_1 = require("antd");
const dayjs_1 = __importDefault(require("dayjs"));
const lodash_1 = require("lodash");
const classnames_1 = __importDefault(require("classnames"));
const enums_1 = require("../utils/enums");
const { Item } = antd_1.Form;
class DateRangeField extends react_1.default.Component {
    constructor() {
        super(...arguments);
        this.disabledStartDate = (startValue) => {
            const { names, disablePast, disableStartDayEnd } = this.props;
            const endValue = (0, lodash_1.get)(this.props, `${names[1]}.input.value`);
            const yesterday = (0, dayjs_1.default)().subtract(1, 'day');
            if (disablePast && (startValue === null || startValue === void 0 ? void 0 : startValue.isBefore(yesterday))) {
                // disable past
                return true;
            }
            if (startValue === null || startValue === void 0 ? void 0 : startValue.isAfter(endValue)) {
                // disable StartValue after EndValue
                return true;
            }
            return !!(disableStartDayEnd && ((startValue === null || startValue === void 0 ? void 0 : startValue.isAfter(endValue)) || (startValue === null || startValue === void 0 ? void 0 : startValue.isSame(endValue))));
        };
        this.disabledEndDate = (endValue) => {
            const { names, disablePast, disableStartDayEnd } = this.props;
            const startValue = (0, lodash_1.get)(this.props, `${names[0]}.input.value`);
            if (disablePast && (endValue === null || endValue === void 0 ? void 0 : endValue.isBefore((0, dayjs_1.default)()))) {
                // disable past
                return true;
            }
            if (endValue === null || endValue === void 0 ? void 0 : endValue.isBefore(startValue)) {
                // disable EndValue before StartValue
                return true;
            }
            return !!(disableStartDayEnd && ((endValue === null || endValue === void 0 ? void 0 : endValue.isBefore(startValue)) || (endValue === null || endValue === void 0 ? void 0 : endValue.isSame(startValue))));
        };
    }
    render() {
        const { names, formats, getCalendarContainer, renderExtraFooter, required, placeholders, disabled, disableStartDayEnd, suffixIcon, clearIcon } = this.props;
        return ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'flex' }, { children: (0, lodash_1.map)(names, (name, index) => {
                const input = (0, lodash_1.get)(this.props, `[${name}].input`);
                const { touched, error } = (0, lodash_1.get)(this.props, `[${name}].meta`);
                let value;
                const format = (0, lodash_1.get)(formats, `[${index}]`) || enums_1.DEFAULT_DATE_INPUT_FORMAT;
                if (input.value && (0, dayjs_1.default)(input.value).isValid()) {
                    value = (0, dayjs_1.default)(input.value);
                }
                const allowClear = !required;
                let disabledDate;
                if (index === 0) {
                    disabledDate = this.disabledStartDate;
                }
                else {
                    disabledDate = this.disabledEndDate;
                }
                return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ required: required, 
                    // @ts-ignore
                    help: touched && error, validateStatus: error && touched ? 'error' : undefined, className: 'w-1/2' }, { children: (0, jsx_runtime_1.jsx)(antd_1.DatePicker, Object.assign({}, input, { className: (0, classnames_1.default)('w-full date-input', { 'allow-clear': allowClear }), onBlur: () => { }, place: true, onChange: (val) => {
                            if (val) {
                                input.onChange(val.format(enums_1.DEFAULT_DATE_INIT_FORMAT));
                            }
                            else {
                                input.onChange(null);
                            }
                        }, arrow: false, getCalendarContainer: getCalendarContainer, format: format, suffixIcon: suffixIcon, clearIcon: clearIcon, allowClear: allowClear || this.props.allowClear, value: value, placeholder: (0, lodash_1.get)(placeholders, `[${index}]`), disabledDate: disabledDate, disabled: disabled, renderExtraFooter: renderExtraFooter, showToday: !(index === 1 && disableStartDayEnd === true), getPopupContainer: this.props.getPopupContainer || ((node) => node) })) }), index));
            }) })));
    }
}
exports.default = DateRangeField;
//# sourceMappingURL=DateRangeField.js.map