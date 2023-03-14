import React from 'react';
import EChartsReact from 'echarts-for-react';

const UserSignIn = () => {
    let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      };
    return (
        <div>
            <EChartsReact option={option} style={{height:'450px',width:'700px'}}/>
        </div>
    );
};

export default UserSignIn;