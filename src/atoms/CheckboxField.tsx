import { Checkbox, Row, Form } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'
import { formFieldID } from '../utils/helper'

const { Item } = Form

type Props = WrappedFieldProps & InputProps & FormItemLabelProps

const CheckboxField = (props: Props) => {
	const {
		input,
		label,
		required,
		disabled,
		meta: { form, error, touched },
		placeholder,
		className,
		style
	} = props

	return (
		<Item required={required} label={label} help={touched && error} className={className} validateStatus={error && touched ? 'error' : undefined} style={style}>
			<Row>
				<Checkbox {...input} id={formFieldID(form, input.name)} checked={!!input.value} disabled={disabled}>
					{placeholder}
				</Checkbox>
			</Row>
		</Item>
	)
}

export default CheckboxField
