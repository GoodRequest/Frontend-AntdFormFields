/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Danger/ExtraLarge',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn extra-large',
		type: 'primary',
		danger: true,
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonDangerExtraLarge = Template.bind({})
export const ButtonDangerExtraLargeWithIcons = Template.bind({})
export const ButtonDangerExtraLargeIconOnly = Template.bind({})
export const ButtonDangerExtraLargeIconOnlySquared = Template.bind({})
export const ButtonDangerExtraLargeLoading = Template.bind({})
export const ButtonDangerExtraLargeLoadingIconOnly = Template.bind({})
export const ButtonDangerExtraLargeLoadingIconOnlySquared = Template.bind({})
export const ButtonDangerExtraLargeDisabled = Template.bind({})

// arguments
ButtonDangerExtraLarge.args = {
	children: <span>Button</span>
}

ButtonDangerExtraLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonDangerExtraLargeIconOnly.args = {
	icon: <Plus />
}

ButtonDangerExtraLargeIconOnlySquared.args = {
	icon: <Plus />,
	className: 'base-btn extra-large squared'
}

ButtonDangerExtraLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonDangerExtraLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonDangerExtraLargeLoadingIconOnlySquared.args = {
	loading: true,
	icon: <Plus />,
	className: 'base-btn extra-large squared'
}

ButtonDangerExtraLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}