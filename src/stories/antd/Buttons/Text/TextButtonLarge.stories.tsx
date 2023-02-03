/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Text/Large',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'text',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonTextLarge = Template.bind({})
export const ButtonTextLargeWithIcons = Template.bind({})
export const ButtonTextLargeIconOnly = Template.bind({})
export const ButtonTextLargeIconOnlySquared = Template.bind({})
export const ButtonTextLargeLoading = Template.bind({})
export const ButtonTextLargeLoadingIconOnly = Template.bind({})
export const ButtonTextLargeLoadingIconOnlySquared = Template.bind({})
export const ButtonTextLargeDisabled = Template.bind({})

// arguments
ButtonTextLarge.args = {
	children: <span>Button</span>
}

ButtonTextLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextLargeIconOnly.args = {
	icon: <Plus />
}

ButtonTextLargeIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonTextLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonTextLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonTextLargeLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonTextLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}