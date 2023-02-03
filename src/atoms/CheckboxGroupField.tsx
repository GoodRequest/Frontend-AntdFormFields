// ant
import { Checkbox, Form } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import { FormItemProps } from 'antd/lib/form/FormItem'
import cx from 'classnames'
import { map } from 'lodash'
import { CSSProperties, useState } from 'react'
import { WrappedFieldProps } from 'redux-form'
import { formFieldID } from '../utils/helper'

const { Item } = Form

type ComponentProps = {
	checkboxGroupStyles?: CSSProperties
	horizontal?: boolean
	large?: boolean
}

type Props = WrappedFieldProps & CheckboxGroupProps & FormItemProps & ComponentProps

const CheckboxGroupField = (props: Props) => {
	const {
		input,
		options,
		label,
		required,
		meta: { form, error, touched },
		style,
		checkboxGroupStyles,
		defaultValue,
		horizontal,
		className,
		disabled,
		large
	} = props

	const [value, setValue] = useState<any []>([])

	const checkboxes = map(options, (option: any) => {
		if (typeof option === 'string') {
			return (
				<Checkbox key={option} value={option} className={cx({ large, 'inline-flex': horizontal })} disabled={disabled}>
					{option}
				</Checkbox>
			)
		}
		return (
			<Checkbox disabled={disabled || option.disabled} key={`${option.value}`} value={option.value} className={cx('my-1', { large, 'inline-flex': horizontal })}>
				{option.label}
			</Checkbox>
		)
	})

	const onChange = (e: any) => {
		setValue(e)
	}

	return (
		<Item 
			label={label} 
			required={required} 
			help={touched && error} 
			className={cx(className, 'radio', { 'checkbox-has-error': error && touched }, { 'form-item-disabled' : disabled})} 
			validateStatus={error && touched ? 'error' : undefined} 
			style={style}
		>
			<Checkbox.Group
				// @ts-ignore
				id={formFieldID(form, input.name)}
				className={'flex flex-wrap'}
				onChange={input.onChange ? input.onChange : onChange}
				value={input.onChange ? input.value || [] : value}
				defaultValue={defaultValue}
				style={{
					...checkboxGroupStyles,
					flexDirection: horizontal ? 'row' : 'column'
				}}
			>
				{checkboxes}
			</Checkbox.Group>
		</Item>
	)
}

export default CheckboxGroupField
