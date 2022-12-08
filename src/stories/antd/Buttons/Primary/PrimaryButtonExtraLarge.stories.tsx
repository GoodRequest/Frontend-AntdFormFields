/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Primary/ExtraLarge',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn extra-large',
		type: 'primary',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonPrimaryExtraLarge = Template.bind({})
export const ButtonPrimaryExtraLargeWithIcons = Template.bind({})
export const ButtonPrimaryExtraLargeIconOnly = Template.bind({})
export const ButtonPrimaryExtraLargeIconOnlySquared = Template.bind({})
export const ButtonPrimaryExtraLargeLoading = Template.bind({})
export const ButtonPrimaryExtraLargeLoadingIconOnly = Template.bind({})
export const ButtonPrimaryExtraLargeLoadingIconOnlySquared = Template.bind({})
export const ButtonPrimaryExtraLargeDisabled = Template.bind({})

// arguments
ButtonPrimaryExtraLarge.args = {
	children: <span>Button</span>
}

ButtonPrimaryExtraLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonPrimaryExtraLargeIconOnly.args = {
	icon: <Plus />
}

ButtonPrimaryExtraLargeIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn extra-large squared'
}

ButtonPrimaryExtraLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonPrimaryExtraLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonPrimaryExtraLargeLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn extra-large'
}

ButtonPrimaryExtraLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}