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
            form: undefined,
            error: null,
        },
        label: 'Label',
        className: 'base-checkbox'
    }
}

const Template: ComponentStory<typeof CheckboxField> = (args) => (
    <Form layout='vertical'>
        <CheckboxField {...args} />
    </Form>
)

// stories
export const Checkbox = Template.bind({})
export const CheckboxError = Template.bind({})
export const CheckboxDisabled = Template.bind({})


// arguments
Checkbox.args = {
    required: true
}

CheckboxError.args = {
    meta: {
        error: 'Error message',
        touched: true
    } as any
}

CheckboxDisabled.args = {
    disabled: true
}