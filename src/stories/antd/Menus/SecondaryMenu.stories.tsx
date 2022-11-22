import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menus/Secondary',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallSecondary = Template.bind({})
export const MenuMediumSecondary = Template.bind({})
export const MenuSmallFullWidthSecondary = Template.bind({})
export const MenuMediumFullWidthSecondary = Template.bind({})

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
MenuSmallSecondary.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu small secondary'
}

MenuMediumSecondary.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu medium secondary'
}

MenuSmallFullWidthSecondary.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu small secondary full-width'
}

MenuMediumFullWidthSecondary.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu medium secondary full-width'
}