/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Text/Small',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'text',
        size: 'small'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonTextSmall = Template.bind({})
export const ButtonTextSmallWithIcons = Template.bind({})
export const ButtonTextSmallIconOnly = Template.bind({})
export const ButtonTextSmallIconOnlySquared = Template.bind({})
export const ButtonTextSmallLoading = Template.bind({})
export const ButtonTextSmallLoadingIconOnly = Template.bind({})
export const ButtonTextSmallLoadingIconOnlySquared = Template.bind({})
export const ButtonTextSmallDisabled = Template.bind({})

// arguments
ButtonTextSmall.args = {
	children: <span>Button</span>
}

ButtonTextSmallWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextSmallIconOnly.args = {
	icon: <Plus />
}

ButtonTextSmallIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonTextSmallLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonTextSmallLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonTextSmallLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonTextSmallDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}