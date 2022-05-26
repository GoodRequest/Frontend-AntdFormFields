/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import CheckboxField from '../../atoms/CheckboxField'

export default {
    title: 'Fields/Checkbox',
    component: CheckboxField,
    decorators: [withDesign],
    args: {
        meta: { touched: false },
        input: {
            onChange: () => {}
        }
    }
}

const Template: ComponentStory<typeof CheckboxField> = (args) => (
    <Form layout='vertical'>
        <CheckboxField {...args} />
    </Form>
)

// stories
export const WithLabel = Template.bind({})
export const Required = Template.bind({})
export const Error = Template.bind({})
export const Disabled = Template.bind({})

// arguments
WithLabel.args = {
    label: 'Label'
}

Required.args = {
    label: 'Label',
    required: true
}

Error.args = {
    label: 'Label',
    meta: {
        error: 'Error message',
        touched: true
    } as any
}

Disabled.args = {
    label: 'Label',
    disabled: true
}