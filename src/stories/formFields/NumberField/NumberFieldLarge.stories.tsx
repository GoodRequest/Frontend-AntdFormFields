import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import InputNumberField from '../../../atoms/InputNumberField'
import Brush from '../../../assets/icons/Brush'

const inputDefaultProps = {
	form: undefined,
	error: null,
	onBlur: () => {},
	onChange: () => {}
}

export default {
	title: 'Fields/Number/Large',
	component: InputNumberField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
        className: 'base-input-number',
        placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'large',
        label: 'Label'
	}
}

const Template: ComponentStory<typeof InputNumberField> = (args) => (
	<Form layout='vertical'>
		<InputNumberField {...args} />
	</Form>
)

export const InputNumberLarge = Template.bind({})
export const InputNumberLargeWithPrefix = Template.bind({})
export const InputNumberLargeError = Template.bind({})
export const InputNumberLargeSuccess = Template.bind({})
export const InputNumberLargeDisabled = Template.bind({})

InputNumberLarge.args = {
    required: true
}

InputNumberLargeWithPrefix.args = {
    prefix: <Brush />
}

InputNumberLargeError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputNumberLargeSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputNumberLargeDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
