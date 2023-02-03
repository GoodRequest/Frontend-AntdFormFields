/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Primary/Small',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn',
		type: 'primary',
        size: 'small'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonPrimarySmall = Template.bind({})
export const ButtonPrimarySmallWithIcons = Template.bind({})
export const ButtonPrimarySmallIconOnly = Template.bind({})
export const ButtonPrimarySmallIconOnlySquared = Template.bind({})
export const ButtonPrimarySmallLoading = Template.bind({})
export const ButtonPrimarySmallLoadingIconOnly = Template.bind({})
export const ButtonPrimarySmallLoadingIconOnlySquared = Template.bind({})
export const ButtonPrimarySmallDisabled = Template.bind({})

// arguments
ButtonPrimarySmall.args = {
	children: <span>Button</span>
}

ButtonPrimarySmallWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimarySmallIconOnly.args = {
	icon: <Plus />
}

ButtonPrimarySmallIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn squared',
}

ButtonPrimarySmallLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonPrimarySmallLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonPrimarySmallLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn squared',
}

ButtonPrimarySmallDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}