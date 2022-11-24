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
	args: {
		className: 'base-btn',
		type: 'text'
	}
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
	size: 'large',
	children: <span>Button</span>
}

ButtonTextLargeWithIcons.args = {
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextLargeIconOnly.args = {
	size: 'large',
	icon: <Plus />
}

ButtonTextLargeLoading.args = {
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonTextLargeDisabled.args = {
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonTextMiddle.args = {
	size: 'middle',
	children: <span>Button</span>
}

ButtonTextMiddleWithIcons.args = {
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextMiddleIconOnly.args = {
	size: 'middle',
	icon: <Plus />
}

ButtonTextMiddleLoading.args = {
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonTextMiddleDisabled.args = {
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonTextSmall.args = {
	size: 'small',
	children: <span>Button</span>
}

ButtonTextSmallWithIcons.args = {
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextSmallIconOnly.args = {
	size: 'small',
	icon: <Plus />
}

ButtonTextSmallLoading.args = {
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonTextSmallDisabled.args = {
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}