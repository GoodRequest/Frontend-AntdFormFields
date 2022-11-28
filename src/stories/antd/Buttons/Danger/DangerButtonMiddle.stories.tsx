/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Danger/Middle',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
		danger: true,
        size: 'middle'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonDangerMiddle = Template.bind({})
export const ButtonDangerMiddleWithIcons = Template.bind({})
export const ButtonDangerMiddleIconOnly = Template.bind({})
export const ButtonDangerMiddleLoading = Template.bind({})
export const ButtonDangerMiddleLoadingIconOnly = Template.bind({})
export const ButtonDangerMiddleDisabled = Template.bind({})

// arguments
ButtonDangerMiddle.args = {
	children: <span>Button</span>
}

ButtonDangerMiddleWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerMiddleIconOnly.args = {
	icon: <Plus />
}

ButtonDangerMiddleLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonDangerMiddleLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonDangerMiddleDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}