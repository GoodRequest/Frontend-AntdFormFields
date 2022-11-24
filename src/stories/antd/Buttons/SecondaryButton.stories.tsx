/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../assets/icons/Brush'
import Plus from '../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Secondary',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'default'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonSecondaryLarge = Template.bind({})
export const ButtonSecondaryLargeWithIcons = Template.bind({})
export const ButtonSecondaryLargeIconOnly = Template.bind({})
export const ButtonSecondaryLargeLoading = Template.bind({})
export const ButtonSecondaryLargeDisabled = Template.bind({})
export const ButtonSecondaryMiddle = Template.bind({})
export const ButtonSecondaryMiddleWithIcons = Template.bind({})
export const ButtonSecondaryMiddleIconOnly = Template.bind({})
export const ButtonSecondaryMiddleLoading = Template.bind({})
export const ButtonSecondaryMiddleDisabled = Template.bind({})
export const ButtonSecondarySmall = Template.bind({})
export const ButtonSecondarySmallWithIcons = Template.bind({})
export const ButtonSecondarySmallIconOnly = Template.bind({})
export const ButtonSecondarySmallLoading = Template.bind({})
export const ButtonSecondarySmallDisabled = Template.bind({})

// arguments
ButtonSecondaryLarge.args = {
	size: 'large',
	children: <span>Button</span>
}

ButtonSecondaryLargeWithIcons.args = {
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondaryLargeIconOnly.args = {
	size: 'large',
	icon: <Plus />
}

ButtonSecondaryLargeLoading.args = {
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonSecondaryLargeDisabled.args = {
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonSecondaryMiddle.args = {
	size: 'middle',
	children: <span>Button</span>
}

ButtonSecondaryMiddleWithIcons.args = {
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondaryMiddleIconOnly.args = {
	size: 'middle',
	icon: <Plus />
}

ButtonSecondaryMiddleLoading.args = {
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonSecondaryMiddleDisabled.args = {
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonSecondarySmall.args = {
	size: 'small',
	children: <span>Button</span>
}

ButtonSecondarySmallWithIcons.args = {
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondarySmallIconOnly.args = {
	size: 'small',
	icon: <Plus />
}

ButtonSecondarySmallLoading.args = {
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonSecondarySmallDisabled.args = {
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}