"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const dayjs_1 = __importDefault(require("dayjs"));
const antd_1 = require("antd");
const enums_1 = require("../utils/enums");
// eslint-disable-next-line import/no-cycle
const helper_1 = require("../utils/helper");
class TimeField extends react_1.Component {
    constructor() {
        super(...arguments);
        this.state = { close: undefined };
        this.onKeyDown = (e) => {
            if (e.keyCode === 13) {
                this.setState({ close: true }, () => {
                    this.setState({ close: undefined });
                });
            }
        };
        this.onChangeWrap = (value) => {
            const { input, timeFormat = enums_1.DEFAULT_TIME_FORMAT } = this.props;
            const timeString = value.format(timeFormat);
            input.onChange(timeString || null);
        };
        this.onClear = (value) => {
            const { input } = this.props;
            if (!value) {
                input.onChange(null);
            }
            else {
                this.onChangeWrap(value);
            }
        };
    }
    render() {
        const { input, label, required, style, meta: { error, touched, form }, timeFormat = enums_1.DEFAULT_TIME_FORMAT, placeholder, disabled, allowClear, minuteStep, getPopupContainer, popupClassName, clearIcon, suffixIcon, size } = this.props;
        let value;
        if (input.value) {
            value = (0, dayjs_1.default)(input.value, timeFormat);
        }
        const control = this.state.close ? { open: false } : {};
        return ((0, jsx_runtime_1.jsx)(antd_1.Form.Item, Object.assign({ label: label, required: required, style: style, help: touched && error, validateStatus: error && touched ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)("div", Object.assign({ onKeyDown: this.onKeyDown, role: 'button', tabIndex: 0 }, { children: (0, jsx_runtime_1.jsx)(antd_1.TimePicker, Object.assign({ id: (0, helper_1.formFieldID)(form, input.name), dropdownAlign: enums_1.DROPDOWN_POSITION.BOTTOM_LEFT, onSelect: this.onChangeWrap, onChange: this.onClear, format: timeFormat, value: value, className: 'date-input time-input', popupClassName: popupClassName || 'time-dropdown', suffixIcon: suffixIcon, placeholder: placeholder, disabled: disabled, clearIcon: clearIcon, allowClear: allowClear, minuteStep: minuteStep, getPopupContainer: getPopupContainer || ((node) => node), size: size }, control)) })) })));
    }
}
exports.default = TimeField;
//# sourceMappingURL=TimeField.js.map