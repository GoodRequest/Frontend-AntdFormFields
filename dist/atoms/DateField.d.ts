/// <reference types="react" />
import { WrappedFieldProps } from 'redux-form';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { DatePickerProps } from 'antd/lib/date-picker';
type Props = WrappedFieldProps & FormItemProps & DatePickerProps & {
    disableFuture?: boolean;
    disablePast?: boolean;
    hideHelp?: boolean;
    /** disable od dátumu D1 do minulosti */
    compareFrom1?: any;
    /** disable od dátumu D2 do minulosti */
    compareFrom2?: any;
    /** disable od dátumu D1 do budúcnosti */
    compareTo1?: any;
    rounded?: boolean;
    readOnly?: boolean;
    showToday?: any;
    validateTo?: string; /** disable podla datumu ktory sa posle na validovanie */
};
declare const DateField: (props: Props) => JSX.Element;
export default DateField;
