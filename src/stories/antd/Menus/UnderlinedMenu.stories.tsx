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
    title: 'Antd/Menus/Underlined',
    component: Menu,
    decorators: [withDesign],
    args: {
        items: menuItems,
        mode: 'horizontal'
    }
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallUnderlined = Template.bind({})
export const MenuMediumUnderlined = Template.bind({})
export const MenuSmallFullWidthUnderlined = Template.bind({})
export const MenuMediumFullWidthUnderlined = Template.bind({})

//  arguments
MenuSmallUnderlined.args = {
    className: 'base-menu small underlined'
}

MenuMediumUnderlined.args = {
    className: 'base-menu medium underlined'
}

MenuSmallFullWidthUnderlined.args = {
    disabledOverflow: true,
    className: 'base-menu small underlined full-width'
}

MenuMediumFullWidthUnderlined.args = {
    disabledOverflow: true,
    className: 'base-menu medium underlined full-width'
}