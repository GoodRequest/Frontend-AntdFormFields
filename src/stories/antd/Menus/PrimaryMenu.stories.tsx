import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menus/Primary',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallPrimary = Template.bind({})
export const MenuMediumPrimary = Template.bind({})
export const MenuSmallFullWidthPrimary = Template.bind({})
export const MenuMediumFullWidthPrimary = Template.bind({})

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
//sm -> text-sm-semibold
//md -> text-md-semibold

//  arguments
MenuSmallPrimary.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu small primary'
}

MenuMediumPrimary.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu medium primary'
}

MenuSmallFullWidthPrimary.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu small primary full-width'
}

MenuMediumFullWidthPrimary.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu medium primary full-width'
}