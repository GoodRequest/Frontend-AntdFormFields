/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Secondary/ExtraLarge',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn extra-large',
		type: 'default',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonSecondaryExtraLarge = Template.bind({})
export const ButtonSecondaryExtraLargeWithIcons = Template.bind({})
export const ButtonSecondaryExtraLargeIconOnly = Template.bind({})
export const ButtonSecondaryExtraLargeIconOnlySquared = Template.bind({})
export const ButtonSecondaryExtraLargeLoading = Template.bind({})
export const ButtonSecondaryExtraLargeLoadingIconOnly = Template.bind({})
export const ButtonSecondaryExtraLargeLoadingIconOnlySquared = Template.bind({})
export const ButtonSecondaryExtraLargeDisabled = Template.bind({})

// arguments
ButtonSecondaryExtraLarge.args = {
	children: <span>Button</span>
}

ButtonSecondaryExtraLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonSecondaryExtraLargeIconOnly.args = {
	icon: <Plus />
}

ButtonSecondaryExtraLargeIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn extra-large squared'
}

ButtonSecondaryExtraLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonSecondaryExtraLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonSecondaryExtraLargeLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn extra-large squared'
}

ButtonSecondaryExtraLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}