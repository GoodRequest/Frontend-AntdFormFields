/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import RadioGroupField from '../../atoms/RadioGroupField'

const inputDefaultProps = {
    form: undefined,
    error: null,
    onBlur: () => {},
    onChange: () => {}
}

const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']

export default {
    title: 'Fields/CheckboxGroupField',
    component: RadioGroupField,
    decorators: [withDesign],
    args: {
        input: inputDefaultProps,
        // placeholder: 'Placeholder',
        meta: { touched: false },
        size: 'large'
    }
}

const Template: ComponentStory<typeof RadioGroupField> = (args) => (
    <Form layout='vertical'>
        <RadioGroupField {...args} />
    </Form>
)

// stories
export const WithLabel = Template.bind({})
export const Required = Template.bind({})
export const Error = Template.bind({})
export const Disabled = Template.bind({})

// arguments
WithLabel.args = {
    label: 'Label',
    options
}

Required.args = {
    label: 'Label',
    required: true,
    options
}

Error.args = {
    label: 'Label',
    options,
    meta: {
        error: 'Error message',
        touched: true
    } as any
}

Disabled.args = {
    label: 'Label',
    disabled: true,
    options
}