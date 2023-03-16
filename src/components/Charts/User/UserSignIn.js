import React from 'react';
import EChartsReact from 'echarts-for-react';

const UserSignIn = () => {
    let option = {
        xAxis: {
          type: 'category',
          data: ['3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
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