"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwitchSmallDisabled = exports.SwitchSmall = exports.SwitchDisabled = exports.SwitchDefault = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
const SwitchField_1 = __importDefault(require("../../atoms/SwitchField"));
exports.default = {
    title: 'Fields/Switch',
    component: SwitchField_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {
        meta: { touched: false },
        input: {
            onChange: () => { }
        }
    }
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(antd_1.Form, { children: (0, jsx_runtime_1.jsx)(SwitchField_1.default, Object.assign({}, args)) }));
// stories
exports.SwitchDefault = Template.bind({});
exports.SwitchDisabled = Template.bind({});
exports.SwitchSmall = Template.bind({});
exports.SwitchSmallDisabled = Template.bind({});
// arguments
exports.SwitchDisabled.args = {
    disabled: true
};
exports.SwitchSmall.args = {
    size: 'small',
    defaultChecked: true
};
exports.SwitchSmallDisabled.args = {
    size: 'small',
    disabled: true
};
//# sourceMappingURL=SwitchField.stories.js.map