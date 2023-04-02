import React, { useState, useEffect, useCallback } from 'react';
import classes from './Activity.module.css'
import axios from 'axios';
import { message } from 'antd';
// import { Ellipsis } from 'antd';

const Activity = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
            messageApi.open({
            type: 'success',
            content: '活动状态更新成功！',
        });
    };
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: '活动状态更新失败！',
        });
    };
    const [list, getList] = useState()
    //获取活动列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://localhost:3001/user/activity/getActivity`
        }).then((res) => {
            // console.log('res', res.data.data);
            getList(res.data.data)
        });
    },[])

    const del = (value)=>{
        let State = {
            state:'已完成'
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/activity/delActivity/${value.id}`,
                  data:State,
                  headers:{'Content-Type':'application/x-www-form-urlencoded'}
              })
            .then((res) => {
                resolve( res );
                if(res.data.status !== 1){
                    success();
                }else{
                    warning()
                }
                console.log(res)
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
            }, 1000);
            return () => {
                clearInterval(timer)
            };
    }, [fetchData]);
    return (
        <div>
            {contextHolder}
            <div className={classes.table}>
                    <div className={classes.title}>活动管理</div>
                    <table className={classes.tab}>
                        <thead className={classes.head}>
                            <tr>
                                <th>活动id</th>
                                <th>活动名</th>
                                <th>活动简介</th>
                                <th>活动需求</th>
                                <th>活动进度</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                            <tbody className={classes.body}>
                                { 
                                    !(list === [] || list === undefined) &&
                                    list.map(item=>
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.text}</td>
                                            <td>{item.num}</td>
                                            <td>{item.progress}</td>
                                            <td>{item.state}</td>
                                            <td>
                                                <button className={classes.btn} onClick={
                                                    del.bind(this,{id:item.id})
                                                }>更新</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
        </div>
    );
};

export default Activity;