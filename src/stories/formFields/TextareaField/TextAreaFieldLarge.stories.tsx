import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import TextareaField from '../../../atoms/TextareaField'

const inputDefaultProps = {
	form: undefined,
	error: null,
    valid: null,
	onBlur: () => {},
	onChange: () => {}
}

export default {
	title: 'Fields/Textarea/Large',
	component: TextareaField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'large'
	}
}

const Template: ComponentStory<typeof TextareaField> = (args) => (
	<Form layout='vertical'>
		<TextareaField {...args} />
	</Form>
)

export const TextareaLarge = Template.bind({})
export const TextareaLargeError = Template.bind({})
export const TextareaLargeSuccess = Template.bind({})
export const TextareaLargeDisabled = Template.bind({})
export const TextareaLargeFilled = Template.bind({})

TextareaLarge.args = {
    className: 'base-textarea',
    label: 'Label',
    required: true
}

TextareaLargeError.args = {
    className: 'base-textarea',
    label: 'Label',
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

TextareaLargeSuccess.args = {
    className: 'base-textarea',
    label: 'Label',
    meta: {
		valid: true,
		touched: true
	} as any
}

TextareaLargeDisabled.args = {
    className: 'base-textarea',
    label: 'Label',
    disabled: true
}

TextareaLargeFilled.args = {
    className: 'base-textarea',
    label: 'Label',
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}
