'use strict';

var dayjs = require('dayjs');
var utcPlugin = require('dayjs/plugin/utc');
var timezonePlugin = require('dayjs/plugin/timezone');
var isBetween = require('dayjs/plugin/isBetween');
var minMax = require('dayjs/plugin/minMax');
require('cypress-file-upload');
var lodash = require('lodash');
var slugify = require('slugify');
var antd = require('antd');
var jsxRuntime = require('react/jsx-runtime');
var cx = require('classnames');
var React = require('react');
var icons = require('@ant-design/icons');
var InputMask = require('react-input-mask');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);
var utcPlugin__default = /*#__PURE__*/_interopDefaultLegacy(utcPlugin);
var timezonePlugin__default = /*#__PURE__*/_interopDefaultLegacy(timezonePlugin);
var isBetween__default = /*#__PURE__*/_interopDefaultLegacy(isBetween);
var minMax__default = /*#__PURE__*/_interopDefaultLegacy(minMax);
var slugify__default = /*#__PURE__*/_interopDefaultLegacy(slugify);
var cx__default = /*#__PURE__*/_interopDefaultLegacy(cx);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var InputMask__default = /*#__PURE__*/_interopDefaultLegacy(InputMask);

var KEYBOARD_KEY;
(function (KEYBOARD_KEY) {
    KEYBOARD_KEY["ENTER"] = "Enter";
})(KEYBOARD_KEY || (KEYBOARD_KEY = {}));
var FIELD_MODE;
(function (FIELD_MODE) {
    FIELD_MODE["INPUT"] = "INPUT";
    FIELD_MODE["FILTER"] = "FILTER";
})(FIELD_MODE || (FIELD_MODE = {}));
const DROPDOWN_POSITION = {
    BOTTOM_LEFT: {
        points: ['tl', 'bl'],
        offset: [0, 4],
        overflow: {
            adjustX: false,
            adjustY: false
        }
    }
};
var BYTE_MULTIPLIER;
(function (BYTE_MULTIPLIER) {
    BYTE_MULTIPLIER[BYTE_MULTIPLIER["KILO"] = 1000] = "KILO";
    BYTE_MULTIPLIER[BYTE_MULTIPLIER["MEGA"] = 1000000] = "MEGA";
})(BYTE_MULTIPLIER || (BYTE_MULTIPLIER = {}));
const ROW_GUTTER_X_DEFAULT = [4, 0];
const DEFAULT_DATE_INPUT_FORMAT = 'DD.MM.YYYY';
const DEFAULT_DATE_INIT_FORMAT = 'YYYY-MM-DD';
const DEFAULT_DATE_FORMAT = 'DD.MM.YYYY';
const DEFAULT_TIME_FORMAT = 'HH:mm';

const text$2 = require('../utils/text.json');
const formFieldID = (form, name) => {
    let id;
    if (form && name) {
        // NOTE: element can't be queried if id contains dots
        const fieldSelector = lodash.chain(name)
            .filter((char) => char !== ']')
            .map((char) => (char === '[' || char === '.' ? '-' : char))
            .value()
            .join('');
        id = `${form}-${fieldSelector}`;
    }
    return id;
};
const fromStringToFloat = (string) => {
    let result;
    if (string && lodash.isString(string)) {
        result = parseFloat(lodash.replace(string, ',', '.').replace(' ', ''));
    }
    else if (string) {
        result = Number(string);
    }
    else {
        result = null;
    }
    return result;
};
/**
 * Returns null - e.g. input was cleared
 *
 * Returns NaN - e.g. input value is "asdf"
 */
const transformNumberFieldValue = (rawValue, min, max, precision, notNullValue) => {
    let result = null;
    const value = typeof rawValue === 'string' ? fromStringToFloat(rawValue) : rawValue;
    if (!value && notNullValue) {
        result = min;
    }
    if (lodash.isNumber(value) && lodash.isFinite(value)) {
        if (lodash.isNumber(min) && value < min) {
            result = min;
        }
        else if (lodash.isNumber(max) && value > max) {
            result = max;
        }
        else if (lodash.isNumber(min) && lodash.isNumber(max) && value >= min && value <= max) {
            result = value;
        }
    }
    else if (Number.isNaN(value)) {
        result = NaN;
    }
    if (lodash.isFinite(result) && lodash.isNumber(precision)) {
        result = lodash.round(result, precision);
    }
    return result;
};
const createSlug = (value, separator = '-', lower = true) => {
    if (value) {
        return slugify__default["default"](value, {
            replacement: separator,
            lower
        });
    }
    return '';
};
const getMaxSizeNotifyMessage = (maxFileSize, maxFileText) => {
    let notifyMaxSize;
    if (maxFileSize >= BYTE_MULTIPLIER.MEGA) {
        notifyMaxSize = [maxFileSize / BYTE_MULTIPLIER.MEGA, 'MB'];
    }
    else {
        notifyMaxSize = [maxFileSize / BYTE_MULTIPLIER.KILO, 'KB'];
    }
    return antd.notification.error({
        message: maxFileText?.title || text$2.error,
        description: `${maxFileText?.text || text$2.errMessageFileMAxUpload} ${notifyMaxSize[0]} ${notifyMaxSize[1]}`
    });
};
const getImagesFormValues = (fileList, filesData) => {
    const values = lodash.map(fileList, (file) => {
        const fileData = filesData[lodash.get(file, 'uid')];
        return {
            ...file,
            id: lodash.get(file, 'id') || fileData?.id,
            url: lodash.get(file, 'url') || fileData?.path,
            signedUrl: fileData?.signedUrl
        };
    });
    return values;
};
const generateElementId = (key, form) => (form ? `#${form}-${key}` : `#${key}`);

