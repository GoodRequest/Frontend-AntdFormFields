/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Primary/Middle',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
        size: 'middle'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonPrimaryMiddle = Template.bind({})
export const ButtonPrimaryMiddleWithIcons = Template.bind({})
export const ButtonPrimaryMiddleIconOnly = Template.bind({})
export const ButtonPrimaryMiddleIconOnlySquared = Template.bind({})
export const ButtonPrimaryMiddleLoading = Template.bind({})
export const ButtonPrimaryMiddleLoadingIconOnly = Template.bind({})
export const ButtonPrimaryMiddleLoadingIconOnlySquared = Template.bind({})
export const ButtonPrimaryMiddleDisabled = Template.bind({})

// arguments
ButtonPrimaryMiddle.args = {
	children: <span>Button</span>
}

ButtonPrimaryMiddleWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryMiddleIconOnly.args = {
	icon: <Plus />
}

ButtonPrimaryMiddleIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonPrimaryMiddleLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryMiddleLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonPrimaryMiddleLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonPrimaryMiddleDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}
