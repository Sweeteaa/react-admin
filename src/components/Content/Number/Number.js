import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
import classes from './Number.module.css'

const Number = () => {
    return (
        <div>
            <div className={classes.number}>
                <div>
                    <div>每日新增注册用户</div>
                    <div>11</div>
                </div>
                <div>
                    <div>每日新增回收订单</div>
                    <div>112</div>
                </div>
            </div>
        </div>
    );
};

export default Number;