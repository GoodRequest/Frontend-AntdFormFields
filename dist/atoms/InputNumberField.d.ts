/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import { InputNumberProps } from 'antd/lib/input-number';
declare type Props = WrappedFieldProps & FormItemLabelProps & InputNumberProps & {
    maxChars?: number;
    smallInput?: boolean;
    rounded?: boolean;
    hideHelp?: boolean;
    notNullValue?: boolean;
};
declare const _default: import("react").MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
