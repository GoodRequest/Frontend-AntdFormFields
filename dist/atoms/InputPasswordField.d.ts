import { ReactNode } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
declare type Props = WrappedFieldProps & InputProps & FormItemLabelProps & {
    customOnBlur?: (value: string | null) => any;
    hideHelp?: boolean;
} & {
    icon: ReactNode;
    hideIcon: ReactNode;
};
declare const _default: import("react").MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
