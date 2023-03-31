import React from 'react';
import EChartsReact from 'echarts-for-react';
import useGetWeek from '../../../hooks/useGetWeek';

const UserYear = () => {
    let week = useGetWeek()
    let option = {
        title: {
          text: '近七日用户注册数',
          // subtext: 'Fake Data',
          left: 'left'
        },
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
          data: week
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
            <EChartsReact option={option} style={{height:'350px',width:'1200px'}}/>
        </div>
    );
};

export default UserYear;