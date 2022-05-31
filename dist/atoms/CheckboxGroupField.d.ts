import { CheckboxGroupProps } from 'antd/lib/checkbox';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { CSSProperties } from 'react';
import { WrappedFieldProps } from 'redux-form';
declare type ComponentProps = {
    checkboxGroupStyles?: CSSProperties;
    horizontal?: boolean;
    large?: boolean;
};
declare type Props = WrappedFieldProps & CheckboxGroupProps & FormItemProps & ComponentProps;
declare const CheckboxGroupField: (props: Props) => JSX.Element;
export default CheckboxGroupField;
