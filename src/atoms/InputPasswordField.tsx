import { ReactNode, useCallback, memo } from 'react'
import { Form, Input } from 'antd'
import cx from 'classnames'
import { WrappedFieldProps } from 'redux-form'
import { InputProps } from 'antd/lib/input'
import { FormItemLabelProps } from 'antd/lib/form/FormItemLabel'
import { trimStart } from 'lodash'

import { formFieldID } from '../utils/helper'

const { Item } = Form

type Props = WrappedFieldProps &
	InputProps &
	FormItemLabelProps & {
		customOnBlur?: (value: string | null) => any
		hideHelp?: boolean
	} & {
		icon: ReactNode,
		hideIcon: ReactNode
	}

const InputPasswordField = (props: Props) => {
	const {
		input,
		size,
		placeholder,
		label,
		required,
		type,
		prefix,
		disabled,
		style,
		customOnBlur,
		meta: { form, error, touched, valid },
		hideHelp,
		maxLength,
		readOnly,
		className,
		tooltip,
		icon,
		hideIcon
	} = props

	const onChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			// NOTE: prevent to have "" empty string as empty value
			const val = e.target.value ? e.target.value : null
			input.onChange(trimStart(val as string))
		},
		[input]
	)

	const onBlur = useCallback(
		async (e: any) => {
			// NOTE: prevent to have "" empty string as empty value
			const val = e.target.value ? e.target.value : null

			// NOTE: wait until redux-form "BLUR" action is finished
			await input.onBlur(val)

			if (customOnBlur) {
				customOnBlur(val)
			}
		},
		[input, customOnBlur]
	)

	const onFocus = useCallback(
		async (e: any) => {
			// NOTE: prevent to have "" empty string as empty value
			const val = e.target.value ? e.target.value : null
			if (input.onFocus) {
				input.onFocus(val)
			}
		},
		[input]
	)

	const renderToggleIcon = (visible: boolean) => {
		if (visible) {
			return icon
		}
		return hideIcon
	}

	return (
		<Item
			label={label}
			required={required}
			style={style}
			className={cx(className, { 'form-item-disabled': disabled, readOnly })}
			help={hideHelp ? undefined : touched && error}
			validateStatus={error && touched ? 'error' : touched && valid ? 'success' : undefined}
			tooltip={tooltip}
		>
			<Input.Password
				{...input}
				id={formFieldID(form, input.name)}
				className={cx('input-password')}
				onChange={onChange}
				onBlur={onBlur}
				size={size || 'middle'}
				onFocus={onFocus}
				value={input.value}
				iconRender={renderToggleIcon}
				placeholder={placeholder}
				type={type || 'text'}
				prefix={prefix}
				disabled={disabled}
				maxLength={maxLength}
			/>
		</Item>
	)
}

export default memo(InputPasswordField)
