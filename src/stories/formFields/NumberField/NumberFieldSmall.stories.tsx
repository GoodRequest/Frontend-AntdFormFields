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
	title: 'Fields/Number/Small',
	component: InputNumberField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
        className: 'base-input-number',
        placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'small',
        label: 'Label'
	}
}

const Template: ComponentStory<typeof InputNumberField> = (args) => (
	<Form layout='vertical'>
		<InputNumberField {...args} />
	</Form>
)

export const InputNumberSmall = Template.bind({})
export const InputNumberSmallWithPrefix = Template.bind({})
export const InputNumberSmallError = Template.bind({})
export const InputNumberSmallSuccess = Template.bind({})
export const InputNumberSmallDisabled = Template.bind({})

InputNumberSmall.args = {
    required: true
}

InputNumberSmallWithPrefix.args = {
    prefix: <Brush />
}

InputNumberSmallError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputNumberSmallSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputNumberSmallDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
