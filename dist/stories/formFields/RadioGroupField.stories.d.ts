/// <reference types="react" />
declare const _default: {
    title: string;
    component: (props: import("redux-form").WrappedFieldProps & import("antd").InputProps & import("antd/lib/form/FormItemLabel").FormItemLabelProps & {
        options: any;
        direction: "horizontal" | "vertical";
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
