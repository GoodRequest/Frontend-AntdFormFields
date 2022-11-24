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
	title: 'Fields/Number/Middle',
	component: InputNumberField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
        className: 'base-input-number',
        placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'middle',
        label: 'Label'
	}
}

const Template: ComponentStory<typeof InputNumberField> = (args) => (
	<Form layout='vertical'>
		<InputNumberField {...args} />
	</Form>
)

export const InputNumberMiddle = Template.bind({})
export const InputNumberMiddleWithPrefix = Template.bind({})
export const InputNumberMiddleError = Template.bind({})
export const InputNumberMiddleSuccess = Template.bind({})
export const InputNumberMiddleDisabled = Template.bind({})

InputNumberMiddle.args = {
    required: true
}

InputNumberMiddleWithPrefix.args = {
    prefix: <Brush />
}

InputNumberMiddleError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputNumberMiddleSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputNumberMiddleDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
