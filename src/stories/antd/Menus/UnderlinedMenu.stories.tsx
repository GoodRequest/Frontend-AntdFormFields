import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menus/Underlined',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallUnderlined = Template.bind({})
export const MenuMediumUnderlined = Template.bind({})
export const MenuSmallFullWidthUnderlined = Template.bind({})
export const MenuMediumFullWidthUnderlined = Template.bind({})

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
MenuSmallUnderlined.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu small underlined'
}

MenuMediumUnderlined.args = {
    items: menuItems,
    mode: 'horizontal',
    className: 'base-menu medium underlined'
}

MenuSmallFullWidthUnderlined.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu small underlined full-width'
}

MenuMediumFullWidthUnderlined.args = {
    items: menuItems,
    mode: 'horizontal',
    disabledOverflow: true,
    className: 'base-menu medium underlined full-width'
}