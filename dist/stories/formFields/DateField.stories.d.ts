/// <reference types="react" />
declare const _default: {
    title: string;
    component: (props: import("redux-form").WrappedFieldProps & import("antd").FormItemProps<any> & import("antd").DatePickerProps & {
        disableFuture?: boolean;
        disablePast?: boolean;
        hideHelp?: boolean;
        compareFrom1?: any;
        compareFrom2?: any;
        compareTo1?: any;
        rounded?: boolean;
        readOnly?: boolean;
        showToday?: any;
        validateTo?: string;
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
