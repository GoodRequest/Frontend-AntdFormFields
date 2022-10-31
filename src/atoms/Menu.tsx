import React, { useState } from 'react'
import { Menu as AntdMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'

type Props = MenuProps

const Menu = (props: Props) => {
    return (
        <AntdMenu {...props} />
    )
}

export default Menu