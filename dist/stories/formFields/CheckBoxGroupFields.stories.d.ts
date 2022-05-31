import React from 'react';
declare const _default: {
    title: string;
    component: (props: import("redux-form").WrappedFieldProps & import("antd/lib/checkbox").CheckboxGroupProps & import("antd").FormItemProps<any> & {
        checkboxGroupStyles?: React.CSSProperties;
        horizontal?: boolean;
        large?: boolean;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
    args: {
        input: {
            form: any;
            error: any;
            onBlur: () => void;
            onChange: () => void;
        };
        meta: {
            touched: boolean;
        };
        size: string;
    };
};
export default _default;
export declare const WithLabel: any;
export declare const Required: any;
export declare const Error: any;
export declare const Disabled: any;
