import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menus/UnderlinedFilled',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallUnderlinedFilled = Template.bind({})
export const MenuMediumUnderlinedFilled = Template.bind({})
export const MenuSmallFullWidthUnderlinedFilled = Template.bind({})
export const MenuMediumFullWidthUnderlinedFilled = Template.bind({})

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

//  arguments
MenuSmallUnderlinedFilled.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu small underlined-filled'
}

MenuMediumUnderlinedFilled.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu medium underlined-filled'
}

MenuSmallFullWidthUnderlinedFilled.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu small underlined-filled full-width'
}

MenuMediumFullWidthUnderlinedFilled.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu medium underlined-filled full-width'
}