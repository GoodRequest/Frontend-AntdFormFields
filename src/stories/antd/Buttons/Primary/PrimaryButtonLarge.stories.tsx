/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Primary/Large',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonPrimaryLarge = Template.bind({})
export const ButtonPrimaryLargeWithIcons = Template.bind({})
export const ButtonPrimaryLargeIconOnly = Template.bind({})
export const ButtonPrimaryLargeLoading = Template.bind({})
export const ButtonPrimaryLargeLoadingIconOnly = Template.bind({})
export const ButtonPrimaryLargeDisabled = Template.bind({})

// arguments
ButtonPrimaryLarge.args = {
	children: <span>Button</span>
}

ButtonPrimaryLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryLargeIconOnly.args = {
	icon: <Plus />
}

ButtonPrimaryLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonPrimaryLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}