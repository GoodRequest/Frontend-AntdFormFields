/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../assets/icons/Brush'
import Plus from '../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Danger',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
		danger: true
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonDangerLarge = Template.bind({})
export const ButtonDangerLargeWithIcons = Template.bind({})
export const ButtonDangerLargeIconOnly = Template.bind({})
export const ButtonDangerLargeLoading = Template.bind({})
export const ButtonDangerLargeDisabled = Template.bind({})
export const ButtonDangerMiddle = Template.bind({})
export const ButtonDangerMiddleWithIcons = Template.bind({})
export const ButtonDangerMiddleIconOnly = Template.bind({})
export const ButtonDangerMiddleLoading = Template.bind({})
export const ButtonDangerMiddleDisabled = Template.bind({})
export const ButtonDangerSmall = Template.bind({})
export const ButtonDangerSmallWithIcons = Template.bind({})
export const ButtonDangerSmallIconOnly = Template.bind({})
export const ButtonDangerSmallLoading = Template.bind({})
export const ButtonDangerSmallDisabled = Template.bind({})

// arguments
ButtonDangerLarge.args = {
	size: 'large',
	children: <span>Button</span>
}

ButtonDangerLargeWithIcons.args = {
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerLargeIconOnly.args = {
	size: 'large',
	icon: <Plus />
}

ButtonDangerLargeLoading.args = {
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonDangerLargeDisabled.args = {
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonDangerMiddle.args = {
	size: 'middle',
	children: <span>Button</span>
}

ButtonDangerMiddleWithIcons.args = {
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerMiddleIconOnly.args = {
	size: 'middle',
	icon: <Plus />
}

ButtonDangerMiddleLoading.args = {
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonDangerMiddleDisabled.args = {
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonDangerSmall.args = {
	size: 'small',
	children: <span>Button</span>
}

ButtonDangerSmallWithIcons.args = {
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerSmallIconOnly.args = {
	size: 'small',
	icon: <Plus />
}

ButtonDangerSmallLoading.args = {
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonDangerSmallDisabled.args = {
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}