import { useCallback, memo } from 'react'
import { Form } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'
import InputMask from 'react-input-mask'
import cx from 'classnames'

const { Item } = Form

type Props = WrappedFieldProps &
	InputProps &
	FormItemLabelProps & {
		mask: string | Array<string | RegExp>
		uppercaseOnChange: boolean
	}

const InputMaskedField = (props: Props) => {
	const {
		input,
		label,
		required,
		disabled,
		style,
		meta: { error, touched, valid },
		mask,
		uppercaseOnChange,
		placeholder,
		size
	} = props

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			// NOTE: prevent to have "" empty string as empty value
			let val = e.target.value ? e.target.value : null
			if (val && uppercaseOnChange) {
				val = val.toUpperCase()
			}
			input.onChange(val)
		},
		[input, uppercaseOnChange]
	)

	return (
		<Item label={label} required={required} style={style} help={touched && error} validateStatus={error && touched ? 'error' : touched && valid ? 'success' : undefined}>
			<InputMask
				{...input}
				className={cx('ant-input', 'input', 'input-masked', { 'input-masked--large': size === 'large' })}
				mask={mask}
				onChange={handleChange}
				value={input.value}
				disabled={disabled}
				placeholder={placeholder}
			/>
		</Item>
	)
}

export default memo(InputMaskedField)
