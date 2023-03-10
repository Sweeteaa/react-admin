import { LaptopOutlined, NotificationOutlined, UserOutlined, HomeOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Menus = () => {
    const [items, setItem] = useState([{
                key: "/home",
                icon: React.createElement(UserOutlined),
                label: <Link to="/home">概览</Link>
            }, {
                key: "/order",
                icon: React.createElement(UserOutlined),
                label: "订单管理",
                children: [{
                    key: "/home/order/recycle",
                    label: <Link to="/home/recycle">成员管理</Link>
                }, {
                    key: "/home/order/change",
                    label: <Link to="/home/change">权限设置</Link>
                }, ]
            }]
        )
    return (
        <div>
            <Menu
                theme="light"
                mode="inline"
                defaultSelectedKeys={['/home']}
                defaultOpenKeys={['/home']}
                style={{
                    height: '100%',
                    borderRight: 0,
                }}
                items={items}
            />
        </div>
    );
};

export default Menus;