const apiAuth = (email, password, url) => {
    cy.log(`Login as ${email}`);
    cy.request({
        method: 'POST',
        url: url,
        body: {
            email,
            password
        }
    }).then(({ body }) => {
        window.localStorage.setItem('access_token', body.accessToken);
        if (body.refreshToken) {
            window.localStorage.setItem('refresh_token', body.refreshToken);
        }
        cy.saveLocalStorage();
    });
};
const setInputValue = (form, key, value, clear) => {
    const elementId = generateElementId(key, form);
    if (clear) {
        cy.get(elementId).clear().type(value).should('have.value', value);
    }
    else {
        cy.get(elementId).type(value).should('have.value', value);
    }
};
const selectOptionDropdown = (form, key, value) => {
    const elementId = generateElementId(key, form);
    cy.get(elementId).click();
    if (value) {
        // check for specific value in dropdown
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 })
            .should('be.visible')
            .find('.ant-select-item-option')
            .each((el) => {
            if (el.text() === value) {
                cy.wrap(el).click();
            }
        });
    }
    else {
        // default select first option in list
        cy.get('.ant-select-dropdown :not(.ant-select-dropdown-hidden)', { timeout: 10000 }).should('be.visible').find('.ant-select-item-option').first().click({ force: true });
    }
};
const setSearchBoxValueAndSelectFirstOption = (key, value, selectListKey, form, googleGeocoding, clear) => {
    const elementId = generateElementId(key, form);
    if (clear) {
        cy.get(elementId).clear().type(value).should('have.value', value);
    }
    else {
        cy.get(elementId).type(value).should('have.value', value);
    }
    cy.get(selectListKey, { timeout: 10000 }).should('be.visible');
    // select option for google geocoding list
    if (googleGeocoding) {
        cy.get(elementId).type('{downarrow}');
    }
    cy.get(elementId).type('{enter}');
};
const clickButton = (key, form, switchBtn) => {
    const elementId = generateElementId(key, form);
    if (switchBtn) {
        cy.get(elementId).find('button').click();
    }
    else {
        cy.get(elementId).click();
    }
};
const clickDeleteButtonWithConf = (form, key = 'delete-btn') => {
    cy.clickButton(key, form);
    // get popover conf box and click confirmation button
    cy.get('.ant-popover-inner-content', { timeout: 10000 }).should('be.visible').find('.ant-popover-buttons > :nth-child(2)').click();
};
const uploadFile = (key, filePath, form) => {
    cy.get(generateElementId(key, form)).attachFile(filePath);
};
const checkSuccessToastMessage = () => {
    cy.get('.ant-notification-notice-success .ant-notification-notice-close', { timeout: 10000 }).should('be.visible');
};
const clearDropdownSelection = (fieldName) => {
    cy.get(`.ant-select[name="${fieldName}"] > span.ant-select-clear`).click({ force: true });
};
const checkFirstCheckBox = (key, form) => {
    const elementId = generateElementId(key, form);
    cy.get(elementId).first().check();
};

const { Item: Item$d } = antd.Form;
const CheckboxField = (props) => {
    const { input, label, required, disabled, meta: { form, error, touched }, placeholder, style } = props;
    return (jsxRuntime.jsx(Item$d, { required: required, label: label, help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, children: jsxRuntime.jsx(antd.Row, { children: jsxRuntime.jsx(antd.Checkbox, { ...input, id: formFieldID(form, input.name), checked: !!input.value, disabled: disabled, children: placeholder }) }) }));
};

const { Item: Item$c } = antd.Form;
const CheckboxGroupField = (props) => {
    const { input, options, label, required, meta: { form, error, touched }, style, checkboxGroupStyles, defaultValue, horizontal, className, disabled, large } = props;
    const checkboxes = lodash.map(options, (option) => {
        if (typeof option === 'string') {
            return (jsxRuntime.jsx(antd.Checkbox, { value: option, className: cx__default["default"]({ large, 'inline-flex': horizontal }), disabled: disabled, children: option }, option));
        }
        return (jsxRuntime.jsx(antd.Checkbox, { disabled: option.disabled, value: option.value, className: cx__default["default"]('my-1', { large, 'inline-flex': horizontal }), children: option.label }, `${option.value}`));
    });
    return (jsxRuntime.jsx(Item$c, { label: label, required: required, help: touched && error, className: className, validateStatus: error && touched ? 'error' : undefined, style: style, children: jsxRuntime.jsx(antd.Checkbox.Group
        // @ts-ignore
        , { 
            // @ts-ignore
            id: formFieldID(form, input.name), className: 'flex flex-wrap', value: input.value || [], onChange: input.onChange, defaultValue: defaultValue, style: {
                ...checkboxGroupStyles,
                flexDirection: horizontal ? 'row' : 'column'
            }, children: checkboxes }) }));
};

const DateField = (props) => {
    const { input, label, required, style, meta: { form, error, touched }, format = DEFAULT_DATE_INPUT_FORMAT, placeholder, disabledDate, disabled, allowClear, hideHelp, disableFuture, disablePast, getPopupContainer, compareFrom1, compareFrom2, compareTo1, size, rounded, readOnly, suffixIcon, clearIcon, showToday = true, defaultPickerValue, validateTo, className } = props;
    let value;
    if (input.value && dayjs__default["default"](input.value).isValid()) {
        value = dayjs__default["default"](input.value);
    }
    const disabledDateWrap = React.useCallback((currentDate) => {
        let disable = false;
        if (disabledDate) {
            disable = disabledDate(currentDate);
        }
        else if (disableFuture) {
            disable = currentDate && currentDate > dayjs__default["default"]().endOf('day');
        }
        else if (disablePast) {
            disable = currentDate && currentDate < dayjs__default["default"]().startOf('day');
        }
        if (compareFrom1 || compareFrom2) {
            const dates = [];
            if (compareFrom1) {
                dates.push(compareFrom1);
            }
            if (compareFrom2) {
                dates.push(compareFrom2);
            }
            const date = dayjs__default["default"].max(dates);
            disable = currentDate.isBefore(date, 'date');
        }
        if (!disable && compareTo1) {
            if (disableFuture) {
                disable = currentDate && currentDate > dayjs__default["default"]().endOf('day');
            }
            else {
                disable = currentDate.isAfter(compareTo1, 'date');
            }
        }
        if (validateTo) {
            disable = currentDate.isBefore(validateTo);
        }
        return disable;
    }, [compareFrom1, compareFrom2, compareTo1, disableFuture, disablePast, disabledDate, validateTo]);
    return (jsxRuntime.jsx(antd.Form.Item, { label: label, required: required, style: style, help: hideHelp ? undefined : touched && error, className: cx__default["default"]({ 'form-item-disabled': disabled, readOnly }), validateStatus: error && touched ? 'error' : undefined, children: jsxRuntime.jsx(antd.DatePicker, { id: formFieldID(form, input.name), ...input, className: cx__default["default"]('date-input w-full', { 'rounded-full': rounded, 'allow-clear': allowClear }, className), dropdownAlign: DROPDOWN_POSITION.BOTTOM_LEFT, onBlur: () => { }, onChange: (val) => {
                if (val) {
                    input.onChange(val.format(DEFAULT_DATE_INIT_FORMAT));
                }
                else {
                    input.onChange(null);
                }
            }, format: format, value: value, defaultPickerValue: defaultPickerValue, size: size, clearIcon: clearIcon, suffixIcon: suffixIcon, placeholder: placeholder, disabledDate: disabledDateWrap, disabled: disabled, allowClear: allowClear, getPopupContainer: getPopupContainer || ((node) => node), showToday: showToday }) }));
};

