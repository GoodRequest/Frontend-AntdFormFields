/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../assets/icons/Brush'
import Plus from '../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Text',
	component: Button,
	decorators: [withDesign],
	args: {}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonTextLarge = Template.bind({})
export const ButtonTextLargeWithIcons = Template.bind({})
export const ButtonTextLargeIconOnly = Template.bind({})
export const ButtonTextLargeLoading = Template.bind({})
export const ButtonTextLargeDisabled = Template.bind({})
export const ButtonTextMiddle = Template.bind({})
export const ButtonTextMiddleWithIcons = Template.bind({})
export const ButtonTextMiddleIconOnly = Template.bind({})
export const ButtonTextMiddleLoading = Template.bind({})
export const ButtonTextMiddleDisabled = Template.bind({})
export const ButtonTextSmall = Template.bind({})
export const ButtonTextSmallWithIcons = Template.bind({})
export const ButtonTextSmallIconOnly = Template.bind({})
export const ButtonTextSmallLoading = Template.bind({})
export const ButtonTextSmallDisabled = Template.bind({})

// arguments
ButtonTextLarge.args = {
	className: 'base-btn',
	type: 'text',
	size: 'large',
	children: <span>Button</span>
}

ButtonTextLargeWithIcons.args = {
	className: 'base-btn',
	type: 'text',
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextLargeIconOnly.args = {
	className: 'base-btn',
	type: 'text',
	size: 'large',
	icon: <Plus />
}

ButtonTextLargeLoading.args = {
	className: 'base-btn',
	type: 'text',
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonTextLargeDisabled.args = {
	className: 'base-btn',
	type: 'text',
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonTextMiddle.args = {
	className: 'base-btn',
	type: 'text',
	size: 'middle',
	children: <span>Button</span>
}

ButtonTextMiddleWithIcons.args = {
	className: 'base-btn',
	type: 'text',
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextMiddleIconOnly.args = {
	className: 'base-btn',
	type: 'text',
	size: 'middle',
	icon: <Plus />
}

ButtonTextMiddleLoading.args = {
	className: 'base-btn',
	type: 'text',
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonTextMiddleDisabled.args = {
	className: 'base-btn',
	type: 'text',
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonTextSmall.args = {
	className: 'base-btn',
	type: 'text',
	size: 'small',
	children: <span>Button</span>
}

ButtonTextSmallWithIcons.args = {
	className: 'base-btn',
	type: 'text',
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextSmallIconOnly.args = {
	className: 'base-btn',
	type: 'text',
	size: 'small',
	icon: <Plus />
}

ButtonTextSmallLoading.args = {
	className: 'base-btn',
	type: 'text',
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonTextSmallDisabled.args = {
	className: 'base-btn',
	type: 'text',
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}