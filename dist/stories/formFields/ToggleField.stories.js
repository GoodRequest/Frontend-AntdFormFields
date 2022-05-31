"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToggleSmallDisabled = exports.ToggleSmall = exports.ToggleDisabled = exports.ToggleDefault = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
const ToggleField_1 = __importDefault(require("../../atoms/ToggleField"));
const options = ['Test 1', 'Test 2', 'Test 3'];
exports.default = {
    title: 'Fields/Toggle',
    component: ToggleField_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {
        meta: { touched: false },
        input: {
            onChange: () => { }
        }
    }
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(antd_1.Form, { children: (0, jsx_runtime_1.jsx)(ToggleField_1.default, Object.assign({}, args)) }));
// stories
exports.ToggleDefault = Template.bind({});
exports.ToggleDisabled = Template.bind({});
exports.ToggleSmall = Template.bind({});
exports.ToggleSmallDisabled = Template.bind({});
// arguments
exports.ToggleDefault.args = {
    options
};
// arguments
exports.ToggleDisabled.args = {
    disabled: true,
    options
};
exports.ToggleSmall.args = {
    size: 'small',
    options,
    defaultChecked: true
};
exports.ToggleSmallDisabled.args = {
    size: 'small',
    options,
    disabled: true
};
//# sourceMappingURL=ToggleField.stories.js.map