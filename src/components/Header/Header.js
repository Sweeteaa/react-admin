import React from 'react';
import { Menu } from 'antd';
import classes from './Headers.module.css'


const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));

const Headers = () => {
    return (
        <div>
            <div className={classes.logo} />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
        </div>
    );
};

export default Headers;