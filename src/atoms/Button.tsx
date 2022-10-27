import React, { PropsWithChildren } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'

type Props = ButtonProps & PropsWithChildren

const Button = (props: Props) => {
	return <AntdButton {...props} onClick={(e) => {
        e?.currentTarget?.blur()
        props?.onClick(e)
    }
    }>{props.children}</AntdButton>
}

export default Button
