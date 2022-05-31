"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Error = exports.Required = exports.WithLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
const InputMaskedField_1 = __importDefault(require("../../atoms/InputMaskedField"));
const inputDefaultProps = {
    form: undefined,
    error: null,
    onBlur: () => { },
    onChange: () => { }
};
exports.default = {
    title: 'Fields/Masked',
    component: InputMaskedField_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {
        input: inputDefaultProps,
        meta: { touched: false },
        size: 'large'
    }
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(InputMaskedField_1.default, Object.assign({}, args)) })));
// stories
exports.WithLabel = Template.bind({});
exports.Required = Template.bind({});
exports.Error = Template.bind({});
exports.Disabled = Template.bind({});
// arguments
exports.WithLabel.args = {
    label: 'Label',
    mask: '99/99/9999'
};
exports.Required.args = {
    label: 'Label',
    required: true,
    mask: '99/99/9999'
};
exports.Error.args = {
    label: 'Label',
    meta: {
        error: 'Error message',
        touched: true
    },
    mask: '99/99/9999'
};
exports.Disabled.args = {
    label: 'Label',
    disabled: true,
    mask: '99/99/9999'
};
//# sourceMappingURL=InputMaskedField.stories.js.map