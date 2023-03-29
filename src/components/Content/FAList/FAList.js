import React, { useCallback, useEffect, useState }  from 'react';
import { List } from 'antd';
import classes from './FAList.module.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { InfoCircleOutlined } from '@ant-design/icons'; 

const FAList = () => {
    const [list, getList] = useState()
    //获取所有未审核回收订单列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:'http://localhost:3001/user/activity/getActivityOrder',
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[])

 
    //刷新数据，更新订单状态显示
    useEffect(() => {
        const timer = setInterval(() => {
            //可以调接口
            //可以存state，如setCount(count + 1)
            //可以调其他函数
                fetchData()
            }, 1000);
            return () => {
                clearInterval(timer)
            };
    }, [fetchData]);
    // console.log(list)

    return (
        <div>
            <div className={classes.list}>
                <List
                    itemLayout='horizontal'
                    dataSource={list}
                    bordered={true}
                    className={classes.bac}
                    split={true}
                    renderItem={(item) => (
                        <div>
                            {
                                item.state === '未回收' &&
                                <List.Item
                                    actions={[<Link to='/home/audit' className={classes.word}>审核</Link>]}
                                >
                                    <List.Item.Meta 
                                        avatar={<InfoCircleOutlined />}
                                        title={<div>待审核</div>}
                                        description={`${item.username+'--'+'活动'+item.activityid}`}
                                    />
                                </List.Item>
                            }
                        </div>
                    )}
                />
            </div>
        </div>
    );
};

export default FAList;