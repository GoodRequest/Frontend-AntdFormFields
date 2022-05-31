"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModalSimple = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable import/no-extraneous-dependencies */
const react_1 = require("react");
const storybook_addon_designs_1 = require("storybook-addon-designs");
const antd_1 = require("antd");
exports.default = {
    title: 'Antd/Modal',
    component: antd_1.Modal,
    decorators: [storybook_addon_designs_1.withDesign],
    args: {}
};
const Template = (args) => {
    const [showModal, setShowModal] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({ className: 'noti-btn m-regular', onClick: () => setShowModal(true) }, { children: "Open Modal" })), (0, jsx_runtime_1.jsxs)(antd_1.Modal, Object.assign({}, args, { visible: showModal, onOk: () => setShowModal(false), onCancel: () => setShowModal(false) }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Some contents..." }), (0, jsx_runtime_1.jsx)("p", { children: "Some contents..." }), (0, jsx_runtime_1.jsx)("p", { children: "Some contents..." }), (0, jsx_runtime_1.jsx)("p", { children: "Some contents..." }), (0, jsx_runtime_1.jsx)("p", { children: "Some contents..." })] }))] }));
};
// stories
exports.ModalSimple = Template.bind({});
// arguments
exports.ModalSimple.args = {
    title: 'Title'
};
//# sourceMappingURL=Modal.stories.js.map