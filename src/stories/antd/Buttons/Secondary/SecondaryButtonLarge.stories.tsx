/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Secondary/Large',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'default',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonSecondaryLarge = Template.bind({})
export const ButtonSecondaryLargeWithIcons = Template.bind({})
export const ButtonSecondaryLargeIconOnly = Template.bind({})
export const ButtonSecondaryLargeLoading = Template.bind({})
export const ButtonSecondaryLargeLoadingIconOnly = Template.bind({})
export const ButtonSecondaryLargeDisabled = Template.bind({})

// arguments
ButtonSecondaryLarge.args = {
	children: <span>Button</span>
}

ButtonSecondaryLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondaryLargeIconOnly.args = {
	icon: <Plus />
}

ButtonSecondaryLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonSecondaryLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonSecondaryLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}