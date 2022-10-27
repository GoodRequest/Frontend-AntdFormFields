"use strict";
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
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const classnames_1 = __importDefault(require("classnames"));
const lodash_1 = require("lodash");
// ant
const antd_1 = require("antd");
const helper_1 = require("../utils/helper");
const enums_1 = require("../utils/enums");
const { Item } = antd_1.Form;
const { Option } = antd_1.Select;
const setGetPopupContainer = (mode, getPopupContainer) => {
    let popupContainer = (node) => node;
    // ak je multiple alebo tags tak sa nastavuje pre .ant-select-selector overflow: auto, aby sa scrollovali selectnute multiple option v selecte preto sa nastavuje container na document.body (aby sa to vzdy z hora nemuselo posielat)
    if (mode === 'multiple' || mode === 'tags') {
        popupContainer = (node) => node.closest('.ant-drawer-body') || node.closest('.ant-modal-body') || document.body;
    }
    else if (getPopupContainer) {
        // Ak existuje getPopupContainer nastav ho -> vacsinou v editovatelnych tabulkach sa posiela
        popupContainer = getPopupContainer;
    }
    return popupContainer;
};
const renderMenuItemSelectedIcon = (mode, menuItemSelectedIcon, disableMenuItemSelectedIcon) => {
    // NOTE: menuItemSelectedIcon sa renderuje len ak je select typu tags / multiple alebo ak pretazim logiku a zhora ju poslem v prope menuItemSelectedIcon
    let icon;
    if (menuItemSelectedIcon) {
        icon = menuItemSelectedIcon;
    }
    else if (disableMenuItemSelectedIcon) {
        icon = null;
    }
    else if ((mode === 'tags' || mode === 'multiple') && !disableMenuItemSelectedIcon) {
        icon = menuItemSelectedIcon;
    }
    return icon;
};
const getOptions = (optionRender, options) => (0, lodash_1.map)(options, (option) => ((0, jsx_runtime_1.jsx)(Option, Object.assign({ value: option.value, disabled: option.disabled, label: option.label, extra: option.extra }, { children: optionRender ? optionRender(option) : option.label }), option.key)));
const customDropdown = (actions, menu, fetching, indicator) => {
    const divider = (0, lodash_1.isEmpty)(actions) ? null : (0, jsx_runtime_1.jsx)(antd_1.Divider, { style: { margin: 0 } });
    return ((0, jsx_runtime_1.jsxs)(antd_1.Spin, Object.assign({ style: { margin: '10px', justifyContent: 'flex-start' }, indicator: indicator, className: 'flex-center', tip: 'Načítavam...', spinning: fetching }, { children: [menu, (0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'w-11/12 m-auto' }, { children: divider })), (0, lodash_1.map)(actions, (item, index) => ((0, jsx_runtime_1.jsx)("div", Object.assign({ className: 'flex items-center h-12' }, { children: (0, jsx_runtime_1.jsx)(antd_1.Button, Object.assign({ type: 'link', size: 'large', htmlType: 'button', className: 'btn', icon: item.icon, onClick: item.onAction }, { children: item.title }), item.title) }), index)))] })));
};
const handleChange = (data) => __awaiter(void 0, void 0, void 0, function* () {
    const { value, options, autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update } = data;
    let val = value;
    // NOTE condition for checking if select field has 'tags' mode with maxTagLength prop for checking length string of added tag
    // if input value's length is larger than maxTagLength, filter this value from tags
    if (mode === 'tags' && maxTagLength && (0, lodash_1.size)((0, lodash_1.last)(value)) > maxTagLength) {
        val = (0, lodash_1.filter)(value, (v, i) => i !== value.length - 1);
    }
    // NOTE: extra data k value, key, label ak potrebujeme poslat ine data -> eg. pri reservacii sa neposiela ID travelera ale cely objekt
    if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
        val = (0, lodash_1.map)(value, (valInput) => {
            var _a;
            return (Object.assign(Object.assign({}, valInput), { extra: (_a = (0, lodash_1.find)(options, (item) => item.value === valInput.value)) === null || _a === void 0 ? void 0 : _a.extra }));
        });
    }
    else if (hasExtra && (options === null || options === void 0 ? void 0 : options.extra)) {
        val = Object.assign(Object.assign({}, value), { extra: options === null || options === void 0 ? void 0 : options.extra });
    }
    if (maxTagsLimit && (val === null || val === void 0 ? void 0 : val.length) > maxTagsLimit) {
        val = (0, lodash_1.take)(val, maxTagsLimit);
    }
    yield input.onChange(val === undefined ? null : val);
    if (update) {
        // NOTE: update prop for onSelect and onDeselect submitting form (eg. setting Tags)
        update(val, itemRef.current);
    }
    if (autoBlur && itemRef.current) {
        itemRef.current.blur();
    }
});
const fetchSearchData = ({ selectState, value, page, onSearch, dataSourcePath, allowInfinityScroll, missingValues }) => __awaiter(void 0, void 0, void 0, function* () {
    let newState = {};
    try {
        let collectedData = [];
        if (page !== 1 && selectState.data)
            collectedData = selectState.data;
        const newData = yield onSearch(value, page, missingValues);
        const dataOptions = (0, lodash_1.get)(newData, dataSourcePath);
        if (newData.pagination || dataOptions) {
            const mergedData = [...collectedData, ...dataOptions];
            newState = { data: mergedData, pagination: newData.pagination, fetching: false };
        }
        else if (!allowInfinityScroll && (0, lodash_1.isArray)(newData)) {
            // NOTE: Výsledky sa nedoliepajú
            newState = { data: newData, fetching: false };
        }
        else {
            newState = {
                data: [],
                pagination: null,
                fetching: false,
                searchValue: ''
            };
        }
        if (newData.emptyText) {
            newState = {
                emptyText: newData.emptyText
            };
        }
    }
    catch (e) {
        newState = {
            data: [],
            pagination: null,
            fetching: false,
            searchValue: ''
        };
    }
    return newState;
});
const SelectField = (props) => {
    const { input, size, placeholder, label, required, meta, showErrorWhenUntouched, hideHelp, options, loading, mode, tagRender, allowClear, style, showSearch, filterOption, suffixIcon, labelInValue, actions, disabled, notFoundContent, removeIcon, allowInfinityScroll, defaultValue, backgroundColor, clearIcon, className, optionLabelProp, open, showArrow, menuItemSelectedIcon, dropdownClassName, dropdownStyle, dropdownMatchSelectWidth = true, listHeight, emptyText, bordered, autoClearSearchValue, maxTagTextLength, showAction, getPopupContainer, disableMenuItemSelectedIcon, fieldMode = enums_1.FIELD_MODE.INPUT, readOnly, disableTpStyles = false, autoFocus, optionRender, dataSourcePath = 'data', onDidMountSearch, update, maxTagLength, maxTagsLimit, autoBlur, indicator, hasExtra } = props;
    const localItemRef = (0, react_1.useRef)();
    const itemRef = props.itemRef || localItemRef;
    const [selectState, setSelectState] = (0, react_1.useState)({
        data: [],
        fetching: false,
        searchValue: '',
        emptyText: null,
        pagination: null
    });
    const renderDropdown = (0, react_1.useCallback)((antdActions) => (menu) => {
        return customDropdown(antdActions, menu, selectState.fetching, indicator);
    }, [selectState.fetching]);
    const handleSearch = (0, react_1.useCallback)((value = '', page = 1, missingValues = []) => __awaiter(void 0, void 0, void 0, function* () {
        const onSearch = props.onSearch;
        if (selectState.fetching) {
            return;
        }
        if (onSearch) {
            setSelectState(Object.assign(Object.assign({}, selectState), { fetching: true, searchValue: value }));
            const newState = yield fetchSearchData({ selectState, value, page, onSearch, dataSourcePath, allowInfinityScroll, missingValues });
            setSelectState(newState);
        }
    }), [selectState, allowInfinityScroll, dataSourcePath, props.onSearch]);
    const onSearchDebounced = (0, react_1.useMemo)(() => (0, lodash_1.debounce)(handleSearch, 300), [handleSearch]);
    const onChange = (0, react_1.useCallback)((value, antdOptions) => __awaiter(void 0, void 0, void 0, function* () {
        if (!input.onChange)
            return;
        handleChange({ value, options: antdOptions, autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update });
    }), [autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update]);
    const onSelectWrap = (value, option) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { onSelect } = props;
        if (onSelect) {
            let opt;
            if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
                opt = Object.assign(Object.assign({}, value), { extra: (_a = (0, lodash_1.find)(options, (item) => Number(item.value) === value.value)) === null || _a === void 0 ? void 0 : _a.extra });
            }
            else {
                opt = Object.assign({}, value);
            }
            yield onSelect(opt, option, input.value);
        }
    });
    const onDeselectWrap = (value, option) => __awaiter(void 0, void 0, void 0, function* () {
        var _b;
        const { onDeselect } = props;
        if (onDeselect) {
            let val;
            if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
                val = Object.assign(Object.assign({}, value), { extra: (_b = (0, lodash_1.find)(options, (item) => Number(item.value) === value.value)) === null || _b === void 0 ? void 0 : _b.extra });
            }
            yield onDeselect(val, option);
        }
    });
    const onScroll = (0, react_1.useCallback)((e) => {
        let hasMore = true;
        let nextPage = 1;
        const { pagination, searchValue, fetching } = selectState;
        if (pagination) {
            hasMore = pagination.page < pagination.totalPages;
            nextPage = pagination.page + 1;
        }
        if (Math.ceil(e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight && !fetching && hasMore) {
            handleSearch(searchValue, nextPage);
        }
    }, [selectState, handleSearch]);
    const onDropdownVisibleChange = (0, react_1.useCallback)((isOpen) => {
        const { onSearch } = props;
        if (isOpen && onSearch) {
            // NOTE: Po vyhladani, vybrani polozky a znovu otvoreni ostavali vo vysledkoch stare vyhladane vysledky, nie 1. strana zo vsetkych
            handleSearch('', 1);
        }
    }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [handleSearch, props.onSearch]);
    const onBlur = () => {
        // NOTE: let the function empty
    };
    const onFocus = (0, react_1.useCallback)((e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
    }, [input]);
    (0, react_1.useEffect)(() => {
        if (onDidMountSearch) {
            handleSearch('', 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onDidMountSearch]);
    /**
     * check if initial selected values are all loaded
     * only for select with pagination (allowInfinityScroll)
     */
    const checkInitialSelectedValues = (0, react_1.useRef)(true);
    (0, react_1.useEffect)(() => {
        var _a;
        // options must be loaded and input value available to run the check
        if (!onDidMountSearch || !allowInfinityScroll || ((_a = selectState.data) === null || _a === void 0 ? void 0 : _a.length) === 0 || !input.value || !checkInitialSelectedValues.current)
            return;
        // check if all input values are loaded
        const values = (0, lodash_1.isArray)(input.value) ? new Set([...input.value]) : new Set([input.value]);
        (0, lodash_1.some)(selectState.data, (item) => {
            if (values.has(item.value))
                values.delete(item.value);
            if (values.size === 0)
                return true;
            return false;
        });
        // refetch options if any value is missing
        if (values.size > 0)
            handleSearch('', 1, [...values]);
        checkInitialSelectedValues.current = false;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [input.value, selectState.data]);
    const localFilterOption = (inputValue, option) => (0, helper_1.createSlug)(option.label.toLowerCase()).indexOf((0, helper_1.createSlug)(inputValue.toLowerCase())) >= 0;
    const value = input.value === null || input.value === '' ? undefined : input.value;
    let opt = options;
    if ((0, lodash_1.isEmpty)(options) && (0, lodash_1.isEmpty)(selectState.data)) {
        opt = [];
    }
    else if ((0, lodash_1.isEmpty)(options)) {
        opt = selectState.data;
    }
    let suffIcon;
    if (!loading && !selectState.fetching) {
        suffIcon = suffixIcon;
    }
    let notFound = notFoundContent;
    if (emptyText || selectState.emptyText) {
        notFound = (0, jsx_runtime_1.jsx)(antd_1.Empty, { className: 'm-4', image: antd_1.Empty.PRESENTED_IMAGE_SIMPLE, description: selectState.emptyText || emptyText });
    }
    return ((0, jsx_runtime_1.jsx)(Item, Object.assign({ label: label, required: required, style: style, className: (0, classnames_1.default)(className, { 'form-item-disabled': disabled, readOnly }), help: ((meta === null || meta === void 0 ? void 0 : meta.touched) || showErrorWhenUntouched) && !hideHelp && (0, lodash_1.isString)(meta === null || meta === void 0 ? void 0 : meta.error) ? meta === null || meta === void 0 ? void 0 : meta.error : undefined, validateStatus: ((meta === null || meta === void 0 ? void 0 : meta.touched) || showErrorWhenUntouched) && (meta === null || meta === void 0 ? void 0 : meta.error) ? 'error' : undefined }, { children: (0, jsx_runtime_1.jsx)(antd_1.Select, Object.assign({ bordered: bordered, style: { backgroundColor }, className: (0, classnames_1.default)({ 'select-input': !disableTpStyles, rounded: backgroundColor, 'filter-select': fieldMode === enums_1.FIELD_MODE.FILTER }), tagRender: tagRender, mode: mode }, input, { id: (0, helper_1.formFieldID)(meta.form, input.name), onFocus: onFocus, onChange: onChange, size: size || 'middle', value: value, onBlur: onBlur, placeholder: placeholder || '', loading: loading || selectState.fetching, clearIcon: clearIcon, allowClear: allowClear, showSearch: showSearch, filterOption: filterOption && localFilterOption, onSearch: showSearch ? onSearchDebounced : undefined, suffixIcon: suffIcon, labelInValue: labelInValue, dropdownRender: props.dropdownRender || renderDropdown(actions), disabled: disabled, removeIcon: removeIcon, notFoundContent: notFound, onPopupScroll: allowInfinityScroll ? onScroll : undefined, onDropdownVisibleChange: onDropdownVisibleChange, ref: itemRef, defaultValue: defaultValue, optionLabelProp: optionLabelProp, open: open, onDeselect: onDeselectWrap, onSelect: onSelectWrap, showArrow: showArrow, menuItemSelectedIcon: renderMenuItemSelectedIcon(mode, menuItemSelectedIcon, disableMenuItemSelectedIcon), popupClassName: (0, classnames_1.default)(`select-dropdown ${dropdownClassName}`, { 'dropdown-match-select-width': dropdownMatchSelectWidth }), dropdownStyle: dropdownStyle, dropdownMatchSelectWidth: dropdownMatchSelectWidth, listHeight: listHeight, autoClearSearchValue: autoClearSearchValue, maxTagTextLength: maxTagTextLength, showAction: showAction, getPopupContainer: setGetPopupContainer(mode, getPopupContainer), autoFocus: autoFocus }, { autoComplete: 'new-password' }, { children: getOptions(optionRender, opt) })) })));
};
exports.default = SelectField;
//# sourceMappingURL=SelectField.js.map