"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const antd_1 = require("antd");
const lodash_1 = require("lodash");
const dayjs_1 = __importDefault(require("dayjs"));
const classnames_1 = __importDefault(require("classnames"));
const enums_1 = require("../utils/enums");
const helper_1 = require("../utils/helper");
const { RangePicker } = antd_1.DatePicker;
const DateRangePickerField = (props) => {
    const { renderExtraFooter, input, placeholder, label, format = enums_1.DEFAULT_DATE_FORMAT, open, getPopupContainer, style, dropdownClassName, separator, suffixIcon, disableFuture, disablePast, disabledDate, itemRef, required, meta, size, disabled, className } = props;
    const onFocus = (e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
    };
    const value = [];
    (0, lodash_1.forEach)(input === null || input === void 0 ? void 0 : input.value, (val) => {
        if (val && (0, dayjs_1.default)(val).isValid()) {
            value.push((0, dayjs_1.default)(val));
        }
    });
    const onChange = (0, react_1.useCallback)((vals) => {
        if (!(0, lodash_1.isEmpty)(vals)) {
            const formattedValues = {
                dateFrom: vals[0].format(enums_1.DEFAULT_DATE_INIT_FORMAT),
                dateTo: vals[1].format(enums_1.DEFAULT_DATE_INIT_FORMAT)
            };
            input.onChange(formattedValues);
        }
        else {
            input.onChange(null);
        }
    }, [input]);
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
        return disable;
    }, [disableFuture, disablePast, disabledDate]);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ style: style, label: label, required: required, help: (meta === null || meta === void 0 ? void 0 : meta.touched) && (meta === null || meta === void 0 ? void 0 : meta.error), validateStatus: (meta === null || meta === void 0 ? void 0 : meta.error) && (meta === null || meta === void 0 ? void 0 : meta.touched) ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ id: (0, helper_1.formFieldID)(meta === null || meta === void 0 ? void 0 : meta.form, input === null || input === void 0 ? void 0 : input.name) }, { children: (0, jsx_runtime_1.jsx)(RangePicker, { ref: itemRef, className: (0, classnames_1.default)('date-picker', className), value: value, onChange: onChange, format: format, onFocus: onFocus, placeholder: placeholder, suffixIcon: suffixIcon, separator: separator, open: open, disabledDate: disabledDateWrap, dropdownClassName: dropdownClassName, renderExtraFooter: renderExtraFooter, getPopupContainer: getPopupContainer || ((node) => node), size: size, disabled: disabled }) })) })));
};
exports.default = DateRangePickerField;
//# sourceMappingURL=DateRangePickerField.js.map