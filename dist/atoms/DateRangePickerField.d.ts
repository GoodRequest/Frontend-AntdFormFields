/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { RangePickerProps } from 'antd/es/date-picker';
import { FormItemProps } from 'antd/lib/form/FormItem';
export type Props = WrappedFieldProps & FormItemProps & RangePickerProps & {
    disableFuture?: boolean;
    disablePast?: boolean;
    itemRef?: any;
};
declare const DateRangePickerField: (props: Props) => JSX.Element;
export default DateRangePickerField;
