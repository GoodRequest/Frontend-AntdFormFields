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
}

const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5']

export default {
    title: 'Fields/RadioGroupField',
    component: RadioGroupField,
    decorators: [withDesign],
    args: {
        input: inputDefaultProps,
        meta: { touched: false },
        label: 'Label',
        className: 'base-radiobutton',
        direction: 'horizontal'
    }
}

const Template: ComponentStory<typeof RadioGroupField> = (args) => (
    <Form layout='vertical'>
        <RadioGroupField {...args} />
    </Form>
)

// stories
export const RadioGroup = Template.bind({})
export const RadioGroupError = Template.bind({})
export const RadioGroupDisabled = Template.bind({})

// arguments
RadioGroup.args = {
    options: options
}

RadioGroupError.args = {
    options,
    meta: {
        error: 'Error message',
        touched: true
    } as any
}

RadioGroupDisabled.args = {
    disabled: true,
    options
}