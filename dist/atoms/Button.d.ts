import { PropsWithChildren } from 'react';
import { ButtonProps } from 'antd/lib/button';
declare type Props = ButtonProps & PropsWithChildren;
declare const Button: (props: Props) => JSX.Element;
export default Button;
