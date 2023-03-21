import React from 'react';
import { Button, Col, Row, Statistic } from 'antd';
import classes from './Number.module.css'

const Number = () => {
    return (
        <div>
            <div className={classes.number}>
                <Row gutter={16}>
                    <Col span={12}>
                    <Statistic title="Active Users" value={112893} />
                    </Col>
                    <Col span={12}>
                    <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
                    <Button
                        style={{
                        marginTop: 16,
                        }}
                        type="primary"
                    >
                        Recharge
                    </Button>
                    </Col>
                    <Col span={12}>
                    <Statistic title="Active Users" value={112893} loading />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Number;