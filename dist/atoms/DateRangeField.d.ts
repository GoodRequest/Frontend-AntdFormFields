import React from 'react';
import { DatePickerProps } from 'antd';
import { Dayjs } from 'dayjs';
import { WrappedFieldsProps } from 'redux-form';
import { InputProps } from 'antd/lib/input';
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel';
type Props = WrappedFieldsProps & InputProps & FormItemLabelProps & DatePickerProps & {
    disablePast?: boolean;
    disableStartDayEnd?: boolean;
};
declare class DateRangeField extends React.Component<Props> {
    disabledStartDate: (startValue: Dayjs | null) => boolean;
    disabledEndDate: (endValue: Dayjs | null) => boolean;
    render(): JSX.Element;
}
export default DateRangeField;
