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
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lodash_1 = require("lodash");
const antd_1 = require("antd");
const icons_1 = require("@ant-design/icons");
// utils
const helper_1 = require("../utils/helper");
const text = require('../utils/text.json');
const { Item } = antd_1.Form;
// export type ImgUploadParam = { [key: string]: { uid: string } }
/**
 * Umoznuje nahrat obrazky na podpisanu url
 */
const ImgUploadField = (props) => {
    const { label, input, required, meta: { form, error, touched }, staticMode, accept = 'image/jpeg,image/png', maxFileSize, disabled, signUrl, multiple, maxCount = 20, category, uploadErrorTitle, toastTextUploadMaxError, maxFilesText, uploadBtnText, uploadFile, postReq } = props;
    const imagesUrls = (0, react_1.useRef)({});
    const [previewUrl, setPreviewUrl] = (0, react_1.useState)('');
    const onChange = (info) => __awaiter(void 0, void 0, void 0, function* () {
        if (info.file.status === 'error') {
            antd_1.notification.error({
                message: uploadErrorTitle || text.error,
                description: info.file.error.message || text.errMessageFileMAxUpload
            });
        }
        if (info.file.status === 'done' || info.file.status === 'removed') {
            const values = (0, helper_1.getImagesFormValues)(info.fileList, imagesUrls.current);
            input.onChange(values);
        }
        if (info.file.status === 'uploading') {
            input.onChange(info.fileList);
        }
        if ((0, lodash_1.isEmpty)(info.fileList)) {
            input.onChange(null);
        }
    });
    const showUploadList = (0, react_1.useMemo)(() => ({
        showRemoveIcon: !staticMode,
        showPreviewIcon: true
    }), [staticMode]);
    const handleAction = (file) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const { uid, name, size, type } = file;
        const files = [{ name, size, mimeType: type }];
        const { data } = yield postReq(signUrl, undefined, { files, category });
        const imgData = (_a = data === null || data === void 0 ? void 0 : data.files) === null || _a === void 0 ? void 0 : _a[0];
        imagesUrls.current[uid] = Object.assign({ uid }, imgData);
        return imgData.signedUrl;
    });
    const uploader = ((0, jsx_runtime_1.jsx)(antd_1.Upload, Object.assign({ id: (0, helper_1.formFieldID)(form, input.name), className: 'mb-2', accept: accept, action: handleAction, disabled: disabled, onChange: onChange, listType: 'picture-card', multiple: multiple, customRequest: uploadFile, fileList: input.value || [], onPreview: (file) => setPreviewUrl(file.url || (0, lodash_1.get)(imagesUrls, `current.[${file.uid}].url`)), maxCount: maxCount, showUploadList: showUploadList, beforeUpload: (file, fileList) => {
            if (file.size >= maxFileSize) {
                (0, helper_1.getMaxSizeNotifyMessage)(maxFileSize, toastTextUploadMaxError);
                return antd_1.Upload.LIST_IGNORE;
            }
            if (fileList.length > maxCount) {
                const { uid: uidCurrent } = file;
                const { uid: uidLast } = fileList[fileList.length - 1];
                if (uidCurrent === uidLast)
                    antd_1.notification.error({
                        message: (maxFilesText === null || maxFilesText === void 0 ? void 0 : maxFilesText.title) || text.error,
                        description: `${(maxFilesText === null || maxFilesText === void 0 ? void 0 : maxFilesText.text) || text.errMessageFileMAxUpload} Nahrajte maximálne ${maxCount} súborov`
                    });
                return antd_1.Upload.LIST_IGNORE;
            }
            return true;
        } }, { children: !staticMode && input.value.length < maxCount && ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(icons_1.UploadOutlined, { className: `text-xl ${touched && error ? 'text-red-600' : 'text-gray-600'}` }), (0, jsx_runtime_1.jsx)("div", Object.assign({ className: `text-sm ${touched && error ? 'text-red-600' : 'text-gray-600'}` }, { children: uploadBtnText || text.upload }))] })) })));
    return ((0, jsx_runtime_1.jsxs)(Item, Object.assign({ className: 'w-full', label: label, required: required, help: touched && error ? error : undefined, validateStatus: touched && error ? 'error' : undefined }, { children: [staticMode && !input.value && '-', uploader, (0, jsx_runtime_1.jsx)(antd_1.Modal, Object.assign({ visible: !!previewUrl, onCancel: () => setPreviewUrl(''), footer: null }, { children: (0, jsx_runtime_1.jsx)("img", { className: 'w-full', src: previewUrl, alt: 'preview' }, previewUrl) }))] })));
};
// NOTE: Prevent voči animácii po submitnutí formulára
exports.default = (0, react_1.memo)(ImgUploadField, (prevProps, nextProps) => {
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
//# sourceMappingURL=ImgUploadField.js.map