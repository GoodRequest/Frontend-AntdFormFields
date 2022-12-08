/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Danger/Large',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
		danger: true,
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonDangerLarge = Template.bind({})
export const ButtonDangerLargeWithIcons = Template.bind({})
export const ButtonDangerLargeIconOnly = Template.bind({})
export const ButtonDangerLargeIconOnlySquared = Template.bind({})
export const ButtonDangerLargeLoading = Template.bind({})
export const ButtonDangerLargeLoadingIconOnly = Template.bind({})
export const ButtonDangerLargeLoadingIconOnlySquared = Template.bind({})
export const ButtonDangerLargeDisabled = Template.bind({})

// arguments
ButtonDangerLarge.args = {
	children: <span>Button</span>
}

ButtonDangerLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerLargeIconOnly.args = {
	icon: <Plus />
}

ButtonDangerLargeIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonDangerLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonDangerLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonDangerLargeLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonDangerLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}