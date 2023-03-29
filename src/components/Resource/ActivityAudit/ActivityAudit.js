import React, { useState, useEffect, useCallback } from 'react';
import classes from './ActivityAudit.module.css'
import axios from 'axios';
import { message } from 'antd';

const ActivityAudit = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
            messageApi.open({
            type: 'success',
            content: '审核活动订单成功！',
        });
    };
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: '审核活动订单失败！',
        });
    };
    const [list, getList] = useState()
    const [progress, getProgress] = useState()
    //获取活动订单列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getActivityOrder`
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[])

    //获取活动列表，hook
    const ActivityDataOne = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getActivityDetail/${1}`
        }).then((res) => {
            // console.log('res', res.data.data);
            getProgress(res.data.data)
        });
    },[])

    // console.log(progress)

    const pass = (value)=>{
        let state = {
            state: '已完成'
        }
        let pro = {
            progress: value.num + progress[0].progress
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/activity/updateOrderState/${value.id}`,
                  data:state,
                  headers:{'Content-Type':'application/x-www-form-urlencoded'}
              })
            .then((res) => {
                resolve( res );
                // console.log(res)
                if(res.data.status !== 1){
                    return new Promise((resolve,reject) => {
                        axios({
                              method:'post',
                              url:`http://127.0.0.1:3001/user/activity/updateActivityNeed/${value.activityid}`,
                              data:pro,
                              headers:{'Content-Type':'application/x-www-form-urlencoded'}
                          })
                        .then((res) => {
                            resolve( res );
                            if(res.data.status !== 1){
                                success();
                            }else{
                                warning()
                            }
                            // console.log(res)
                        })
                        .catch((error) => {
                            reject( error );
                            console.log(error)
                        });
                    })
                }
            })
            .catch((error) => {
                reject( error );
                console.log(error)
            });
        })
    }
 
    useEffect(() => {
        const timer = setInterval(() => {
            //可以调接口
            //可以存state，如setCount(count + 1)
            //可以调其他函数
                fetchData()
                ActivityDataOne()
            }, 1000);
            return () => {
                clearInterval(timer)
            };
    }, [fetchData, ActivityDataOne]);
    return (
        <div>
            {contextHolder}
            <div className={classes.table}>
                    <div className={classes.title}>活动订单审核</div>
                    <table className={classes.tab}>
                        <thead className={classes.head}>
                            <tr>
                                <th>活动订单id</th>
                                <th>用户名</th>
                                <th>地址</th>
                                <th>捐献数量</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                            <tbody className={classes.body}>
                                { 
                                    !(list === [] || list === undefined) &&
                                    list.map(item=>
                                        item.state === '未回收' &&
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.address}</td>
                                            <td>{item.num}</td>
                                            <td>
                                                <button className={classes.btn} onClick={
                                                    pass.bind(this,{id:item.id,num:item.num,activityid:item.activityid})
                                                }>通过</button>
                                            </td>
                                        </tr>
                                    ).reverse()
                                }
                            </tbody>
                    </table>
                </div>
        </div>
    );
};

export default ActivityAudit;