const { Item: Item$b } = antd.Form;
class DateRangeField extends React__default["default"].Component {
    constructor() {
        super(...arguments);
        this.disabledStartDate = (startValue) => {
            const { names, disablePast, disableStartDayEnd } = this.props;
            const endValue = lodash.get(this.props, `${names[1]}.input.value`);
            const yesterday = dayjs__default["default"]().subtract(1, 'day');
            if (disablePast && startValue?.isBefore(yesterday)) {
                // disable past
                return true;
            }
            if (startValue?.isAfter(endValue)) {
                // disable StartValue after EndValue
                return true;
            }
            return !!(disableStartDayEnd && (startValue?.isAfter(endValue) || startValue?.isSame(endValue)));
        };
        this.disabledEndDate = (endValue) => {
            const { names, disablePast, disableStartDayEnd } = this.props;
            const startValue = lodash.get(this.props, `${names[0]}.input.value`);
            if (disablePast && endValue?.isBefore(dayjs__default["default"]())) {
                // disable past
                return true;
            }
            if (endValue?.isBefore(startValue)) {
                // disable EndValue before StartValue
                return true;
            }
            return !!(disableStartDayEnd && (endValue?.isBefore(startValue) || endValue?.isSame(startValue)));
        };
    }
    render() {
        const { names, labels, formats, getCalendarContainer, renderExtraFooter, required, placeholders, disabled, disableStartDayEnd, suffixIcon, clearIcon } = this.props;
        return (jsxRuntime.jsx("div", { className: 'flex', children: lodash.map(names, (name, index) => {
                const input = lodash.get(this.props, `[${name}].input`);
                const { touched, error } = lodash.get(this.props, `[${name}].meta`);
                let value;
                const format = lodash.get(formats, `[${index}]`) || DEFAULT_DATE_INPUT_FORMAT;
                if (input.value && dayjs__default["default"](input.value).isValid()) {
                    value = dayjs__default["default"](input.value);
                }
                const allowClear = !required;
                let disabledDate;
                if (index === 0) {
                    disabledDate = this.disabledStartDate;
                }
                else {
                    disabledDate = this.disabledEndDate;
                }
                return (jsxRuntime.jsx(Item$b, { label: (labels ? labels[index] : undefined), required: required, 
                    // @ts-ignore
                    help: touched && error, validateStatus: error && touched ? 'error' : undefined, className: 'w-1/2', children: jsxRuntime.jsx(antd.DatePicker, { ...input, className: cx__default["default"]('w-full date-input', { 'allow-clear': allowClear }), onBlur: () => { }, place: true, onChange: (val) => {
                            if (val) {
                                input.onChange(val.format(DEFAULT_DATE_INIT_FORMAT));
                            }
                            else {
                                input.onChange(null);
                            }
                        }, arrow: false, getCalendarContainer: getCalendarContainer, format: format, suffixIcon: suffixIcon, clearIcon: clearIcon, allowClear: allowClear || this.props.allowClear, value: value, placeholder: lodash.get(placeholders, `[${index}]`), disabledDate: disabledDate, disabled: disabled, renderExtraFooter: renderExtraFooter, showToday: !(index === 1 && disableStartDayEnd === true), getPopupContainer: this.props.getPopupContainer || ((node) => node) }) }, index));
            }) }));
    }
}

const { RangePicker } = antd.DatePicker;
const DateRangePickerField = (props) => {
    const { renderExtraFooter, input, placeholder, label, format = DEFAULT_DATE_FORMAT, open, getPopupContainer, style, dropdownClassName, separator, suffixIcon, disableFuture, disablePast, disabledDate, itemRef, required, meta, size, disabled, className } = props;
    const onFocus = (e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
    };
    const value = [];
    lodash.forEach(input?.value, (val) => {
        if (val && dayjs__default["default"](val).isValid()) {
            value.push(dayjs__default["default"](val));
        }
    });
    const onChange = React.useCallback((vals) => {
        if (!lodash.isEmpty(vals)) {
            const formattedValues = {
                dateFrom: vals[0].format(DEFAULT_DATE_INIT_FORMAT),
                dateTo: vals[1].format(DEFAULT_DATE_INIT_FORMAT)
            };
            input.onChange(formattedValues);
        }
        else {
            input.onChange(null);
        }
    }, [input]);
    const disabledDateWrap = React.useCallback((currentDate) => {
        let disable = false;
        if (disabledDate) {
            disable = disabledDate(currentDate);
        }
        else if (disableFuture) {
            disable = currentDate && currentDate > dayjs__default["default"]().endOf('day');
        }
        else if (disablePast) {
            disable = currentDate && currentDate < dayjs__default["default"]().startOf('day');
        }
        return disable;
    }, [disableFuture, disablePast, disabledDate]);
    return (jsxRuntime.jsx(antd.Form.Item, { style: style, label: label, required: required, help: meta?.touched && meta?.error, validateStatus: meta?.error && meta?.touched ? 'error' : undefined, children: jsxRuntime.jsx("div", { id: formFieldID(meta?.form, input?.name), children: jsxRuntime.jsx(RangePicker, { ref: itemRef, className: cx__default["default"]('date-picker', className), value: value, onChange: onChange, format: format, onFocus: onFocus, placeholder: placeholder, suffixIcon: suffixIcon, separator: separator, open: open, disabledDate: disabledDateWrap, dropdownClassName: dropdownClassName, renderExtraFooter: renderExtraFooter, getPopupContainer: getPopupContainer || ((node) => node), size: size, disabled: disabled }) }) }));
};

const text$1 = require('../utils/text.json');
const { Item: Item$a } = antd.Form;
/**
 * Umožňuje nahrať jeden súbor, nový súbor nahradí pôvodný
 */
const FileUploadField = (props) => {
    const { label, input, required, meta: { error, touched }, action, pathToFolder, staticMode, accept, maxFileSize, disabled, accessToken, uploadBtnText, afterUploadErrorTitle, toastTextUploadMaxError } = props;
    const signedUrl = lodash.get(input, 'value.url') ? `${lodash.get(input, 'value.url')}?t=${accessToken}` : undefined;
    const fileList = input.value
        ? [
            {
                ...input.value,
                url: signedUrl
            }
        ]
        : [];
    const onChange = async (info) => {
        if (info.file.status === 'error') {
            // NOTE: if uploaded file has a bad format (eg. txt)
            antd.notification.error({
                message: afterUploadErrorTitle || text$1.error,
                description: info.file.response?.messages
            });
        }
        if (info.file.status === 'done') {
            const value = {
                id: lodash.get(info.file.response, 'file.id'),
                name: lodash.get(info.file.response, 'file.displayName'),
                url: `/api/v1/static/${lodash.get(info.file.response, 'file.path')}`
            };
            input.onChange(value);
        }
        if (info.file.status === 'uploading' || info.file.status === 'success') {
            input.onChange(info.file);
        }
        if (lodash.isEmpty(info.fileList)) {
            input.onChange(null);
        }
    };
    const showUploadList = React.useMemo(() => ({
        showRemoveIcon: !staticMode,
        showPreviewIcon: true
    }), [staticMode]);
    const uploader = (jsxRuntime.jsx(antd.Upload, { className: 'mb-2', headers: {
            Authorization: `Bearer ${accessToken}`
        }, action: action, accept: accept, disabled: disabled, data: { pathToFolder }, fileList: fileList, onChange: onChange, beforeUpload: (file) => {
            if (file.size >= maxFileSize) {
                getMaxSizeNotifyMessage(maxFileSize, toastTextUploadMaxError);
                return false;
            }
            return true;
        }, showUploadList: showUploadList, listType: 'picture-card', children: !staticMode && (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(icons.UploadOutlined, { className: `text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}` }), jsxRuntime.jsx("div", { className: `text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}`, children: uploadBtnText || text$1.upload })] })) }));
    return (jsxRuntime.jsxs(Item$a, { className: cx__default["default"]('file-upload-field', { 'hide-overlay': staticMode, disabled }), label: label, required: required, style: { width: '100%' }, help: touched && error, validateStatus: touched && error ? 'error' : undefined, children: [staticMode && !input.value && '-', uploader] }));
};
// NOTE: Prevent voči animácii po submitnutí formulára
var FileUploadField$1 = React.memo(FileUploadField, (prevProps, nextProps) => {
    const theSameError = prevProps.meta.error === nextProps.meta.error;
    const theSameTouched = prevProps.meta.touched === nextProps.meta.touched;
    // NOTE: Shallow fast comparision
    if (!theSameError || !theSameTouched) {
        return false; // Rerender
    }
    // NOTE: Deep slower comparision
    const theSameInput = lodash.isEqual(prevProps.input, nextProps.input);
    if (!theSameInput) {
        return false; // Rerender
    }
    return true;
});

