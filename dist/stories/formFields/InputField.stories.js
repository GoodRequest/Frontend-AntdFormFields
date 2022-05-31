"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Disabled = exports.Filled = exports.WithoutLabel = exports.Error = exports.Required = exports.WithSuffixPrefix = exports.WithLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
const InputField_1 = __importDefault(require("../../atoms/InputField"));
const Icon = () => {
    return ((0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: '17', height: '17', viewBox: '0 0 17 17', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' }, { children: [(0, jsx_runtime_1.jsx)("path", { d: 'M4.00073 14.002C5.10544 14.002 6.00098 13.1064 6.00098 12.0017C6.00098 10.897 5.10544 10.0015 4.00073 10.0015C2.89603 10.0015 2.00049 10.897 2.00049 12.0017C2.00049 13.1064 2.89603 14.002 4.00073 14.002Z', stroke: '#BFBFBF', strokeWidth: '1.3335', strokeLinecap: 'round', strokeLinejoin: 'round' }), (0, jsx_runtime_1.jsx)("path", { d: 'M4.00073 6.00098C5.10544 6.00098 6.00098 5.10544 6.00098 4.00073C6.00098 2.89603 5.10544 2.00049 4.00073 2.00049C2.89603 2.00049 2.00049 2.89603 2.00049 4.00073C2.00049 5.10544 2.89603 6.00098 4.00073 6.00098Z', stroke: '#BFBFBF', strokeWidth: '1.3335', strokeLinecap: 'round', strokeLinejoin: 'round' }), (0, jsx_runtime_1.jsx)("path", { d: 'M13.335 2.66699L5.41406 10.588', stroke: '#BFBFBF', strokeWidth: '1.3335', strokeLinecap: 'round', strokeLinejoin: 'round' }), (0, jsx_runtime_1.jsx)("path", { d: 'M9.64795 9.6543L13.3351 13.3347', stroke: '#BFBFBF', strokeWidth: '1.3335', strokeLinecap: 'round', strokeLinejoin: 'round' }), (0, jsx_runtime_1.jsx)("path", { d: 'M5.41406 5.41406L8.00105 8.00105', stroke: '#BFBFBF', strokeWidth: '1.3335', strokeLinecap: 'round', strokeLinejoin: 'round' })] })));
};
const inputDefaultProps = {
    form: undefined,
    error: null,
    onBlur: () => { },
    onChange: () => { }
};
exports.default = {
    title: 'Fields/Input',
    component: InputField_1.default,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {
        input: inputDefaultProps,
        placeholder: 'Placeholder',
        meta: { touched: false },
        size: 'large'
    }
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(InputField_1.default, Object.assign({}, args)) })));
// stories
exports.WithLabel = Template.bind({});
exports.WithSuffixPrefix = Template.bind({});
exports.Required = Template.bind({});
exports.Error = Template.bind({});
exports.WithoutLabel = Template.bind({});
exports.Filled = Template.bind({});
exports.Disabled = Template.bind({});
// arguments
exports.WithLabel.args = {
    label: 'Label'
};
exports.WithSuffixPrefix.args = {
    label: 'Label',
    suffix: (0, jsx_runtime_1.jsx)(Icon, {}),
    prefix: (0, jsx_runtime_1.jsx)(Icon, {})
};
exports.Required.args = {
    label: 'Label',
    required: true
};
exports.Filled.args = {
    input: Object.assign(Object.assign({}, inputDefaultProps), { value: 'Filled text' })
};
exports.Error.args = {
    label: 'Label',
    meta: {
        error: 'Error message',
        touched: true
    }
};
exports.Disabled.args = {
    label: 'Label',
    disabled: true
};
// parameters
exports.WithLabel.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=68%3A2693'
    }
};
exports.WithoutLabel.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=68%3A2662'
    }
};
exports.Filled.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=68%3A2662'
    }
};
//# sourceMappingURL=InputField.stories.js.map