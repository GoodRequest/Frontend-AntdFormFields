"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.STORYBOOK_FORM = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const redux_form_1 = require("redux-form");
const react_redux_1 = require("react-redux");
const redux_1 = require("redux");
exports.STORYBOOK_FORM = 'withReduxForm';
const withReduxForm = (storyFunc) => {
    const reducers = { form: redux_form_1.reducer };
    const reducer = (0, redux_1.combineReducers)(reducers);
    const store = (0, redux_1.createStore)(reducer);
    const Test = (0, redux_form_1.reduxForm)({ form: exports.STORYBOOK_FORM })(storyFunc);
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, Object.assign({ store: store }, { children: (0, jsx_runtime_1.jsx)(Test, {}) })));
};
exports.default = withReduxForm;
//# sourceMappingURL=withReduxForm.js.map