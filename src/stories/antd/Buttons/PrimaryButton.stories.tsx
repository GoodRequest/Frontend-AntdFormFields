/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../assets/icons/Brush'
import Plus from '../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Primary',
	component: Button,
	decorators: [withDesign],
	args: {}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonPrimaryLarge = Template.bind({})
export const ButtonPrimaryLargeWithIcons = Template.bind({})
export const ButtonPrimaryLargeIconOnly = Template.bind({})
export const ButtonPrimaryLargeLoading = Template.bind({})
export const ButtonPrimaryLargeDisabled = Template.bind({})
export const ButtonPrimaryMiddle = Template.bind({})
export const ButtonPrimaryMiddleWithIcons = Template.bind({})
export const ButtonPrimaryMiddleIconOnly = Template.bind({})
export const ButtonPrimaryMiddleLoading = Template.bind({})
export const ButtonPrimaryMiddleDisabled = Template.bind({})
export const ButtonPrimarySmall = Template.bind({})
export const ButtonPrimarySmallWithIcons = Template.bind({})
export const ButtonPrimarySmallIconOnly = Template.bind({})
export const ButtonPrimarySmallLoading = Template.bind({})
export const ButtonPrimarySmallDisabled = Template.bind({})

// arguments
ButtonPrimaryLarge.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
	children: <span>Button</span>
}

ButtonPrimaryLargeWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryLargeIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
	icon: <Plus />
}

ButtonPrimaryLargeLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryLargeDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonPrimaryMiddle.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	children: <span>Button</span>
}

ButtonPrimaryMiddleWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryMiddleIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	icon: <Plus />
}

ButtonPrimaryMiddleLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryMiddleDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonPrimarySmall.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
	children: <span>Button</span>
}

ButtonPrimarySmallWithIcons.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimarySmallIconOnly.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
	icon: <Plus />
}

ButtonPrimarySmallLoading.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimarySmallDisabled.args = {
	className: 'base-btn',
	type: 'primary',
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}