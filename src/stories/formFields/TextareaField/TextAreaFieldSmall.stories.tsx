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
	title: 'Fields/Textarea/Small',
	component: TextareaField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'small',
        className: 'base-textarea',
        label: 'Label'
	}
}

const Template: ComponentStory<typeof TextareaField> = (args) => (
	<Form layout='vertical'>
		<TextareaField {...args} />
	</Form>
)

export const TextareaSmall = Template.bind({})
export const TextareaSmallError = Template.bind({})
export const TextareaSmallSuccess = Template.bind({})
export const TextareaSmallDisabled = Template.bind({})
export const TextareaSmallFilled = Template.bind({})

TextareaSmall.args = {
    required: true
}

TextareaSmallError.args = {
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

TextareaSmallSuccess.args = {
    meta: {
		valid: true,
		touched: true
	} as any
}

TextareaSmallDisabled.args = {
    disabled: true
}

TextareaSmallFilled.args = {
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}
