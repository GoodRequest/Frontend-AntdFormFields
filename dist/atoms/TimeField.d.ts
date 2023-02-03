import { KeyboardEvent, Component } from 'react';
import { WrappedFieldProps } from 'redux-form';
import { Dayjs } from 'dayjs';
import { FormItemProps } from 'antd/lib/form/FormItem';
import { TimePickerProps } from 'antd/lib/time-picker';
type Props = WrappedFieldProps & FormItemProps & TimePickerProps & {
    timeFormat?: string;
};
declare class TimeField extends Component<Props> {
    state: {
        close: any;
    };
    onKeyDown: (e: KeyboardEvent) => void;
    onChangeWrap: (value: Dayjs) => void;
    onClear: (value: Dayjs | null) => void;
    render(): JSX.Element;
}
export default TimeField;
