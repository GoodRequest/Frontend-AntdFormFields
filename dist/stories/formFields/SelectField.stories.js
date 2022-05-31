"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiSelectWithFetchPagination = exports.SelectWithFetchPagination = exports.SelectWithFetch = exports.SimpleSelect = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
/* eslint-disable import/no-extraneous-dependencies */
const react_1 = __importDefault(require("react"));
const storybook_addon_designs_1 = require("storybook-addon-designs");
const redux_form_1 = require("redux-form");
const react_redux_1 = require("react-redux");
const antd_1 = require("antd");
const lodash_1 = require("lodash");
const SelectField_1 = __importDefault(require("../../atoms/SelectField"));
const withReduxForm_1 = __importStar(require("../utils/withReduxForm"));
const helpers_1 = require("../utils/helpers");
const CATEGORIES = [
    { label: 'Kategória 1', value: 1, key: 1 },
    { label: 'Kategória 2', value: 2, key: 2 },
    { label: 'Kategória 3', value: 3, key: 3 }
];
exports.default = {
    title: 'Fields/Select',
    decorators: [storybook_addon_designs_1.withDesign, withReduxForm_1.default]
};
const SimpleSelect = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(() => {
        dispatch((0, redux_form_1.initialize)(withReduxForm_1.STORYBOOK_FORM, {
            categoryID: CATEGORIES[1].value
        }));
    }, [dispatch]);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(redux_form_1.Field, { component: SelectField_1.default, allowClear: true, placeholder: 'Kategória', name: 'categoryID', options: CATEGORIES, size: 'large' }) })));
};
exports.SimpleSelect = SimpleSelect;
const SelectWithFetch = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(() => {
        dispatch((0, redux_form_1.initialize)(withReduxForm_1.STORYBOOK_FORM, {
            salonID: 1
        }));
    }, [dispatch]);
    const searchOption = react_1.default.useCallback(() => __awaiter(void 0, void 0, void 0, function* () {
        const data = yield (0, helpers_1.mock)(true, 300, CATEGORIES);
        return { data };
    }), []);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(redux_form_1.Field, { component: SelectField_1.default, allowClear: true, placeholder: 'Salón', name: 'salonID', onSearch: searchOption, onDidMountSearch: true, size: 'large' }) })));
};
exports.SelectWithFetch = SelectWithFetch;
const generatePaginationData = (page = 1) => {
    const pagination = { limit: 25, page, totalCount: 125, totalPages: 5 };
    const offset = (page - 1) * pagination.limit;
    const data = Array.from({ length: pagination.limit }, (x, i) => ({ label: `Option ${offset + i}`, value: offset + i, key: `key-${offset + i}` }));
    return { data, pagination };
};
const SelectWithFetchPagination = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    react_1.default.useEffect(() => {
        dispatch((0, redux_form_1.initialize)(withReduxForm_1.STORYBOOK_FORM, {
            salonID: 50
        }));
    }, [dispatch]);
    const searchOption = react_1.default.useCallback((search, page, missingValues) => __awaiter(void 0, void 0, void 0, function* () {
        const { data, pagination } = yield (0, helpers_1.mock)(true, 200, generatePaginationData(page));
        // load data for items witch are outside of the first page limit e.g. Option 600
        let missingValuesData = [];
        if ((missingValues === null || missingValues === void 0 ? void 0 : missingValues.length) > 0)
            missingValuesData = yield Promise.all((0, lodash_1.map)(missingValues, (value) => (0, helpers_1.mock)(true, 200, { key: value, label: `Option ${value}`, value })));
        const allData = [...data, ...missingValuesData];
        return { data: allData, pagination };
    }), []);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(redux_form_1.Field, { component: SelectField_1.default, allowClear: true, placeholder: 'Salón', name: 'salonID', onSearch: searchOption, onDidMountSearch: true, size: 'large', allowInfinityScroll: true, showSearch: true }) })));
};
exports.SelectWithFetchPagination = SelectWithFetchPagination;
const MultiSelectWithFetchPagination = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    // const formValues = useSelector((state: any) => state.form[STORYBOOK_FORM] || [])
    react_1.default.useEffect(() => {
        dispatch((0, redux_form_1.initialize)(withReduxForm_1.STORYBOOK_FORM, {
            salonID: [50, 1, 40]
        }));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const searchOption = react_1.default.useCallback((search, page, missingValues) => __awaiter(void 0, void 0, void 0, function* () {
        const { data, pagination } = yield (0, helpers_1.mock)(true, 200, generatePaginationData(page));
        let missingValuesData = [];
        if ((missingValues === null || missingValues === void 0 ? void 0 : missingValues.length) > 0)
            missingValuesData = yield Promise.all((0, lodash_1.map)(missingValues, (value) => (0, helpers_1.mock)(true, 200, { key: value, label: `Option ${value}`, value })));
        const allData = [...data, ...missingValuesData];
        return { data: allData, pagination };
    }), []);
    return ((0, jsx_runtime_1.jsx)(antd_1.Form, Object.assign({ layout: 'vertical' }, { children: (0, jsx_runtime_1.jsx)(redux_form_1.Field, { component: SelectField_1.default, allowClear: true, placeholder: 'Salón', name: 'salonID', onSearch: searchOption, onDidMountSearch: true, size: 'large', allowInfinityScroll: true, showSearch: true, mode: 'multiple' }) })));
};
exports.MultiSelectWithFetchPagination = MultiSelectWithFetchPagination;
//# sourceMappingURL=SelectField.stories.js.map