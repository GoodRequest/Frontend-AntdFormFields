import React, { PropsWithChildren } from 'react'
import { Button as AntdButton } from 'antd'
import { ButtonProps } from 'antd/lib/button'

type Props = ButtonProps & PropsWithChildren

const Button = (props: Props) => {

	const classNames = `${props?.className} ${props?.children ? '' : 'ant-btn-icon-only'}`
	
	// const LoadingIcon = () => {
	// 	return (
	// 		<SpinnerSC>
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 			<SpinnerStickSC />
	// 		</SpinnerSC>
	// 	)
	// }

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
			{/* <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
				<g clip-path="url(#clip0_805_64190)">
					<rect x="7.08325" y="0.666748" width="1.83333" height="3.66667" rx="0.916667" fill="none"/>
					<rect opacity="0.16" x="12.5376" y="2.16626" width="1.83333" height="3.66667" rx="0.916667" transform="rotate(45 12.5376 2.16626)" fill="none"/>
					<rect opacity="0.4" width="1.83333" height="3.66667" rx="0.916667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 12.5376 13.833)" fill="none"/>
					<rect opacity="0.28" x="15.3333" y="7.0835" width="1.83333" height="3.66667" rx="0.916667" transform="rotate(90 15.3333 7.0835)" fill="none"/>
					<rect opacity="0.52" x="7.08325" y="11.6667" width="1.83333" height="3.66667" rx="0.916667" fill="none"/>
					<rect opacity="0.64" x="4.7594" y="9.94434" width="1.83333" height="3.66667" rx="0.916667" transform="rotate(45 4.7594 9.94434)" fill="none"/>
					<rect opacity="0.88" width="1.83333" height="3.66667" rx="0.916667" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 4.7594 6.05493)" fill="none"/>
					<rect opacity="0.76" x="4.33325" y="7.0835" width="1.83333" height="3.66667" rx="0.916667" transform="rotate(90 4.33325 7.0835)" fill="none"/>
				</g>
				<defs>
					<clipPath id="clip0_805_64190">
						<rect width="16" height="16" fill="none"/>
					</clipPath>
				</defs>
			</svg> */}
		</span>
		{props.children}
		</AntdButton>
}

export default Button
