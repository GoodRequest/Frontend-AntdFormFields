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
    title: 'Antd/Menus/Buttons',
    component: Menu,
    decorators: [withDesign],
    args: {
        items: menuItems,
        mode: 'horizontal'
    }
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallButtons = Template.bind({})
export const MenuMediumButtons = Template.bind({})
export const MenuSmallFullWidthButtons = Template.bind({})
export const MenuMediumFullWidthButtons = Template.bind({})

//  arguments
MenuSmallButtons.args = {
    className: 'base-menu small buttons'
}

MenuMediumButtons.args = {
    className: 'base-menu medium buttons'
}

MenuSmallFullWidthButtons.args = {
    disabledOverflow: true,
    className: 'base-menu small buttons full-width'
}

MenuMediumFullWidthButtons.args = {
    disabledOverflow: true,
    className: 'base-menu medium buttons full-width'
}