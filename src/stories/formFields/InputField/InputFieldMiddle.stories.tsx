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
	title: 'Fields/Input/Middle',
	component: InputField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		placeholder: 'Placeholder',
		meta: { touched: false },
		size: 'middle'
	}
}

const Template: ComponentStory<typeof InputField> = (args) => (
	<Form layout='vertical'>
		<InputField {...args} />
	</Form>
)

export const InputMiddle = Template.bind({})
export const InputMiddleWithSuffixPrefix = Template.bind({})
export const InputMiddleError = Template.bind({})
export const InputMiddleSuccess = Template.bind({})
export const InputMiddleDisabled = Template.bind({})
export const InputMiddleFilled = Template.bind({})

InputMiddle.args = {
    className: 'base-input',
    label: 'Label',
    required: true
}

InputMiddleWithSuffixPrefix.args = {
    className: 'base-input',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label'
}

InputMiddleError.args = {
    className: 'base-input',
    label: 'Label',
    prefix: <Brush />,
    meta: {
		error: 'Error message',
		touched: true
	} as any
}

InputMiddleSuccess.args = {
    className: 'base-input',
    label: 'Label',
    prefix: <Brush />,
    meta: {
		valid: true,
		touched: true
	} as any
}

InputMiddleDisabled.args = {
    className: 'base-input',
    suffix: <Brush />,
    prefix: <Brush />,
    label: 'Label',
    disabled: true
}

InputMiddleFilled.args = {
    className: 'base-input',
    suffix: <Brush />,
    input: {
		...inputDefaultProps,
		value: 'Filled text'
	} as any
}