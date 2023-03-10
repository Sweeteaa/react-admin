import React from 'react';
import classes from './Recycle.module.css'

const Recycle = () => {
    return (
        <div>
            <div>
                <div className={classes.data}>数据</div>
                <div className={classes.table}>
                    <table className={classes.tab}>
                        <thead className={classes.head}>
                            <tr>
                                <th colSpan={7}>回收订单</th>
                            </tr>
                            <tr>
                                <th>订单号</th>
                                <th>用户</th>
                                <th>类型</th>
                                <th>重量/数量</th>
                                <th>回收时间</th>
                                <th>状态</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody className={classes.body}>
                            <tr>
                                <td>10000</td>
                                <td>tomato</td>
                                <td>衣物</td>
                                <td>8件</td>
                                <td>2023/3/7</td>
                                <td>first</td>
                                <td><button>更新</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Recycle;