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
	title: 'Fields/Password/Middle',
	component: InputPasswordField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		meta: { touched: false },
        className: 'base-input',
        icon: <EyeInvisibleOutlined />,
        hideIcon: <EyeOutlined />,
		size: 'middle'
	}
}

const Template: ComponentStory<typeof InputPasswordField> = (args) => (
	<Form layout='vertical'>
		<InputPasswordField {...args} />
	</Form>
)

export const InputPasswordMiddle = Template.bind({})
export const InputPasswordMiddleWithPrefix = Template.bind({})
export const InputPasswordMiddleError = Template.bind({})
export const InputPasswordMiddleSuccess = Template.bind({})
export const InputPasswordMiddleDisabled = Template.bind({})

InputPasswordMiddle.args = {
    label: 'Label',
    required: true
}

InputPasswordMiddleWithPrefix.args = {
    prefix: <Brush />
}

InputPasswordMiddleError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputPasswordMiddleSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputPasswordMiddleDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
