import { Form, Radio } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'

const { Item } = Form

type Props = WrappedFieldProps &
	InputProps &
	FormItemLabelProps & {
		options: any
	}

const ToggleField = (props: Props) => {
	const {
		input,
		label,
		required,
		options,
		size,
		meta: { error, touched },
		style,
		disabled
	} = props

	return (
		<Item required={required} label={label} help={touched && error} validateStatus={error && touched ? 'error' : undefined} style={style}>
			<Radio.Group
				optionType='button'
				size={size}
				className={'toggle-btn'}
				buttonStyle={'solid'}
				value={input.value || []}
				options={options}
				onChange={input.onChange}
				disabled={disabled}
			/>
		</Item>
	)
}

export default ToggleField
