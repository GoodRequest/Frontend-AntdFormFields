import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import InputPasswordField from '../../../atoms/InputPasswordField'
import Brush from '../../../assets/icons/Brush'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

const inputDefaultProps = {
    form: undefined,
	error: null,
    valid: null,
	onBlur: () => {},
	onChange: () => {}
}

export default {
	title: 'Fields/Password/Large',
	component: InputPasswordField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		meta: { touched: false },
        className: 'base-input',
        icon: <EyeInvisibleOutlined />,
        hideIcon: <EyeOutlined />,
		size: 'large'
	}
}

const Template: ComponentStory<typeof InputPasswordField> = (args) => (
	<Form layout='vertical'>
		<InputPasswordField {...args} />
	</Form>
)

export const InputPasswordLarge = Template.bind({})
export const InputPasswordLargeWithPrefix = Template.bind({})
export const InputPasswordLargeError = Template.bind({})
export const InputPasswordLargeSuccess = Template.bind({})
export const InputPasswordLargeDisabled = Template.bind({})

InputPasswordLarge.args = {
    label: 'Label',
    required: true
}

InputPasswordLargeWithPrefix.args = {
    prefix: <Brush />
}

InputPasswordLargeError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputPasswordLargeSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputPasswordLargeDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
