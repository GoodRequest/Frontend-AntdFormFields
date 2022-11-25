/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import { withDesign } from 'storybook-addon-designs'
import { Form } from 'antd'
import { ComponentStory } from '@storybook/react'
import CheckboxGroupField from '../../atoms/CheckboxGroupField'

const inputDefaultProps = {
    form: undefined,
    error: null,
    onBlur: () => {},
}

const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']

export default {
    title: 'Fields/CheckboxGroupField',
    component: CheckboxGroupField,
    decorators: [withDesign],
    args: {
        input: inputDefaultProps,
        meta: { touched: false },
        label: 'Label',
        className: 'base-checkbox',
        horizontal: true
    }
}

const Template: ComponentStory<typeof CheckboxGroupField> = (args) => (
    <Form layout='vertical'>
        <CheckboxGroupField {...args} />
    </Form>
)

// stories
export const CheckboxGroup = Template.bind({})
export const CheckboxGroupError = Template.bind({})
export const CheckboxGroupDisabled = Template.bind({})

// arguments
CheckboxGroup.args = {
    options: options
}

CheckboxGroupError.args = {
    options,
    meta: {
        error: 'Error message',
        touched: true
    } as any
}

CheckboxGroupDisabled.args = {
    disabled: true,
    options
}