/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { UploadProps } from 'antd';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { IToastTexts } from '../types/interfaces';
declare type Props = WrappedFieldProps & FormItemProps & UploadProps & {
    pathToFolder: string;
    maxFileSize: number;
    accessToken: string;
    staticMode?: boolean;
    uploadBtnText?: string;
    afterUploadErrorTitle?: string;
    toastTextUploadMaxError?: IToastTexts;
};
declare const _default: import("react").NamedExoticComponent<Props>;
export default _default;
