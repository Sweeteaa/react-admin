import React from 'react';
import classes from './Audit.module.css'
import { message, Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const Audit = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
            messageApi.open({
            type: 'success',
            content: '审核通过！',
        });
    };
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: '操作失败！',
        });
    };
    //通过订单
    const pass = (id)=>{
        // console.log(id)
        let Audit = {
            audit:'true'
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/order/updateOrderAudit/${id}`,
                  data:Audit,
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
        // console.log(select,selectid)
    }

    //不通过订单
    const cancel = (id)=>{
        // console.log(id)
        let Audit = {
            audit:'cancel'
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/order/updateOrderAudit/${id}`,
                  data:Audit,
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
    //获取用户回收待审核订单
    const [list, getList] = useState([])
    //刷新加载
    const [loading, setLoad] = useState(false)

    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:'http://localhost:3001/user/order/getAllOrder',
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
    }, [loading,fetchData]);
    // console.log(list.length)

    return (
        <div>
            {contextHolder}
            <div className={classes.main}>
                <div className={classes.data}>数据</div>
                <div className={classes.table}>
                    <table className={classes.tab}>
                        <thead className={classes.head}>
                            <tr>
                                <th>订单号</th>
                                <th>用户</th>
                                <th>类型</th>
                                <th>重量/数量</th>
                                <th>可奖励积分</th>
                                <th>回收时间</th>
                                <th>审核状态</th>
                                <th>审核操作</th>
                            </tr>
                        </thead>
                            <tbody className={classes.body}>
                                {
                                    list.map(item=>
                                        item.state === '回收中' &&
                                        (item.audit === 'false' || item.audit === 'cancel') &&
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.type}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.Integral}</td>
                                            <td>{item.timePeriod}</td>
                                            <td style={{fontWeight:'bold'}}>
                                                {
                                                    item.audit === 'false' && <div>未审核</div>
                                                }
                                                {
                                                    item.audit === 'cancel' && <div>审核未通过</div>
                                                }
                                            </td>
                                            <td className={classes.dbtn}>
                                                <button 
                                                    disabled={item.audit === 'false'?false:true}
                                                    className={item.audit === 'false'?classes.btn:classes.fbtn} 
                                                    //获取button所对应订单的id
                                                    onClick={pass.bind(this,item.id)}
                                                >  
                                                    通过
                                                </button>
                                                <button 
                                                    disabled={item.audit === 'false'?false:true}
                                                    className={item.audit === 'false'?classes.cbtn:classes.fcbtn} 
                                                    //获取button所对应订单的id
                                                    onClick={cancel.bind(this,item.id)}
                                                >  
                                                    不通过
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                    </table>
                </div>
                {/* <Pagination current={current} onChange={onChange} total={list.length} /> */}
            </div>
        </div>
    );
};

export default Audit;