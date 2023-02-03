import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

const menuItems = [
    {
        key: 'Files',
        label: 'Files'
    },
    {
        key: 'Activities',
        label: 'Activities'
    },
    {
        key: 'Teammates',
        label: 'Teammates'
    }
]

export default {
    title: 'Antd/Menus/UnderlinedFilled',
    component: Menu,
    decorators: [withDesign],
    args: {
        items: menuItems,
        mode: 'horizontal'
    }
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallUnderlinedFilled = Template.bind({})
export const MenuMediumUnderlinedFilled = Template.bind({})
export const MenuSmallFullWidthUnderlinedFilled = Template.bind({})
export const MenuMediumFullWidthUnderlinedFilled = Template.bind({})

//  arguments
MenuSmallUnderlinedFilled.args = {
    className: 'base-menu small underlined-filled'
}

MenuMediumUnderlinedFilled.args = {
    className: 'base-menu medium underlined-filled'
}

MenuSmallFullWidthUnderlinedFilled.args = {
    disabledOverflow: true,
    className: 'base-menu small underlined-filled full-width'
}

MenuMediumFullWidthUnderlinedFilled.args = {
    disabledOverflow: true,
    className: 'base-menu medium underlined-filled full-width'
}