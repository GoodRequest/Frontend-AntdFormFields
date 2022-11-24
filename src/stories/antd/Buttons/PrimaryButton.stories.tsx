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
	args: {
		className: 'base-btn',
		type: 'primary'
	}
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
	size: 'large',
	children: <span>Button</span>
}

ButtonPrimaryLargeWithIcons.args = {
	size: 'large',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryLargeIconOnly.args = {
	size: 'large',
	icon: <Plus />
}

ButtonPrimaryLargeLoading.args = {
	size: 'large',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryLargeDisabled.args = {
	size: 'large',
	disabled: true,
	children: <span>Button</span>
}

ButtonPrimaryMiddle.args = {
	size: 'middle',
	children: <span>Button</span>
}

ButtonPrimaryMiddleWithIcons.args = {
	size: 'middle',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryMiddleIconOnly.args = {
	size: 'middle',
	icon: <Plus />
}

ButtonPrimaryMiddleLoading.args = {
	size: 'middle',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryMiddleDisabled.args = {
	size: 'middle',
	disabled: true,
	children: <span>Button</span>
}

ButtonPrimarySmall.args = {
	size: 'small',
	children: <span>Button</span>
}

ButtonPrimarySmallWithIcons.args = {
	size: 'small',
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimarySmallIconOnly.args = {
	size: 'small',
	icon: <Plus />
}

ButtonPrimarySmallLoading.args = {
	size: 'small',
	loading: true,
	children: <span>Button</span>
}

ButtonPrimarySmallDisabled.args = {
	size: 'small',
	disabled: true,
	children: <span>Button</span>
}