import { Checkbox, Row, Form } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import cx from 'classnames'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'
import { formFieldID } from '../utils/helper'
import { useState } from 'react'

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

	const [value, setValue] = useState<any>(false)

	const onChange = (e: any) => {
		setValue(e?.target?.checked)
	}

	return (
		<Item 
			required={required} 
			label={label} 
			help={touched && error} 
			className={cx(className, 'radio', { 'checkbox-has-error': error && touched }, { 'form-item-disabled' : disabled})} 
			validateStatus={error && touched ? 'error' : undefined} 
			style={style}>
			<Row>
				<Checkbox {...input} 
					id={formFieldID(form, input.name)} 
					checked={input.onChange ? !!input.value : value} 
					disabled={disabled}
					onChange={input.onChange ? input.onChange : onChange}
				>
					{placeholder}
				</Checkbox>
			</Row>
		</Item>
	)
}

export default CheckboxField
