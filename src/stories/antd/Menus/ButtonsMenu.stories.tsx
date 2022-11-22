import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menus/Buttons',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallButtons = Template.bind({})
export const MenuMediumButtons = Template.bind({})
export const MenuSmallFullWidthButtons = Template.bind({})
export const MenuMediumFullWidthButtons = Template.bind({})

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
MenuSmallButtons.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu small buttons'
}

MenuMediumButtons.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu medium buttons'
}

MenuSmallFullWidthButtons.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu small buttons full-width'
}

MenuMediumFullWidthButtons.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu medium buttons full-width'
}