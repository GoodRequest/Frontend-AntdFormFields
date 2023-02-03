/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
import { SwitchProps } from 'antd/lib/switch';
type Props = WrappedFieldProps & SwitchProps & FormItemLabelProps & {
    suffixIcon?: JSX.Element;
    offsetLabel?: boolean;
    extraText?: any;
    description?: string;
    customLabel?: any;
    customOnChange?: (value: boolean) => void;
};
declare const SwitchField: (props: Props) => JSX.Element;
export default SwitchField;
