/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
type Props = WrappedFieldProps & InputProps & FormItemLabelProps & {
    options: any;
    direction: 'vertical' | 'horizontal';
};
declare const RadioGroupField: (props: Props) => JSX.Element;
export default RadioGroupField;
