import React from 'react';
import classes from './First.module.css'
import { Calendar, FloatButton } from 'antd';
import FList from '../FList/FList';
import Number from '../Number/Number';

const First = () => {
    const onPanelChange = (value, mode) => {
        console.log(value.format('YYYY-MM-DD'), mode);
    };
    return (
        <div className={classes.main}>
            <div className={classes.canlendar}>
                <Calendar fullscreen={false} onPanelChange={onPanelChange} style={{width:'500px',height:'400px'}}/>
                <Number/>
            </div>
            <div className={classes.lis}>
                <FList/>
            </div>
            <div>
                <FloatButton onClick={() => console.log('click')} />
            </div>
        </div>
    );
};

export default First;