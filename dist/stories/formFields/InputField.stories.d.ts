import React from 'react';
declare const _default: {
    title: string;
    component: React.MemoExoticComponent<(props: import("redux-form").WrappedFieldProps & import("antd").InputProps & import("antd/lib/form/FormItemLabel").FormItemLabelProps & {
        customOnBlur?: (value: string) => any;
        customOnChange?: (value: string) => any;
        hideHelp?: boolean;
        rounded?: boolean;
        fieldMode?: import("../../utils/enums").FIELD_MODE;
        focused?: boolean;
    }) => JSX.Element>;
    decorators: ((...args: any) => any)[];
    args: {
        input: {
            form: any;
            error: any;
            onBlur: () => void;
            onChange: () => void;
        };
        placeholder: string;
        meta: {
            touched: boolean;
        };
        size: string;
    };
};
export default _default;
export declare const WithLabel: any;
export declare const WithSuffixPrefix: any;
export declare const Required: any;
export declare const Error: any;
export declare const WithoutLabel: any;
export declare const Filled: any;
export declare const Disabled: any;
