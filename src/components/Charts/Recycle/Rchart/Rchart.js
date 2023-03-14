import React from 'react';
import Type from '../Type';
import Year from '../Year';
import classes from './Rchart.module.css'

const Rchart = () => {
    return (
        <div>
            <div className={classes.charts}>
                <Type/>
                <Year/>
            </div>
        </div>
    );
};

export default Rchart;