const text = require('../utils/text.json');
const { Item: Item$9 } = antd.Form;
// export type ImgUploadParam = { [key: string]: { uid: string } }
/**
 * Umoznuje nahrat obrazky na podpisanu url
 */
const ImgUploadField = (props) => {
    const { label, input, required, meta: { form, error, touched }, staticMode, accept = 'image/jpeg,image/png', maxFileSize, disabled, signUrl, multiple, maxCount = 20, category, uploadErrorTitle, toastTextUploadMaxError, maxFilesText, uploadBtnText, uploadFile, postReq } = props;
    const imagesUrls = React.useRef({});
    const [previewUrl, setPreviewUrl] = React.useState('');
    const onChange = async (info) => {
        if (info.file.status === 'error') {
            antd.notification.error({
                message: uploadErrorTitle || text.error,
                description: info.file.error.message || text.errMessageFileMAxUpload
            });
        }
        if (info.file.status === 'done' || info.file.status === 'removed') {
            const values = getImagesFormValues(info.fileList, imagesUrls.current);
            input.onChange(values);
        }
        if (info.file.status === 'uploading') {
            input.onChange(info.fileList);
        }
        if (lodash.isEmpty(info.fileList)) {
            input.onChange(null);
        }
    };
    const showUploadList = React.useMemo(() => ({
        showRemoveIcon: !staticMode,
        showPreviewIcon: true
    }), [staticMode]);
    const handleAction = async (file) => {
        const { uid, name, size, type } = file;
        const files = [{ name, size, mimeType: type }];
        const { data } = await postReq(signUrl, undefined, { files, category });
        const imgData = data?.files?.[0];
        imagesUrls.current[uid] = { uid, ...imgData };
        return imgData.signedUrl;
    };
    const uploader = (jsxRuntime.jsx(antd.Upload, { id: formFieldID(form, input.name), className: 'mb-2', accept: accept, action: handleAction, disabled: disabled, onChange: onChange, listType: 'picture-card', multiple: multiple, customRequest: uploadFile, fileList: input.value || [], onPreview: (file) => setPreviewUrl(file.url || lodash.get(imagesUrls, `current.[${file.uid}].url`)), maxCount: maxCount, showUploadList: showUploadList, beforeUpload: (file, fileList) => {
            if (file.size >= maxFileSize) {
                getMaxSizeNotifyMessage(maxFileSize, toastTextUploadMaxError);
                return antd.Upload.LIST_IGNORE;
            }
            if (fileList.length > maxCount) {
                const { uid: uidCurrent } = file;
                const { uid: uidLast } = fileList[fileList.length - 1];
                if (uidCurrent === uidLast)
                    antd.notification.error({
                        message: maxFilesText?.title || text.error,
                        description: `${maxFilesText?.text || text.errMessageFileMAxUpload} Nahrajte maximálne ${maxCount} súborov`
                    });
                return antd.Upload.LIST_IGNORE;
            }
            return true;
        }, children: !staticMode && input.value.length < maxCount && (jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx(icons.UploadOutlined, { className: `text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}` }), jsxRuntime.jsx("div", { className: `text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}`, children: uploadBtnText || text.upload })] })) }));
    return (jsxRuntime.jsxs(Item$9, { className: 'w-full', label: label, required: required, help: touched && error ? error : undefined, validateStatus: touched && error ? 'error' : undefined, children: [staticMode && !input.value && '-', uploader, jsxRuntime.jsx(antd.Modal, { visible: !!previewUrl, onCancel: () => setPreviewUrl(''), footer: null, children: jsxRuntime.jsx("img", { className: 'w-full', src: previewUrl, alt: 'preview' }, previewUrl) })] }));
};
// NOTE: Prevent voči animácii po submitnutí formulára
var ImgUploadField$1 = React.memo(ImgUploadField, (prevProps, nextProps) => {
    const theSameError = prevProps.meta.error === nextProps.meta.error;
    const theSameTouched = prevProps.meta.touched === nextProps.meta.touched;
    // NOTE: Shallow fast comparision
    if (!theSameError || !theSameTouched) {
        return false; // Rerender
    }
    // NOTE: Deep slower comparision
    const theSameInput = lodash.isEqual(prevProps.input, nextProps.input);
    if (!theSameInput) {
        return false; // Rerender
    }
    return true;
});

const { Item: Item$8 } = antd.Form;
const InputField = (props) => {
    const { input, size, placeholder, label, required, type, prefix, disabled, style, customOnBlur, meta: { form, error, touched }, hideHelp, maxLength, fieldMode = FIELD_MODE.INPUT, readOnly, className, customOnChange, allowClear, suffix, addonBefore, focused } = props;
    const inputRef = React.useRef(null);
    React.useEffect(() => {
        if (inputRef.current && focused) {
            inputRef.current.focus();
        }
    }, [focused]);
    const onChange = React.useCallback((e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? lodash.trimStart(e.target.value) : null;
        const change = customOnChange || input.onChange;
        change(val);
    }, [input, customOnChange]);
    const onBlur = React.useCallback(async (e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? lodash.trim(e.target.value) : null;
        // NOTE: wait until redux-form "BLUR" action is finished
        await input.onBlur(val);
        if (customOnBlur) {
            customOnBlur(val);
        }
    }, [input, customOnBlur]);
    const onFocus = React.useCallback(async (e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        if (input.onFocus) {
            input.onFocus(val);
        }
    }, [input]);
    return (jsxRuntime.jsx(Item$8, { label: label, required: required, style: style, className: cx__default["default"](className, { 'form-item-disabled': disabled, readOnly }), help: hideHelp ? undefined : touched && error, validateStatus: error && touched ? 'error' : undefined, children: jsxRuntime.jsx(antd.Input, { ...input, id: formFieldID(form, input.name), className: cx__default["default"]('input', { 'input-filter': fieldMode === FIELD_MODE.FILTER }), onChange: onChange, onBlur: onBlur, addonBefore: addonBefore, size: size || 'middle', onFocus: onFocus, value: input.value, placeholder: placeholder, type: type || 'text', 
            // Ak je filter cez RemoveIcon zmaat string (ant ma pre input aj allowClear ale neda sa mu zmenit ikona tak ako napr v selecte preto to je takto robene)
            suffix: (allowClear || fieldMode === FIELD_MODE.FILTER) && input.value ? (jsxRuntime.jsx(icons.CloseOutlined, { onClick: () => input.onChange('') })) : (suffix), prefix: fieldMode === FIELD_MODE.FILTER ? jsxRuntime.jsx(icons.SearchOutlined, {}) : prefix, disabled: disabled, maxLength: maxLength, ref: inputRef }) }));
};
var InputField$1 = React.memo(InputField);

