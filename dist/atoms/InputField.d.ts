/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import { FIELD_MODE } from '../utils/enums';
declare type Props = WrappedFieldProps & InputProps & FormItemLabelProps & {
    customOnBlur?: (value: string | null) => any;
    customOnChange?: (value: string | null) => any;
    hideHelp?: boolean;
    rounded?: boolean;
    fieldMode?: FIELD_MODE;
    focused?: boolean;
};
declare const _default: import("react").MemoExoticComponent<(props: Props) => JSX.Element>;
export default _default;
