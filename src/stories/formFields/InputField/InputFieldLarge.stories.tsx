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
	title: 'Fields/Input/Large',
	component: InputField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		className: 'base-input',
		size: 'large'
	}
}

const Template: ComponentStory<typeof InputField> = (args) => (
	<Form layout='vertical'>
		<InputField {...args} />
	</Form>
)

export const InputLarge = Template.bind({})
export const InputLargeWithSuffixPrefix = Template.bind({})
export const InputLargeError = Template.bind({})
export const InputLargeSuccess = Template.bind({})
export const InputLargeDisabled = Template.bind({})
export const InputLargeFilled = Template.bind({})

InputLarge.args = {
    label: 'Label',
    required: true
}

InputLargeWithSuffixPrefix.args = {
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label'
}

InputLargeError.args = {
    label: 'Label',
    prefix: <Brush />,
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

InputLargeSuccess.args = {
    label: 'Label',
    prefix: <Brush />,
    meta: {
		valid: true,
		touched: true
	} as any
}

InputLargeDisabled.args = {
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label',
    disabled: true
}

InputLargeFilled.args = {
    suffix: <Brush />,
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}