const { Item: Item$7 } = antd.Form;
const RadioGroupField = (props) => {
    const { input, label, required, options, meta: { error, touched }, className, style, direction = 'horizontal', disabled } = props;
    const radioOptions = lodash.map(options, (option) => {
        if (typeof option === 'string') {
            return (jsxRuntime.jsx(antd.Radio, { value: option, children: option }, option));
        }
        return (jsxRuntime.jsxs(antd.Radio, { className: cx__default["default"]({ 'w-full': direction === 'vertical' }), value: option.value, children: [option.label, option.customContent ? option.customContent : null] }, `${option.value}`));
    });
    return (jsxRuntime.jsx(Item$7, { required: required, label: label, help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, className: cx__default["default"](className, 'radio', { 'radio-has-error': error && touched }), children: jsxRuntime.jsx(antd.Radio.Group, { value: input.value || [], onChange: input.onChange, className: cx__default["default"]({ flex: direction === 'horizontal', block: direction === 'vertical' }), disabled: disabled, children: radioOptions }) }));
};

const { Item: Item$6 } = antd.Form;
const { Option } = antd.Select;
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
const getOptions = (optionRender, options) => lodash.map(options, (option) => (jsxRuntime.jsx(Option, { value: option.value, disabled: option.disabled, label: option.label, extra: option.extra, children: optionRender ? optionRender(option) : option.label }, option.key)));
const customDropdown = (actions, menu, fetching, indicator) => {
    const divider = lodash.isEmpty(actions) ? null : jsxRuntime.jsx(antd.Divider, { style: { margin: 0 } });
    return (jsxRuntime.jsxs(antd.Spin, { style: { margin: '10px', justifyContent: 'flex-start' }, indicator: indicator, className: 'flex-center', tip: 'Načítavam...', spinning: fetching, children: [menu, jsxRuntime.jsx("div", { className: 'w-11/12 m-auto', children: divider }), lodash.map(actions, (item, index) => (jsxRuntime.jsx("div", { className: 'flex items-center h-12', children: jsxRuntime.jsx(antd.Button, { type: 'link', size: 'large', htmlType: 'button', className: 'btn', icon: item.icon, onClick: item.onAction, children: item.title }, item.title) }, index)))] }));
};
const handleChange = async (data) => {
    const { value, options, autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update } = data;
    let val = value;
    // NOTE condition for checking if select field has 'tags' mode with maxTagLength prop for checking length string of added tag
    // if input value's length is larger than maxTagLength, filter this value from tags
    if (mode === 'tags' && maxTagLength && lodash.size(lodash.last(value)) > maxTagLength) {
        val = lodash.filter(value, (v, i) => i !== value.length - 1);
    }
    // NOTE: extra data k value, key, label ak potrebujeme poslat ine data -> eg. pri reservacii sa neposiela ID travelera ale cely objekt
    if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
        val = lodash.map(value, (valInput) => ({
            ...valInput,
            extra: lodash.find(options, (item) => item.value === valInput.value)?.extra
        }));
    }
    else if (hasExtra && options?.extra) {
        val = {
            ...value,
            extra: options?.extra
        };
    }
    if (maxTagsLimit && val?.length > maxTagsLimit) {
        val = lodash.take(val, maxTagsLimit);
    }
    await input.onChange(val === undefined ? null : val);
    if (update) {
        // NOTE: update prop for onSelect and onDeselect submitting form (eg. setting Tags)
        update(val, itemRef.current);
    }
    if (autoBlur && itemRef.current) {
        itemRef.current.blur();
    }
};
const fetchSearchData = async ({ selectState, value, page, onSearch, dataSourcePath, allowInfinityScroll, missingValues }) => {
    let newState = {};
    try {
        let collectedData = [];
        if (page !== 1 && selectState.data)
            collectedData = selectState.data;
        const newData = await onSearch(value, page, missingValues);
        const dataOptions = lodash.get(newData, dataSourcePath);
        if (newData.pagination || dataOptions) {
            const mergedData = [...collectedData, ...dataOptions];
            newState = { data: mergedData, pagination: newData.pagination, fetching: false };
        }
        else if (!allowInfinityScroll && lodash.isArray(newData)) {
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
};
const SelectField = (props) => {
    const { input, size, placeholder, label, required, meta, showErrorWhenUntouched, hideHelp, options, loading, mode, tagRender, allowClear, style, showSearch, filterOption, suffixIcon, labelInValue, actions, disabled, notFoundContent, removeIcon, allowInfinityScroll, defaultValue, backgroundColor, clearIcon, className, optionLabelProp, open, showArrow, menuItemSelectedIcon, dropdownClassName, dropdownStyle, dropdownMatchSelectWidth = true, listHeight, emptyText, bordered, autoClearSearchValue, maxTagTextLength, showAction, getPopupContainer, disableMenuItemSelectedIcon, fieldMode = FIELD_MODE.INPUT, readOnly, disableTpStyles = false, autoFocus, optionRender, dataSourcePath = 'data', onDidMountSearch, update, maxTagLength, maxTagsLimit, autoBlur, indicator, hasExtra } = props;
    const localItemRef = React.useRef();
    const itemRef = props.itemRef || localItemRef;
    const [selectState, setSelectState] = React.useState({
        data: [],
        fetching: false,
        searchValue: '',
        emptyText: null,
        pagination: null
    });
    const renderDropdown = React.useCallback((antdActions) => (menu) => {
        return customDropdown(antdActions, menu, selectState.fetching, indicator);
    }, [selectState.fetching]);
    const handleSearch = React.useCallback(async (value = '', page = 1, missingValues = []) => {
        const onSearch = props.onSearch;
        if (selectState.fetching) {
            return;
        }
        if (onSearch) {
            setSelectState({ ...selectState, fetching: true, searchValue: value });
            const newState = await fetchSearchData({ selectState, value, page, onSearch, dataSourcePath, allowInfinityScroll, missingValues });
            setSelectState(newState);
        }
    }, [selectState, allowInfinityScroll, dataSourcePath, props.onSearch]);
    const onSearchDebounced = React.useMemo(() => lodash.debounce(handleSearch, 300), [handleSearch]);
    const onChange = React.useCallback(async (value, antdOptions) => {
        if (!input.onChange)
            return;
        handleChange({ value, options: antdOptions, autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update });
    }, [autoBlur, hasExtra, input, itemRef, maxTagLength, maxTagsLimit, mode, update]);
    const onSelectWrap = async (value, option) => {
        const { onSelect } = props;
        if (onSelect) {
            let opt;
            if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
                opt = {
                    ...value,
                    extra: lodash.find(options, (item) => Number(item.value) === value.value)?.extra
                };
            }
            else {
                opt = { ...value };
            }
            await onSelect(opt, option, input.value);
        }
    };
    const onDeselectWrap = async (value, option) => {
        const { onDeselect } = props;
        if (onDeselect) {
            let val;
            if ((mode === 'tags' || mode === 'multiple') && hasExtra) {
                val = {
                    ...value,
                    extra: lodash.find(options, (item) => Number(item.value) === value.value)?.extra
                };
            }
            await onDeselect(val, option);
        }
    };
    const onScroll = React.useCallback((e) => {
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
    const onDropdownVisibleChange = React.useCallback((isOpen) => {
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
    const onFocus = React.useCallback((e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
    }, [input]);
    React.useEffect(() => {
        if (onDidMountSearch) {
            handleSearch('', 1);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onDidMountSearch]);
    /**
     * check if initial selected values are all loaded
     * only for select with pagination (allowInfinityScroll)
     */
    const checkInitialSelectedValues = React.useRef(true);
    React.useEffect(() => {
        // options must be loaded and input value available to run the check
        if (!onDidMountSearch || !allowInfinityScroll || selectState.data?.length === 0 || !input.value || !checkInitialSelectedValues.current)
            return;
        // check if all input values are loaded
        const values = lodash.isArray(input.value) ? new Set([...input.value]) : new Set([input.value]);
        lodash.some(selectState.data, (item) => {
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
    const localFilterOption = (inputValue, option) => createSlug(option.label.toLowerCase()).indexOf(createSlug(inputValue.toLowerCase())) >= 0;
    const value = input.value === null || input.value === '' ? undefined : input.value;
    let opt = options;
    if (lodash.isEmpty(options) && lodash.isEmpty(selectState.data)) {
        opt = [];
    }
    else if (lodash.isEmpty(options)) {
        opt = selectState.data;
    }
    let suffIcon;
    if (!loading && !selectState.fetching) {
        suffIcon = suffixIcon;
    }
    let notFound = notFoundContent;
    if (emptyText || selectState.emptyText) {
        notFound = jsxRuntime.jsx(antd.Empty, { className: 'm-4', image: antd.Empty.PRESENTED_IMAGE_SIMPLE, description: selectState.emptyText || emptyText });
    }
    return (jsxRuntime.jsx(Item$6, { label: label, required: required, style: style, className: cx__default["default"](className, { 'form-item-disabled': disabled, readOnly }), help: (meta?.touched || showErrorWhenUntouched) && !hideHelp && lodash.isString(meta?.error) ? meta?.error : undefined, validateStatus: (meta?.touched || showErrorWhenUntouched) && meta?.error ? 'error' : undefined, children: jsxRuntime.jsx(antd.Select, { bordered: bordered, style: { backgroundColor }, className: cx__default["default"]({ 'select-input': !disableTpStyles, rounded: backgroundColor, 'filter-select': fieldMode === FIELD_MODE.FILTER }), tagRender: tagRender, mode: mode, ...input, id: formFieldID(meta.form, input.name), onFocus: onFocus, onChange: onChange, size: size || 'middle', value: value, onBlur: onBlur, placeholder: placeholder || '', loading: loading || selectState.fetching, clearIcon: clearIcon, allowClear: allowClear, showSearch: showSearch, filterOption: filterOption && localFilterOption, onSearch: showSearch ? onSearchDebounced : undefined, suffixIcon: suffIcon, labelInValue: labelInValue, dropdownRender: props.dropdownRender || renderDropdown(actions), disabled: disabled, removeIcon: removeIcon, notFoundContent: notFound, onPopupScroll: allowInfinityScroll ? onScroll : undefined, onDropdownVisibleChange: onDropdownVisibleChange, ref: itemRef, defaultValue: defaultValue, optionLabelProp: optionLabelProp, open: open, onDeselect: onDeselectWrap, onSelect: onSelectWrap, showArrow: showArrow, menuItemSelectedIcon: renderMenuItemSelectedIcon(mode, menuItemSelectedIcon, disableMenuItemSelectedIcon), dropdownClassName: cx__default["default"](`select-dropdown ${dropdownClassName}`, { 'dropdown-match-select-width': dropdownMatchSelectWidth }), dropdownStyle: dropdownStyle, dropdownMatchSelectWidth: dropdownMatchSelectWidth, listHeight: listHeight, autoClearSearchValue: autoClearSearchValue, maxTagTextLength: maxTagTextLength, showAction: showAction, getPopupContainer: setGetPopupContainer(mode, getPopupContainer), autoFocus: autoFocus, ...{ autoComplete: 'new-password' }, children: getOptions(optionRender, opt) }) }));
};

const { Item: Item$5 } = antd.Form;
const SwitchField = (props) => {
    const { input, label, disabled, meta: { form, error, touched }, style, size, onClick, checked, className, suffixIcon, extraText, description, offsetLabel, customLabel, customOnChange } = props;
    // NOTE: ak existuje label znamena to ze switch je pouzity ako label vo forme a vtedy sa pouzije novy layout ikona + label text + switch
    // Ak nie je label pouzite je v tabulke alebo vo filtri a vtedy sa nerenderuje label ani ikona ale len samotny switch field
    const checkedState = input.value === 'true' || input.value === true || checked;
    const onChange = React.useCallback((chck) => {
        if (customOnChange) {
            customOnChange(chck);
        }
        else {
            input.onChange(chck);
        }
    }, [input, customOnChange]);
    return (jsxRuntime.jsx(Item$5, { help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, className: cx__default["default"](className, { 'pt-25px': offsetLabel }), children: label || customLabel ? (jsxRuntime.jsx("div", { className: cx__default["default"]('switch', { 'pointer-events-none': disabled, 'bg-gray-50': disabled }), onClick: () => onChange(!checkedState), onKeyDown: (e) => {
                if (e.key === KEYBOARD_KEY.ENTER) {
                    onChange(!checkedState);
                }
            }, role: 'checkbox', "aria-checked": checkedState, tabIndex: 0, children: jsxRuntime.jsxs("div", { className: 'flex items-center justify-between w-full', children: [jsxRuntime.jsxs("div", { className: 'switch-label flex items-center w-11/12', children: [customLabel || (jsxRuntime.jsx(antd.Typography.Paragraph, { ellipsis: { rows: 1, tooltip: true }, className: 'label', children: label })), description && (jsxRuntime.jsx(antd.Tooltip, { title: description, className: 'cursor-pointer', children: suffixIcon }))] }), jsxRuntime.jsxs("div", { className: cx__default["default"]('flex justify-end extra-text w-2/12 sm:w-4/12 text-right', { 'text-blue-600': checkedState }), children: [jsxRuntime.jsx("div", { children: extraText }), jsxRuntime.jsx("span", { id: formFieldID(form, input.name), children: jsxRuntime.jsx(antd.Switch, { className: 'ml-2', checked: checkedState, disabled: disabled, size: size, onClick: onClick, tabIndex: -1 }) })] })] }) })) : (jsxRuntime.jsx(antd.Switch, { onChange: onChange, checked: checkedState, disabled: disabled, size: size, onClick: onClick })) }));
};

const TextareaField = (props) => {
    const { input, prefix, disabled, label, placeholder, required, meta: { error, touched }, rows, autoSize, allowClear, style, maxLength, focusRow, readOnly, className, size, showLettersCount } = props;
    const [autoSizeState, setSutoSizeState] = React.useState(undefined);
    const ref = React.useRef(null);
    const parseValue = (value) => lodash.trimStart(value) || null;
    const onChange = React.useCallback((e) => {
        if (input.onChange) {
            const val = parseValue(lodash.get(e, 'target.value'));
            input.onChange(val, e.target.name);
        }
    }, [input]);
    const onFocus = React.useCallback((e) => {
        if (input.onFocus) {
            input.onFocus(e);
        }
        if (focusRow) {
            setSutoSizeState({ minRows: focusRow, maxRows: 10 });
            ref?.current?.resizableTextArea?.resizeOnNextFrame();
        }
    }, [focusRow, input, setSutoSizeState]);
    const onBlur = React.useCallback((e) => {
        if (input.onBlur) {
            const val = parseValue(lodash.get(e, 'target.value'));
            input.onBlur(val, e.target.name);
        }
        if (focusRow) {
            setSutoSizeState({ minRows: 1, maxRows: 10 });
            ref?.current?.resizableTextArea?.resizeOnNextFrame();
        }
    }, [focusRow, input, setSutoSizeState]);
    const lettersCount = React.useMemo(() => {
        return (jsxRuntime.jsxs(antd.Row, { className: 'justify-between w-full pr-2', children: [jsxRuntime.jsx("span", { children: label }), jsxRuntime.jsx("i", { className: 'xs-regular letters-count', style: { lineHeight: '22px' }, children: `${input.value.length}/${maxLength}` })] }));
    }, [maxLength, input, label]);
    return (jsxRuntime.jsx(antd.Form.Item, { label: showLettersCount ? lettersCount : label, required: required, style: style, help: touched && error, className: cx__default["default"](className, { 'form-item-disabled': disabled, readOnly }), validateStatus: error && touched ? 'error' : undefined, children: jsxRuntime.jsx(antd.Input.TextArea, { ...input, onFocus: onFocus, onBlur: onBlur, onChange: onChange, className: 'textarea', value: input.value, placeholder: placeholder, prefix: prefix, disabled: disabled, rows: rows, autoSize: autoSizeState || autoSize, allowClear: allowClear, maxLength: maxLength, ref: ref, size: size }) }));
};

class TimeField extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { close: undefined };
        this.onKeyDown = (e) => {
            if (e.keyCode === 13) {
                this.setState({ close: true }, () => {
                    this.setState({ close: undefined });
                });
            }
        };
        this.onChangeWrap = (value) => {
            const { input, timeFormat = DEFAULT_TIME_FORMAT } = this.props;
            const timeString = value.format(timeFormat);
            input.onChange(timeString || null);
        };
        this.onClear = (value) => {
            const { input } = this.props;
            if (!value) {
                input.onChange(null);
            }
            else {
                this.onChangeWrap(value);
            }
        };
    }
    render() {
        const { input, label, required, style, meta: { error, touched, form }, timeFormat = DEFAULT_TIME_FORMAT, placeholder, disabled, allowClear, minuteStep, getPopupContainer, popupClassName, clearIcon, suffixIcon, size } = this.props;
        let value;
        if (input.value) {
            value = dayjs__default["default"](input.value, timeFormat);
        }
        const control = this.state.close ? { open: false } : {};
        return (jsxRuntime.jsx(antd.Form.Item, { label: label, required: required, style: style, help: touched && error, validateStatus: error && touched ? 'error' : undefined, children: jsxRuntime.jsx("div", { onKeyDown: this.onKeyDown, role: 'button', tabIndex: 0, children: jsxRuntime.jsx(antd.TimePicker, { id: formFieldID(form, input.name), dropdownAlign: DROPDOWN_POSITION.BOTTOM_LEFT, onSelect: this.onChangeWrap, onChange: this.onClear, format: timeFormat, value: value, className: 'date-input time-input', popupClassName: popupClassName || 'time-dropdown', suffixIcon: suffixIcon, placeholder: placeholder, disabled: disabled, clearIcon: clearIcon, allowClear: allowClear, minuteStep: minuteStep, getPopupContainer: getPopupContainer || ((node) => node), size: size, ...control }) }) }));
    }
}

const { Item: Item$4 } = antd.Form;
const TimeRangeField = (props) => {
    const { names, placeholders, labels, disabled, clearIcon, allowClear, minuteStep, getPopupContainer, required, size, itemClassName, timeFormat = DEFAULT_TIME_FORMAT, hideHelp } = props;
    return (jsxRuntime.jsx(antd.Row, { gutter: ROW_GUTTER_X_DEFAULT, children: lodash.map(names, (name, index) => {
            const meta = lodash.get(props, `${name}.meta`);
            const input = lodash.get(props, `${name}.input`);
            const inputRef = React.createRef();
            let pickerValue;
            if (input.value) {
                pickerValue = dayjs__default["default"](input.value, timeFormat);
            }
            const onChangeWrap = (valueWithSeconds) => {
                // NOTE: neporovnavaj sekundy, ak kliknes na dropdown tlacidlo "Teraz"
                const value = valueWithSeconds.set('seconds', 0).set('milliseconds', 0);
                let newValue = value.format(timeFormat);
                const other = dayjs__default["default"](lodash.get(props, `${names[index === 0 ? 1 : 0]}.input.value`), timeFormat);
                let isNorm;
                if (index === 0 && value >= other) {
                    newValue = other.subtract(1, 'minute').format(timeFormat);
                    isNorm = true;
                }
                else if (index === 1 && value <= other) {
                    newValue = other.set('minutes', other.minute() + 1).format(timeFormat);
                    isNorm = true;
                }
                // NOTE: blurni input aby sa normalizovana hodnota prejavila hned po vybere
                if (isNorm) {
                    inputRef?.current?.blur();
                }
                input.onChange(newValue);
            };
            const onClear = (value) => {
                if (!value) {
                    input.onChange(null);
                }
                else {
                    onChangeWrap(value);
                }
            };
            return (jsxRuntime.jsx(antd.Col, { span: 12, children: jsxRuntime.jsx(Item$4, { className: cx__default["default"]('w-full', itemClassName), label: labels?.[index], required: required, help: hideHelp ? undefined : meta.touched && meta.error, validateStatus: meta.touched && meta.error ? 'error' : undefined, children: jsxRuntime.jsx(antd.TimePicker, { ref: inputRef, id: formFieldID(meta.form, input.name), dropdownAlign: DROPDOWN_POSITION.BOTTOM_LEFT, onSelect: onChangeWrap, onChange: onClear, format: timeFormat, value: pickerValue, className: 'w-full date-input time-input', popupClassName: 'time-dropdown', size: size, suffixIcon: jsxRuntime.jsx(icons.ClockCircleOutlined, { className: 'text-black' }), placeholder: placeholders[index], disabled: disabled, clearIcon: clearIcon, allowClear: allowClear, minuteStep: minuteStep, getPopupContainer: getPopupContainer || ((node) => node) }) }) }, name));
        }) }));
};

const { Item: Item$3 } = antd.Form;
const ToggleField = (props) => {
    const { input, label, required, options, size, meta: { error, touched }, style, disabled } = props;
    return (jsxRuntime.jsx(Item$3, { required: required, label: label, help: touched && error, validateStatus: error && touched ? 'error' : undefined, style: style, children: jsxRuntime.jsx(antd.Radio.Group, { optionType: 'button', size: size, className: 'toggle-btn', buttonStyle: 'solid', value: input.value || [], options: options, onChange: input.onChange, disabled: disabled }) }));
};

const { Item: Item$2 } = antd.Form;
const InputMaskedField = (props) => {
    const { input, label, required, disabled, style, meta: { error, touched }, mask, uppercaseOnChange, placeholder, size } = props;
    const handleChange = React.useCallback((e) => {
        // NOTE: prevent to have "" empty string as empty value
        let val = e.target.value ? e.target.value : null;
        if (val && uppercaseOnChange) {
            val = val.toUpperCase();
        }
        input.onChange(val);
    }, [input, uppercaseOnChange]);
    return (jsxRuntime.jsx(Item$2, { label: label, required: required, style: style, help: touched && error, validateStatus: error && touched ? 'error' : undefined, children: jsxRuntime.jsx(InputMask__default["default"], { ...input, className: cx__default["default"]('ant-input', 'input', 'input-masked', { 'input-masked--large': size === 'large' }), mask: mask, onChange: handleChange, value: input.value, disabled: disabled, placeholder: placeholder }) }));
};
var InputMaskedField$1 = React.memo(InputMaskedField);

const { Item: Item$1 } = antd.Form;
const InputNumberField = (props) => {
    const { input, size, placeholder, label, required, disabled, style, meta: { form, error, touched }, min = -99999999, max = 999999999, precision, step, parser, maxChars = 9, // NOTE: Kazde 9 ciferne cislo je bezpecne pre Postgres Integer typ
    smallInput, defaultValue, type = 'text', rounded, hideHelp, className, notNullValue = false, onPressEnter, readOnly } = props;
    const maxCharsParser = (displayValue) => {
        if (maxChars && maxChars > 0 && displayValue && displayValue.length > maxChars) {
            const formatted = displayValue.slice(0, maxChars);
            return formatted;
        }
        return displayValue || '';
    };
    const inputRef = React.useRef(null);
    const onFocus = React.useCallback(async (e) => {
        if (input.onFocus) {
            const val = transformNumberFieldValue(e.target.value);
            input.onFocus(val);
        }
    }, [input]);
    const onPressEnterWrap = React.useCallback(async () => {
        // NOTE: e.target.value v onPressEnter() može byť 5.5555€ aj keď je precision = 0, v parent komponente treba zavolať ref.blur() a do onBlur príde už zaokrúhlená number hodnota
        if (onPressEnter) {
            const ref = inputRef.current;
            onPressEnter(ref);
        }
    }, [onPressEnter]);
    const onBlur = React.useCallback(async (e) => {
        const val = transformNumberFieldValue(e.target.value, Number(min), Number(max), precision, notNullValue);
        // NOTE: wait until redux-form "BLUR" action is finished
        await input.onBlur(val);
    }, [min, max, precision, notNullValue, input]);
    return (jsxRuntime.jsx(Item$1, { label: label, required: required, style: style, help: touched && !hideHelp && error, validateStatus: error && touched ? 'error' : undefined, className: cx__default["default"](className, { 'small-input': smallInput, 'form-item-disabled': disabled, readOnly }), children: jsxRuntime.jsx(antd.InputNumber, { ...input, ref: inputRef, style: { width: '100%' }, id: formFieldID(form, input.name), min: min, max: max, size: size || 'middle', defaultValue: defaultValue, value: input.value, placeholder: placeholder, disabled: disabled, precision: precision, step: step, type: type || 'text', className: cx__default["default"]('input-number', { 'rounded-full': rounded }), onFocus: onFocus, decimalSeparator: ',', parser: maxChars && maxChars > 0 ? maxCharsParser : parser, 
            // NOTE: Prevent proti posielaniu BLUR akcie so string payloadom - posiela Ant na pozadi
            onBlur: onBlur, onPressEnter: onPressEnterWrap, onChange: input.onChange }) }));
};
var InputNumberField$1 = React.memo(InputNumberField);

const { Item } = antd.Form;
const InputPasswordField = (props) => {
    const { input, size, placeholder, label, required, type, prefix, disabled, style, customOnBlur, meta: { form, error, touched }, hideHelp, maxLength, readOnly, className, tooltip, icon, hideIcon } = props;
    const onChange = React.useCallback((e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        input.onChange(lodash.trimStart(val));
    }, [input]);
    const onBlur = React.useCallback(async (e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        // NOTE: wait until redux-form "BLUR" action is finished
        await input.onBlur(val);
        if (customOnBlur) {
            customOnBlur(val);
        }
    }, [input, customOnBlur]);
    const onFocus = React.useCallback(async (e) => {
        // NOTE: prevent to have "" empty string as empty value
        const val = e.target.value ? e.target.value : null;
        if (input.onFocus) {
            input.onFocus(val);
        }
    }, [input]);
    const renderToggleIcon = (visible) => {
        if (visible) {
            return icon;
        }
        return hideIcon;
    };
    return (jsxRuntime.jsx(Item, { label: label, required: required, style: style, className: cx__default["default"](className, { 'form-item-disabled': disabled, readOnly }), help: hideHelp ? undefined : touched && error, validateStatus: error && touched ? 'error' : undefined, tooltip: tooltip, children: jsxRuntime.jsx(antd.Input.Password, { ...input, id: formFieldID(form, input.name), className: cx__default["default"]('input-password'), onChange: onChange, onBlur: onBlur, size: size || 'middle', onFocus: onFocus, value: input.value, iconRender: renderToggleIcon, placeholder: placeholder, type: type || 'text', prefix: prefix, disabled: disabled, maxLength: maxLength }) }));
};
var InputPasswordField$1 = React.memo(InputPasswordField);

// dayjs extended plugins
dayjs__default["default"].extend(isBetween__default["default"]);
dayjs__default["default"].extend(utcPlugin__default["default"]);
dayjs__default["default"].extend(timezonePlugin__default["default"]);
dayjs__default["default"].extend(minMax__default["default"]);
module.exports = {
    CheckboxField,
    CheckboxGroupField,
    DateField,
    DateRangeField,
    DateRangePickerField,
    FileUploadField: FileUploadField$1,
    ImgUploadField: ImgUploadField$1,
    InputField: InputField$1,
    InputMaskedField: InputMaskedField$1,
    InputNumberField: InputNumberField$1,
    InputPasswordField: InputPasswordField$1,
    RadioGroupField,
    SelectField,
    SwitchField,
    TextareaField,
    TimeField,
    TimeRangeField,
    ToggleField
};
// add all custom test commands for cypress
const initializeCustomCommands = () => {
    Cypress.Commands.addAll({
        apiAuth,
        setInputValue,
        selectOptionDropdown,
        setSearchBoxValueAndSelectFirstOption,
        clickButton,
        clickDeleteButtonWithConf,
        uploadFile,
        checkSuccessToastMessage,
        clearDropdownSelection,
        checkFirstCheckBox
    });
};
// init all commands
initializeCustomCommands();
