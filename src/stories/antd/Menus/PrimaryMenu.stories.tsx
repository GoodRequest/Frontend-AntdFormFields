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
    title: 'Antd/Menus/Primary',
    component: Menu,
    decorators: [withDesign],
    args: {
        items: menuItems,
        mode: 'horizontal'
    }
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallPrimary = Template.bind({})
export const MenuMediumPrimary = Template.bind({})
export const MenuSmallFullWidthPrimary = Template.bind({})
export const MenuMediumFullWidthPrimary = Template.bind({})

//  arguments
MenuSmallPrimary.args = {
    className: 'base-menu small primary'
}

MenuMediumPrimary.args = {
    className: 'base-menu medium primary'
}

MenuSmallFullWidthPrimary.args = {
    disabledOverflow: true,
    className: 'base-menu small primary full-width'
}

MenuMediumFullWidthPrimary.args = {
    disabledOverflow: true,
    className: 'base-menu medium primary full-width'
}