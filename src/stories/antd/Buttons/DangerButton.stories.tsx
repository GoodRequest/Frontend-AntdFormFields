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
	args: {}
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
	className: 'base-btn',
	type: 'primary',
	size: 'large',
    danger: true,
	children: <span>Button</span>
}

ButtonDangerLargeWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
    danger: true,
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerLargeIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
    danger: true,
	icon: <Plus />
}

ButtonDangerLargeLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
    danger: true,
	loading: true,
	children: <span>Button</span>
}

ButtonDangerLargeDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
    danger: true,
	disabled: true,
	children: <span>Button</span>
}

ButtonDangerMiddle.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
    danger: true,
	children: <span>Button</span>
}

ButtonDangerMiddleWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
    danger: true,
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerMiddleIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
    danger: true,
	icon: <Plus />
}

ButtonDangerMiddleLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	loading: true,
    danger: true,
	children: <span>Button</span>
}

ButtonDangerMiddleDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	disabled: true,
    danger: true,
	children: <span>Button</span>
}

ButtonDangerSmall.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
    danger: true,
	children: <span>Button</span>
}

ButtonDangerSmallWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
    danger: true,
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerSmallIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
    danger: true,
	icon: <Plus />
}

ButtonDangerSmallLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
    danger: true,
	loading: true,
	children: <span>Button</span>
}

ButtonDangerSmallDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
    danger: true,
	disabled: true,
	children: <span>Button</span>
}