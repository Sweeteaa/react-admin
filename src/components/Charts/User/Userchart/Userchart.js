import React from 'react';
import UserSignIn from '../UserSignIn';
import UserType from '../UserType';
import UserYear from '../UserYear';
import classes from './Userchart.module.css'

const Userchart = () => {
    return (
        <div>
            <div className={classes.charts}>
                <div className={classes.row}>
                    <UserType/>
                    <UserSignIn/>
                </div>
                <UserYear/>
            </div>
        </div>
    );
};

export default Userchart;