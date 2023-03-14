import React from 'react';
import EChartsReact from 'echarts-for-react'

const Tab = () => {

    let option = {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
        }]
      };
    return (
        <div>
            <EChartsReact option={option} style={{height:'400px',width:'600px'}}/>
        </div>
    );
};

export default Tab;