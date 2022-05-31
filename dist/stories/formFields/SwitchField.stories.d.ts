/// <reference types="react" />
declare const _default: {
    title: string;
    component: (props: import("redux-form").WrappedFieldProps & import("antd").SwitchProps & import("antd/lib/form/FormItemLabel").FormItemLabelProps & {
        suffixIcon?: JSX.Element;
        offsetLabel?: boolean;
        extraText?: any;
        description?: string;
        customLabel?: any;
        customOnChange?: (value: boolean) => void;
    }) => JSX.Element;
    decorators: ((...args: any) => any)[];
    args: {
        meta: {
            touched: boolean;
        };
        input: {
            onChange: () => void;
        };
    };
};
export default _default;
export declare const SwitchDefault: any;
export declare const SwitchDisabled: any;
export declare const SwitchSmall: any;
export declare const SwitchSmallDisabled: any;
