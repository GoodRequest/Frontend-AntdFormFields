/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Text/Middle',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'text',
        size: 'middle'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonTextMiddle = Template.bind({})
export const ButtonTextMiddleWithIcons = Template.bind({})
export const ButtonTextMiddleIconOnly = Template.bind({})
export const ButtonTextMiddleLoading = Template.bind({})
export const ButtonTextMiddleLoadingIconOnly = Template.bind({})
export const ButtonTextMiddleDisabled = Template.bind({})

// arguments
ButtonTextMiddle.args = {
	children: <span>Button</span>
}

ButtonTextMiddleWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextMiddleIconOnly.args = {
	icon: <Plus />
}

ButtonTextMiddleLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonTextMiddleLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonTextMiddleDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}