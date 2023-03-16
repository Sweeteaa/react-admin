import React from 'react';
import classes from './First.module.css'
import { Calendar, Button, Col, Row, Statistic, FloatButton, Card, List, Typography } from 'antd';

const First = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };

    const data = [
        {
            title: '待办事项 1',
        },
        {
            title: '待办事项 2',
        },
        {
            title: '待办事项 3',
        },
        {
            title: '待办事项 4',
        },
    ];

    const list = [
        'Racing car sprays burning fuel into crowd.',
        'Japanese princess to wed commoner.',
        'Australian walks 100km after outback crash.',
        'Man charged over missing wedding girl.',
    ];

    return (
        <div className={classes.main}>
            <div className={classes.canlendar}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} style={{width:'500px',height:'400px'}}/>
            </div>
            <div className={classes.lis}>
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
                
                <div className={classes.toplist}>
                    <List
                        bordered
                        dataSource={list}
                        renderItem={(item) => (
                            <List.Item>
                            <Typography.Text mark></Typography.Text> {item}
                            </List.Item>
                        )}
                    />
                </div>
            </div>
            <div className={classes.list}>
                <List
                    grid={{
                        gutter: 16,
                        column: 4,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                    <List.Item>
                        <Card title={item.title}>Card content</Card>
                    </List.Item>
                    )}
                />
            </div>
            <div>
                <FloatButton onClick={() => console.log('click')} />
            </div>
        </div>
    );
};

export default First;