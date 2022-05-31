"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ButtonPrimaryIcon = exports.ButtonPrimaryLoading = exports.ButtonDanger = exports.ButtonSecondaryDisabled = exports.ButtonPrimaryDisabled = exports.ButtonSecondary = exports.ButtonPrimary = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const Template = (args) => (0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({}, args, { children: "Button" }));
// const TemplateEmpty: ComponentStory<typeof Button> = (args) => <Button {...args} />
// stories
exports.ButtonPrimary = Template.bind({});
exports.ButtonSecondary = Template.bind({});
exports.ButtonPrimaryDisabled = Template.bind({});
exports.ButtonSecondaryDisabled = Template.bind({});
exports.ButtonDanger = Template.bind({});
exports.ButtonPrimaryLoading = Template.bind({});
exports.ButtonPrimaryIcon = Template.bind({});
// export const ButtonPrimaryIconOnly = TemplateEmpty.bind({})
// arguments
exports.ButtonPrimary.args = {
    type: 'primary'
};
exports.ButtonSecondary.args = {
    type: 'default'
};
exports.ButtonPrimaryDisabled.args = {
    type: 'primary',
    disabled: true
};
exports.ButtonSecondaryDisabled.args = {
    type: 'default',
    disabled: true
};
exports.ButtonDanger.args = {
    type: 'default',
    danger: true
};
exports.ButtonPrimaryLoading.args = {
    type: 'primary',
    loading: true
};
exports.ButtonPrimaryIcon.args = {
    type: 'primary',
    icon: (0, jsx_runtime_1.jsx)(icons_1.SearchOutlined, {})
};
// ButtonPrimaryIconOnly.args = {
// 	type: 'primary',
// 	icon: <SearchIcon />
// }
// parameters
exports.ButtonPrimary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
    }
};
exports.ButtonSecondary.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A2354'
    }
};
exports.ButtonPrimaryDisabled.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
    }
};
exports.ButtonSecondaryDisabled.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A2354'
    }
};
exports.ButtonDanger.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
    }
};
exports.ButtonPrimaryLoading.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
    }
};
exports.ButtonPrimaryIcon.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
    }
};
//# sourceMappingURL=Button.stories.js.map