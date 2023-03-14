import React from 'react';
import classes from './Recycle.module.css'
import { message, Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

const Recycle = (e) => {
    const [messageApi, contextHolder] = message.useMessage();
    const success = () => {
            messageApi.open({
            type: 'success',
            content: '成功更改回收订单状态',
        });
    };
    const warning = () => {
        messageApi.open({
          type: 'warning',
          content: '更改回收订单状态失败',
        });
    };
    //获取选择的状态
    const [select, setSelect] = useState()
    //获取选择的状态对应的组件
    const [selectid, setId] = useState()
    //更新订单状态
    const updateValue = ()=>{
        console.log(select,selectid)
        let State = {
            state:select
        }
        return new Promise((resolve,reject) => {
            axios({
                  method:'post',
                  url:`http://127.0.0.1:3001/user/order/updateOrderState/${selectid}`,
                  data:State,
                  headers:{'Content-Type':'application/x-www-form-urlencoded'}
              })
            .then((res) => {
                resolve( res );
                if(res.data.status !== 1){
                    success();
                    setShow(pre=>!pre)
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

    const name = useSelector(state => state.auth)
    //控制操作列表显示
    const [show, setShow] = useState(false)
    //获取用户换购订单
    const [list, getList] = useState([])
    //刷新数据
    const [count, setCount] = useState(0);

    //刷新加载
    const [loading, setLoad] = useState(false)

    //获取地址列表，hook
    const fetchData = useCallback(async () => {
        await axios({
            method:'get',
            url:'http://localhost:3001/user/order/getOrder',
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
    }, [count,loading,fetchData]);
    // console.log(list.length)

    //换页
    const [current, setCurrent] = useState(1);
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
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
                                <th>回收时间</th>
                                <th>状态</th>
                                <th>操作</th>
                                {
                                    show &&
                                    <th>更新状态</th>
                                }
                            </tr>
                        </thead>
                            <tbody className={classes.body}>
                                {
                                    list.map(item=>
                                        item.page === current&&
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.username}</td>
                                            <td>{item.type}</td>
                                            <td>{item.weight}</td>
                                            <td>{item.timePeriod}</td>
                                            <td style={{fontWeight:'bold'}}>
                                                {item.state}
                                            </td>
                                            <td>
                                                <button className={classes.btn} onClick={
                                                    e => {
                                                        //取消点击默认行为
                                                        e.preventDefault();
                                                        //更改状态值
                                                        setShow(prevState => !prevState)
                                                    }
                                                }>{show?'取消':'更新'}</button>
                                            </td>
                                            {
                                                show &&
                                                <td className={classes.hide}>
                                                    <select className={classes.slt} onChange={e=>{
                                                        setSelect(e.target.value)
                                                        setId(item.id)}}
                                                    >
                                                        <option value="未回收">未回收</option>
                                                        <option value="回收中">回收中</option>
                                                        <option value="待评价">待评价</option>
                                                        <option value="已完成">已完成</option>
                                                    </select>
                                                        <button className={classes.cbtn} onClick={e=>{
                                                            e.preventDefault();
                                                            updateValue();
                                                        }}>
                                                            修改
                                                    </button>
                                                </td>
                                            }
                                        </tr>
                                        
                                    )
                                }
                            </tbody>
                    </table>
                </div>
                <Pagination current={current} onChange={onChange} total={list.length} />
            </div>
        </div>
    );
};

export default Recycle;