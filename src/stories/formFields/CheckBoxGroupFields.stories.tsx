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
const options = ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5',]

// const options = [
//     { label: 
//         <div style={{ margin: '10px 0' }}>
//             <span style={{ fontWeight: 500, fontSize: '14px', lineHeight: '20px', display: 'block' }}>
//                 Remember me
//             </span>
//             <span style={{ fontWeight: 400, fontSize: '14px', lineHeight: '20px', display: 'block' }}>
//                 Save my login details for next time
//             </span>
//         </div>
//         ,
//         value: 1},
//     { label: 
//         <div>
//             <span>Remember me</span>
//             <span>Save my login details for next time</span>
//         </div>,
//         value: 2 },
//     { label: 
//         <div>
//             <span>Remember me</span>
//             <span>Save my login details for next time</span>
//         </div>,
//         value: 3 },
//     { label: 
//         <div>
//             <span>Remember me</span>
//             <span>Save my login details for next time</span>
//         </div>,
//         value: 4 },
//     { label: 
//         <div>
//             <span>Remember me</span>
//             <span>Save my login details for next time</span>
//         </div>,
//         value: 5 },
// ]

export default {
    title: 'Fields/CheckboxGroupField',
    component: CheckboxGroupField,
    decorators: [withDesign],
    args: {
        input: inputDefaultProps,
        meta: { touched: false },
        className: 'base-checkbox'
    }
}

const Template: ComponentStory<typeof CheckboxGroupField> = (args) => (
    <Form layout='vertical'>
        <CheckboxGroupField {...args} />
    </Form>
)

// stories
export const CheckboxGroupVertical = Template.bind({})
export const CheckboxGroupErrorVertical = Template.bind({})
export const CheckboxGroupDisabledVertical = Template.bind({})

export const CheckboxGroupHorizontal = Template.bind({})
export const CheckboxGroupErrorHorizontal = Template.bind({})
export const CheckboxGroupDisabledHorizontal = Template.bind({})

// arguments
CheckboxGroupVertical.args = {
    options,
    horizontal: false
}

CheckboxGroupErrorVertical.args = {
    options,
    meta: {
        error: 'Error message',
        touched: true
    } as any,
    horizontal: false
}

CheckboxGroupDisabledVertical.args = {
    disabled: true,
    options,
    horizontal: false
}

CheckboxGroupHorizontal.args = {
    options,
    horizontal: true
}

CheckboxGroupErrorHorizontal.args = {
    options,
    meta: {
        error: 'Error message',
        touched: true
    } as any,
    horizontal: true
}

CheckboxGroupDisabledHorizontal.args = {
    disabled: true,
    options,
    horizontal: true
}