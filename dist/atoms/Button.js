"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const antd_1 = require("antd");
const Button = (props) => {
    return (0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({}, props, { onClick: (e) => {
            var _a;
            (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.blur();
            props === null || props === void 0 ? void 0 : props.onClick(e);
        } }, { children: props.children }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map