import React from 'react';
import EChartsReact from 'echarts-for-react';
import useGetWeek from '../../../hooks/useGetWeek'

const Year = () => {
    let week = useGetWeek() 
    // console.log(week)
    let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [ '全部回收种类','衣物', '书籍', '家具','日用品']
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
            name: '全部回收种类',
            type: 'line',
            data: [133, 82, 129, 90, 132, 93, 110]
          },
          {
            name: '衣物',
            type: 'line',
            data: [32, 18, 13, 10, 21, 33, 32]
          },
          {
            name: '书籍',
            type: 'line',
            data: [33, 22, 18, 13, 10, 18, 29,]
          },
          {
            name: '家具',
            type: 'line',
            data: [ 19, 23, 10, 18, 29, 33, 31]
          },
          {
            name: '日用品',
            type: 'line',
            data: [15, 23, 20, 15, 9, 23, 21]
          },
        ]
    };
      
    return (
        <div>
            <div>回收数据变化（年）</div>
            <EChartsReact option={option} style={{height:'350px',width:'1000px'}}/>
        </div>
    );
};

export default Year;