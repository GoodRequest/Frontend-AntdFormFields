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
	title: 'Fields/Textarea/Middle',
	component: TextareaField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'middle',
		className: 'base-textarea',
		label: 'Label'
	}
}

const Template: ComponentStory<typeof TextareaField> = (args) => (
	<Form layout='vertical'>
		<TextareaField {...args} />
	</Form>
)

export const TextareaMiddle = Template.bind({})
export const TextareaMiddleError = Template.bind({})
export const TextareaMiddleSuccess = Template.bind({})
export const TextareaMiddleDisabled = Template.bind({})
export const TextareaMiddleFilled = Template.bind({})

TextareaMiddle.args = {
    required: true
}

TextareaMiddleError.args = {
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

TextareaMiddleSuccess.args = {
    meta: {
		valid: true,
		touched: true
	} as any
}

TextareaMiddleDisabled.args = {
    disabled: true
}

TextareaMiddleFilled.args = {
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}
