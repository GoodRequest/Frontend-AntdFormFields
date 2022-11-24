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
    className: 'base-input',
    label: 'Label',
    required: true
}

InputLargeWithSuffixPrefix.args = {
    className: 'base-input',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label'
}

InputLargeError.args = {
    className: 'base-input',
    label: 'Label',
    prefix: <Brush />,
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

InputLargeSuccess.args = {
    className: 'base-input',
    label: 'Label',
    prefix: <Brush />,
    meta: {
		valid: true,
		touched: true
	} as any
}

InputLargeDisabled.args = {
    className: 'base-input',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label',
    disabled: true
}

InputLargeFilled.args = {
    className: 'base-input',
    suffix: <Brush />,
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}