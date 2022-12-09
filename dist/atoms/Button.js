"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const Button = (props) => {
    const classNames = `${props === null || props === void 0 ? void 0 : props.className} ${(props === null || props === void 0 ? void 0 : props.children) ? '' : 'ant-btn-icon-only'}`;
    return (0, jsx_runtime_1.jsxs)(antd_1.Button, Object.assign({}, props, { className: classNames, onMouseDown: (e) => e.preventDefault() }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'loading-icon', style: { display: 'none' } }, { children: (0, jsx_runtime_1.jsxs)("div", Object.assign({ className: 'spinnerSC' }, { children: [(0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' }), (0, jsx_runtime_1.jsx)("div", { className: 'spinnerStickSC' })] })) })), props.children] }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map