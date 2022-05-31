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
const lodash_1 = require("lodash");
const classnames_1 = __importDefault(require("classnames"));
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
const helper_1 = require("../utils/helper");
const text_json_1 = __importDefault(require("../utils/text.json"));
const { Item } = antd_1.Form;
/**
 * Umožňuje nahrať jeden súbor, nový súbor nahradí pôvodný
 */
const FileUploadField = (props) => {
    const { label, input, required, meta: { error, touched }, action, pathToFolder, staticMode, accept, maxFileSize, disabled, accessToken, uploadBtnText, afterUploadErrorTitle, toastTextUploadMaxError } = props;
    const signedUrl = (0, lodash_1.get)(input, 'value.url') ? `${(0, lodash_1.get)(input, 'value.url')}?t=${accessToken}` : undefined;
    const fileList = input.value
        ? [
            Object.assign(Object.assign({}, input.value), { url: signedUrl })
        ]
        : [];
    const onChange = (info) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        if (info.file.status === 'error') {
            // NOTE: if uploaded file has a bad format (eg. txt)
            antd_1.notification.error({
                message: afterUploadErrorTitle || text_json_1.default.error,
                description: (_a = info.file.response) === null || _a === void 0 ? void 0 : _a.messages
            });
        }
        if (info.file.status === 'done') {
            const value = {
                id: (0, lodash_1.get)(info.file.response, 'file.id'),
                name: (0, lodash_1.get)(info.file.response, 'file.displayName'),
                url: `/api/v1/static/${(0, lodash_1.get)(info.file.response, 'file.path')}`
            };
            input.onChange(value);
        }
        if (info.file.status === 'uploading' || info.file.status === 'success') {
            input.onChange(info.file);
        }
        if ((0, lodash_1.isEmpty)(info.fileList)) {
            input.onChange(null);
        }
    });
    const showUploadList = (0, react_1.useMemo)(() => ({
        showRemoveIcon: !staticMode,
        showPreviewIcon: true
    }), [staticMode]);
    const uploader = ((0, jsx_runtime_1.jsx)(antd_1.Upload, Object.assign({ className: 'mb-2', headers: {
            Authorization: `Bearer ${accessToken}`
        }, action: action, accept: accept, disabled: disabled, data: { pathToFolder }, fileList: fileList, onChange: onChange, beforeUpload: (file) => {
            if (file.size >= maxFileSize) {
                (0, helper_1.getMaxSizeNotifyMessage)(maxFileSize, toastTextUploadMaxError);
                return false;
            }
            return true;
        }, showUploadList: showUploadList, listType: 'picture-card' }, { children: !staticMode && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(icons_1.UploadOutlined, { className: `text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}` }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}` }, { children: uploadBtnText || text_json_1.default.upload }))] })) })));
    return ((0, jsx_runtime_1.jsxs)(Item, Object.assign({ className: (0, classnames_1.default)('file-upload-field', { 'hide-overlay': staticMode, disabled }), label: label, required: required, style: { width: '100%' }, help: touched && error, validateStatus: touched && error ? 'error' : undefined }, { children: [staticMode && !input.value && '-', uploader] })));
};
// NOTE: Prevent voči animácii po submitnutí formulára
exports.default = (0, react_1.memo)(FileUploadField, (prevProps, nextProps) => {
    const theSameError = prevProps.meta.error === nextProps.meta.error;
    const theSameTouched = prevProps.meta.touched === nextProps.meta.touched;
    // NOTE: Shallow fast comparision
    if (!theSameError || !theSameTouched) {
        return false; // Rerender
    }
    // NOTE: Deep slower comparision
    const theSameInput = (0, lodash_1.isEqual)(prevProps.input, nextProps.input);
    if (!theSameInput) {
        return false; // Rerender
    }
    return true;
});
//# sourceMappingURL=FileUploadField.js.map