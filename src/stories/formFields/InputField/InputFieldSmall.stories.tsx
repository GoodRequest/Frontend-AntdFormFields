import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import InputField from '../../../atoms/InputField'
import Brush from '../../../assets/icons/Brush'

const inputDefaultProps = {
	form: undefined,
	error: null,
    valid: null,
	onBlur: () => {},
	onChange: () => {}
}

export default {
	title: 'Fields/Input/Small',
	component: InputField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'small'
	}
}

const Template: ComponentStory<typeof InputField> = (args) => (
	<Form layout='vertical'>
		<InputField {...args} />
	</Form>
)

export const InputSmall = Template.bind({})
export const InputSmallWithSuffixPrefix = Template.bind({})
export const InputSmallError = Template.bind({})
export const InputSmallSuccess = Template.bind({})
export const InputSmallDisabled = Template.bind({})
export const InputSmallFilled = Template.bind({})

InputSmall.args = {
    className: 'base-input',
    label: 'Label',
    size: 'small',
    required: true
}

InputSmallWithSuffixPrefix.args = {
    className: 'base-input',
    size: 'niddle',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label'
}

InputSmallError.args = {
    className: 'base-input',
    label: 'Label',
    size: 'small',
    prefix: <Brush />,
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

InputSmallSuccess.args = {
    className: 'base-input',
    label: 'Label',
    size: 'small',
    prefix: <Brush />,
    meta: {
		valid: 'Success message',
		touched: true
	} as any
}

InputSmallDisabled.args = {
    className: 'base-input',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label',
    size: 'small',
    disabled: true
}

InputSmallFilled.args = {
    className: 'base-input',
    suffix: <Brush />,
    size: 'small',
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}