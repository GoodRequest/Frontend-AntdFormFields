import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import Menu from '../../atoms/Menu'
import { ComponentStory } from '@storybook/react'

export default {
    title: 'Antd/Menu',
    component: Menu,
    decorators: [withDesign],
    args: {}
}

const Template: ComponentStory<typeof Menu> = (args) => <Menu {...args} />

// stories
export const MenuSimple = Template.bind({})

//  arguments
MenuSimple.args = {
    items: [
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
    ],
    mode: 'horizontal'
}