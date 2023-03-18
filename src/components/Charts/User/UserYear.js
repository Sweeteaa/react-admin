import React from 'react';
import EChartsReact from 'echarts-for-react';

const UserYear = () => {
    let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['用户']
        },
        grid: {
          left: '3%',
          right: '4%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['3/10', '3/11', '3/12', '3/13', '3/14', '3/15', '3/16']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '用户注册新增',
            type: 'line',
            stack: 'Total',
            data: [12, 13, 10, 13, 9, 23, 21]
          }
        ]
    };
      
    return (
        <div>
            <div>用户注册新增人数</div>
            <EChartsReact option={option} style={{height:'350px',width:'1200px'}}/>
        </div>
    );
};

export default UserYear;