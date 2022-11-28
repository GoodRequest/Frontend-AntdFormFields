/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Button from '../../../../atoms/Button'
import { ComponentStory } from '@storybook/react'
import Brush from '../../../../assets/icons/Brush'
import Plus from '../../../../assets/icons/Plus'

export default {
	title: 'Antd/Buttons/Text/ExtraLarge',
	component: Button,
	decorators: [withDesign],
	args: {
		className: 'base-btn extra-large',
		type: 'text',
        size: 'large'
	}
}

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}></Button>

//stories
export const ButtonTextExtraLarge = Template.bind({})
export const ButtonTextExtraLargeWithIcons = Template.bind({})
export const ButtonTextExtraLargeIconOnly = Template.bind({})
export const ButtonTextExtraLargeLoading = Template.bind({})
export const ButtonTextExtraLargeLoadingIconOnly = Template.bind({})
export const ButtonTextExtraLargeDisabled = Template.bind({})

// arguments
ButtonTextExtraLarge.args = {
	children: <span>Button</span>
}

ButtonTextExtraLargeWithIcons.args = {
	children: [<span>Button</span>, <Brush />],
	icon: <Brush />
}

ButtonTextExtraLargeIconOnly.args = {
	icon: <Plus />
}

ButtonTextExtraLargeLoading.args = {
	loading: true,
	children: <span>Button</span>
}

ButtonTextExtraLargeLoadingIconOnly.args = {
	loading: true,
	icon: <Plus />
}

ButtonTextExtraLargeDisabled.args = {
	disabled: true,
	children: <span>Button</span>
}