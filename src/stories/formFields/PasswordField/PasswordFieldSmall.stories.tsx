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
	title: 'Fields/Password/Small',
	component: InputPasswordField,
	decorators: [withDesign],
	args: {
		input: inputDefaultProps,
		meta: { touched: false },
        className: 'base-input',
        icon: <EyeInvisibleOutlined />,
        hideIcon: <EyeOutlined />,
        label: 'Label',
		size: 'small'
	}
}

const Template: ComponentStory<typeof InputPasswordField> = (args) => (
	<Form layout='vertical'>
		<InputPasswordField {...args} />
	</Form>
)

export const InputPasswordSmall = Template.bind({})
export const InputPasswordSmallWithPrefix = Template.bind({})
export const InputPasswordSmallError = Template.bind({})
export const InputPasswordSmallSuccess = Template.bind({})
export const InputPasswordSmallDisabled = Template.bind({})

InputPasswordSmall.args = {
    required: true
}

InputPasswordSmallWithPrefix.args = {
    prefix: <Brush />
}

InputPasswordSmallError.args = {
    prefix: <Brush />,
    meta: {
        error: 'Error message',
        touched: true
    }
}

InputPasswordSmallSuccess.args = {
    prefix: <Brush />,
    meta: {
        valid: true,
        touched: true
    }
}

InputPasswordSmallDisabled.args = {
    prefix: <Brush />,
    disabled: true
}
