/// <reference types="react" />
import { BaseFieldsProps, WrappedFieldsProps } from 'redux-form';
import { TimePickerProps } from 'antd/lib/time-picker';
import { FormItemProps } from 'antd/lib/form/FormItem';
declare type Props = WrappedFieldsProps & TimePickerProps & FormItemProps & BaseFieldsProps & {
    placeholders: string[];
    labels?: string[];
    timeFormat?: string;
    itemClassName?: string;
    hideHelp?: boolean;
};
declare const TimeRangeField: (props: Props) => JSX.Element;
export default TimeRangeField;
