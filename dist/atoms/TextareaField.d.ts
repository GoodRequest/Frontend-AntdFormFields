/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { TextAreaProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
type Props = WrappedFieldProps & TextAreaProps & FormItemLabelProps & {
    focusRow?: number;
    showLettersCount?: boolean;
};
declare const TextareaField: (props: Props) => JSX.Element;
export default TextareaField;
