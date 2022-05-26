/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import ToggleField from '../../atoms/ToggleField'

const options = ['Test 1', 'Test 2', 'Test 3']

export default {
    title: 'Fields/Toggle',
    component: ToggleField,
    decorators: [withDesign],
    args: {
        meta: { touched: false },
        input: {
            onChange: () => {}
        }
    }
}

const Template: ComponentStory<typeof ToggleField> = (args) => (
    <Form>
        <ToggleField {...args} />
    </Form>
)

// stories
export const ToggleDefault = Template.bind({})
export const ToggleDisabled = Template.bind({})
export const ToggleSmall = Template.bind({})
export const ToggleSmallDisabled = Template.bind({})

// arguments
ToggleDefault.args = {
    options
}

// arguments
ToggleDisabled.args = {
    disabled: true,
    options
}

ToggleSmall.args = {
    size: 'small',
    options,
    defaultChecked: true
}

ToggleSmallDisabled.args = {
    size: 'small',
    options,
    disabled: true
}