"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dayjs_1 = __importDefault(require("dayjs"));
const classnames_1 = __importDefault(require("classnames"));
const antd_1 = require("antd");
const enums_1 = require("../utils/enums");
// eslint-disable-next-line import/no-cycle
const helper_1 = require("../utils/helper");
const DateField = (props) => {
    const { input, label, required, style, meta: { form, error, touched }, format = enums_1.DEFAULT_DATE_INPUT_FORMAT, placeholder, disabledDate, disabled, allowClear, hideHelp, disableFuture, disablePast, getPopupContainer, compareFrom1, compareFrom2, compareTo1, size, rounded, readOnly, suffixIcon, clearIcon, showToday = true, defaultPickerValue, validateTo, className } = props;
    let value;
    if (input.value && (0, dayjs_1.default)(input.value).isValid()) {
        value = (0, dayjs_1.default)(input.value);
    }
    const disabledDateWrap = (0, react_1.useCallback)((currentDate) => {
        let disable = false;
        if (disabledDate) {
            disable = disabledDate(currentDate);
        }
        else if (disableFuture) {
            disable = currentDate && currentDate > (0, dayjs_1.default)().endOf('day');
        }
        else if (disablePast) {
            disable = currentDate && currentDate < (0, dayjs_1.default)().startOf('day');
        }
        if (compareFrom1 || compareFrom2) {
            const dates = [];
            if (compareFrom1) {
                dates.push(compareFrom1);
            }
            if (compareFrom2) {
                dates.push(compareFrom2);
            }
            const date = dayjs_1.default.max(dates);
            disable = currentDate.isBefore(date, 'date');
        }
        if (!disable && compareTo1) {
            if (disableFuture) {
                disable = currentDate && currentDate > (0, dayjs_1.default)().endOf('day');
            }
            else {
                disable = currentDate.isAfter(compareTo1, 'date');
            }
        }
        if (validateTo) {
            disable = currentDate.isBefore(validateTo);
        }
        return disable;
    }, [compareFrom1, compareFrom2, compareTo1, disableFuture, disablePast, disabledDate, validateTo]);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ label: label, required: required, style: style, help: hideHelp ? undefined : touched && error, className: (0, classnames_1.default)({ 'form-item-disabled': disabled, readOnly }), validateStatus: error && touched ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)(antd_1.DatePicker, Object.assign({ id: (0, helper_1.formFieldID)(form, input.name) }, input, { className: (0, classnames_1.default)('date-input w-full', { 'rounded-full': rounded, 'allow-clear': allowClear }, className), dropdownAlign: enums_1.DROPDOWN_POSITION.BOTTOM_LEFT, onBlur: () => { }, onChange: (val) => {
                if (val) {
                    input.onChange(val.format(enums_1.DEFAULT_DATE_INIT_FORMAT));
                }
                else {
                    input.onChange(null);
                }
            }, format: format, value: value, defaultPickerValue: defaultPickerValue, size: size, clearIcon: clearIcon, suffixIcon: suffixIcon, placeholder: placeholder, disabledDate: disabledDateWrap, disabled: disabled, allowClear: allowClear, getPopupContainer: getPopupContainer || ((node) => node), showToday: showToday })) })));
};
exports.default = DateField;
//# sourceMappingURL=DateField.js.map