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
    title: 'Antd/Menus/Secondary',
    component: Menu,
    decorators: [withDesign],
    args: {
        items: menuItems,
        mode: 'horizontal'
    }
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSmallSecondary = Template.bind({})
export const MenuMediumSecondary = Template.bind({})
export const MenuSmallFullWidthSecondary = Template.bind({})
export const MenuMediumFullWidthSecondary = Template.bind({})

//  arguments
MenuSmallSecondary.args = {
    className: 'base-menu small secondary'
}

MenuMediumSecondary.args = {
    className: 'base-menu medium secondary'
}

MenuSmallFullWidthSecondary.args = {
    disabledOverflow: true,
    className: 'base-menu small secondary full-width'
}

MenuMediumFullWidthSecondary.args = {
    disabledOverflow: true,
    className: 'base-menu medium secondary full-width'
}