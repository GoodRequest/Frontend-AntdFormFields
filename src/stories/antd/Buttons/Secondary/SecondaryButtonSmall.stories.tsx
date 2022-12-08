/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Secondary/Small',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'default',
        size: 'small'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonSecondarySmall = Template.bind({})
export const ButtonSecondarySmallWithIcons = Template.bind({})
export const ButtonSecondarySmallIconOnly = Template.bind({})
export const ButtonSecondarySmallIconOnlySquared = Template.bind({})
export const ButtonSecondarySmallLoading = Template.bind({})
export const ButtonSecondarySmallLoadingIconOnly = Template.bind({})
export const ButtonSecondarySmallLoadingIconOnlySquared = Template.bind({})
export const ButtonSecondarySmallDisabled = Template.bind({})

// arguments
ButtonSecondarySmall.args = {
	children: <span>Button</span>
}

ButtonSecondarySmallWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondarySmallIconOnly.args = {
	icon: <Plus />
}

ButtonSecondarySmallIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonSecondarySmallLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonSecondarySmallLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonSecondarySmallLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared'
}

ButtonSecondarySmallDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}