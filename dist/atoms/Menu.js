"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const antd_1 = require("antd");
const Menu = (props) => {
    var _a, _b;
    const [selectedItem, setSelectedItem] = (0, react_1.useState)(undefined);
    return ((0, jsx_runtime_1.jsx)(antd_1.Menu, Object.assign({}, props, { onClick: (e) => setSelectedItem(e === null || e === void 0 ? void 0 : e.key), selectedKeys: [selectedItem || ((_b = (_a = props === null || props === void 0 ? void 0 : props.items) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.key)] })));
};
exports.default = Menu;
//# sourceMappingURL=Menu.js.map