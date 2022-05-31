"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Error = exports.Required = exports.WithLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
const CheckboxGroupField_1 = __importDefault(require("../../atoms/CheckboxGroupField"));
const inputDefaultProps = {
    form: undefined,
    error: null,
    onBlur: () => { },
    onChange: () => { }
};
const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'];
exports.default = {
    title: 'Fields/CheckboxGroupField',
    component: CheckboxGroupField_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {
        input: inputDefaultProps,
        // placeholder: 'Placeholder',
        meta: { touched: false },
        size: 'large'
    }
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(CheckboxGroupField_1.default, Object.assign({}, args)) })));
// stories
exports.WithLabel = Template.bind({});
exports.Required = Template.bind({});
exports.Error = Template.bind({});
exports.Disabled = Template.bind({});
// arguments
exports.WithLabel.args = {
    label: 'Label',
    options
};
exports.Required.args = {
    label: 'Label',
    required: true,
    options
};
exports.Error.args = {
    label: 'Label',
    options,
    meta: {
        error: 'Error message',
        touched: true
    }
};
exports.Disabled.args = {
    label: 'Label',
    disabled: true,
    options
};
//# sourceMappingURL=CheckBoxGroupFields.stories.js.map