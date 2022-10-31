import React, { useState } from 'react'
import { Menu as AntdMenu } from 'antd'
import { MenuProps } from 'antd/lib/menu'

type Props = MenuProps

const Menu = (props: Props) => {
    const [selectedItem, setSelectedItem] = useState<any>(undefined)

    return (
        <AntdMenu {...props} onClick={(e: any) => setSelectedItem(e?.key)} selectedKeys={[ selectedItem || props?.items?.[0]?.key ]}>
        </AntdMenu>
    )
}

export default Menu