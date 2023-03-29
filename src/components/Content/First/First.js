import React from 'react';
import classes from './First.module.css'
import { Calendar, FloatButton } from 'antd';
import FList from '../FList/FList';
import Number from '../Number/Number';
import FAList from '../FAList/FAList';

const First = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div className={classes.main}>
            <div className={classes.canlendar}>
                <Calendar className={classes.iner} fullscreen={false} onPanelChange={onPanelChange} style={{width:'600px',height:'450px',borderRadius:'20px'}}/>
                {/* <Number/> */}
            </div>
            <div className={classes.lis}>
                <div className={classes.lfont}>回收订单审核</div>
                <FList/>
            </div>
            <div className={classes.alis}>
                <div className={classes.lfont}>活动订单审核</div>
                <FAList/>
            </div>
            <div>
                <FloatButton onClick={() => console.log('click')} />
            </div>
        </div>
    );
};

export default First;