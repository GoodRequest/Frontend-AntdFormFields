import React, { PropsWithChildren } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'

type Props = ButtonProps & PropsWithChildren

const Button = (props: Props) => {

	const classNames = `${props?.className} ${props?.children ? '' : 'ant-btn-icon-only'}`

	return <AntdButton {...props} className={classNames}>
		<span className={'loading-icon'} style={{ display: 'none' }}>
			<div className={'spinnerSC'}>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
				<div className={'spinnerStickSC'}/>
			</div>
		</span>
		{props.children}
		</AntdButton>
}

export default Button
