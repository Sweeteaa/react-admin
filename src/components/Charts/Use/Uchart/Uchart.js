import React from 'react';
import UType from '../UType';
import UYear from '../UYear';
import classes from './Uchart.module.css';

const Uchart = () => {
    return (
        <div className={classes.charts}>
            <UType/>
            <UYear/>
        </div>
    );
};

export default Uchart;