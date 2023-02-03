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
		className: 'base-input',
		label: 'Label',
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
    required: true
}

InputSmallWithSuffixPrefix.args = {
    suffix: <Brush />,
    prefix: <Brush />
}

InputSmallError.args = {
    prefix: <Brush />,
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

InputSmallSuccess.args = {
    prefix: <Brush />,
    meta: {
		valid: true,
		touched: true
	} as any
}

InputSmallDisabled.args = {
    suffix: <Brush />,
    prefix: <Brush />,
    disabled: true
}

InputSmallFilled.args = {
    suffix: <Brush />,
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}