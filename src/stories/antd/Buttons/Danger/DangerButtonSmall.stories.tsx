/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Danger/Small',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
		danger: true,
		size: 'small'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonDangerSmall = Template.bind({})
export const ButtonDangerSmallWithIcons = Template.bind({})
export const ButtonDangerSmallIconOnly = Template.bind({})
export const ButtonDangerSmallLoading = Template.bind({})
export const ButtonDangerSmallLoadingIconOnly = Template.bind({})
export const ButtonDangerSmallDisabled = Template.bind({})

// arguments
ButtonDangerSmall.args = {
	children: <span>Button</span>
}

ButtonDangerSmallWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerSmallIconOnly.args = {
	icon: <Plus />
}

ButtonDangerSmallLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonDangerSmallLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonDangerSmallDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}