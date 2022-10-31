"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const Button = (props) => {
    const classNames = `${props === null || props === void 0 ? void 0 : props.className} ${(props === null || props === void 0 ? void 0 : props.children) ? '' : 'ant-btn-icon-only'}`;
    return (0, jsx_runtime_1.jsxs)(antd_1.Button, Object.assign({}, props, { className: classNames }, { children: [(0, jsx_runtime_1.jsx)("span", Object.assign({ className: 'loading-icon', style: { display: "none" } }, { children: (0, jsx_runtime_1.jsxs)("svg", Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsxs)("g", Object.assign({ "clip-path": "url(#clip0_805_64190)" }, { children: [(0, jsx_runtime_1.jsx)("rect", { x: "7.08325", y: "0.666748", width: "1.83333", height: "3.66667", rx: "0.916667", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.16", x: "12.5376", y: "2.16626", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "rotate(45 12.5376 2.16626)", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.4", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 12.5376 13.833)", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.28", x: "15.3333", y: "7.0835", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "rotate(90 15.3333 7.0835)", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.52", x: "7.08325", y: "11.6667", width: "1.83333", height: "3.66667", rx: "0.916667", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.64", x: "4.7594", y: "9.94434", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "rotate(45 4.7594 9.94434)", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.88", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "matrix(0.707107 -0.707107 -0.707107 -0.707107 4.7594 6.05493)", fill: "none" }), (0, jsx_runtime_1.jsx)("rect", { opacity: "0.76", x: "4.33325", y: "7.0835", width: "1.83333", height: "3.66667", rx: "0.916667", transform: "rotate(90 4.33325 7.0835)", fill: "none" })] })), (0, jsx_runtime_1.jsx)("defs", { children: (0, jsx_runtime_1.jsx)("clipPath", Object.assign({ id: "clip0_805_64190" }, { children: (0, jsx_runtime_1.jsx)("rect", { width: "16", height: "16", fill: "none" }) })) })] })) })), props.children] }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map