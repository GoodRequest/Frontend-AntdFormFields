/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
declare type Props = WrappedFieldProps & InputProps & FormItemLabelProps & {
    mask: string | Array<string | RegExp>;
    uppercaseOnChange: boolean;
};
declare const _default: import("react").MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
