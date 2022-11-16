/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
// import { Button } from 'antd'
import Button from '../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import { SearchOutlined } from '@ant-design/icons'
// import '!style-loader!css-loader!sass-loader!../../../src/styles/_global.sass'

export default {
	title: 'Antd/Button',
	component: Button,
	decorators: [withDesign],
	args: {}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Button</Button>

// stories
export const ButtonPrimary = Template.bind({})
export const ButtonSecondary = Template.bind({})
export const ButtonPrimaryDisabled = Template.bind({})
export const ButtonSecondaryDisabled = Template.bind({})
export const ButtonDanger = Template.bind({})
export const ButtonPrimaryLoading = Template.bind({})
export const ButtonPrimaryIcon = Template.bind({})
// export const ButtonPrimaryIconOnly = TemplateEmpty.bind({})

// arguments
ButtonPrimary.args = {
	className: 'base-btn',
	type: 'primary'
}

ButtonSecondary.args = {
	className: 'base-btn',
	type: 'default'
}

ButtonPrimaryDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	disabled: true
}

ButtonSecondaryDisabled.args = {
	className: 'base-btn',
	type: 'default',
	disabled: true
}

ButtonDanger.args = {
	className: 'base-btn',
	type: 'default',
	danger: true
}

ButtonPrimaryLoading.args = {
	className: 'base-btn',
	type: 'primary',
	loading: true
}

ButtonPrimaryIcon.args = {
	className: 'base-btn',
	type: 'primary',
	icon: <SearchOutlined />
}

// ButtonPrimaryIconOnly.args = {
// 	type: 'primary',
// 	icon: <SearchIcon />
// }

// parameters
ButtonPrimary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
	}
}

ButtonSecondary.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A2354'
	}
}

ButtonPrimaryDisabled.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
	}
}
ButtonSecondaryDisabled.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A2354'
	}
}

ButtonDanger.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
	}
}

ButtonPrimaryLoading.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
	}
}

ButtonPrimaryIcon.parameters = {
	design: {
		type: 'figma',
		url: 'https://www.figma.com/file/HL0lsNm8yCHGGCkL1c3euX/Notino-B2B-Desktop-app?node-id=90%3A1868'
	}
}
