/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { UploadProps } from 'antd';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { IToastTexts } from '../types/interfaces';
type Props = WrappedFieldProps & FormItemProps & UploadProps & {
    category: string;
    pathToFolder: string;
    uploadFile: any;
    postReq: any;
    staticMode?: boolean;
    maxFileSize: number;
    signUrl: string;
    uploadBtnText?: string;
    uploadErrorTitle?: string;
    toastTextUploadMaxError?: IToastTexts;
    maxFilesText?: IToastTexts;
};
declare const _default: import("react").NamedExoticComponent<Props>;
export default _default;
