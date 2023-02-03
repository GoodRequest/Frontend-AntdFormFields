/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Secondary/Middle',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'default',
        size: 'middle'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonSecondaryMiddle = Template.bind({})
export const ButtonSecondaryMiddleWithIcons = Template.bind({})
export const ButtonSecondaryMiddleIconOnly = Template.bind({})
export const ButtonSecondaryMiddleIconOnlySquared = Template.bind({})
export const ButtonSecondaryMiddleLoading = Template.bind({})
export const ButtonSecondaryMiddleLoadingIconOnly = Template.bind({})
export const ButtonSecondaryMiddleLoadingIconOnlySquared = Template.bind({})
export const ButtonSecondaryMiddleDisabled = Template.bind({})

// arguments
ButtonSecondaryMiddle.args = {
	children: <span>Button</span>
}

ButtonSecondaryMiddleWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondaryMiddleIconOnly.args = {
	icon: <Plus />
}

ButtonSecondaryMiddleIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonSecondaryMiddleLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonSecondaryMiddleLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonSecondaryMiddleLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonSecondaryMiddleDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}