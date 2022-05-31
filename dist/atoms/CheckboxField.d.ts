/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
declare type Props = WrappedFieldProps & InputProps & FormItemLabelProps;
declare const CheckboxField: (props: Props) => JSX.Element;
export default CheckboxField;
