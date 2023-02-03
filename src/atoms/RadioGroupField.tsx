import { Radio, Form, RadioChangeEvent } from 'antd'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'
import { map } from 'lodash'
import cx from 'classnames'
import { useState } from 'react'

const { Item } = Form

type Props = WrappedFieldProps &
	InputProps &
	FormItemLabelProps & {
		options: any
		direction: 'vertical' | 'horizontal'
	}

const RadioGroupField = (props: Props) => {
	const {
		input,
		label,
		required,
		options,
		meta: { error, touched },
		className,
		style,
		direction = 'horizontal',
		disabled,
	} = props
	
	const [value, setValue] = useState<number | string | undefined>(undefined)

	const radioOptions = map(options, (option) => {
		if (typeof option === 'string') {
			return (
				<Radio key={option} value={option}>
					{option}
				</Radio>
			)
		}
		return (
			<Radio className={cx({ 'w-full': direction === 'vertical' })} key={`${option.value}`} value={option.value}>
				{option.label}
				{option.customContent ? option.customContent : null}
			</Radio>
		)
	})

	const onChange = (e: RadioChangeEvent) => {
		setValue(e?.target?.value)
	}

	return (
		<Item
			required={required}
			label={label}
			help={touched && error}
			validateStatus={error && touched ? 'error' : undefined}
			style={style}
			className={cx(className, 'radio', { 'radio-has-error': error && touched }, { 'form-item-disabled' : disabled})}
		>
			<Radio.Group value={input.onChange ? input.value || [] : value} onChange={input.onChange ? input.onChange : onChange} className={cx({ flex: direction === 'horizontal', block: direction === 'vertical' })} disabled={disabled}>
				{radioOptions}
			</Radio.Group>
		</Item>
	)
}

export default RadioGroupField
