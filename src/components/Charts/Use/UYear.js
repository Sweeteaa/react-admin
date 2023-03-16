import React from 'react';
import EChartsReact from 'echarts-for-react';

const UYear = () => {
  let option = {
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['全部换购商品种类', '食物', '装饰', '配饰','日用品']
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
        name: '全部换购商品种类',
        type: 'line',
        stack: 'Total',
        data: [12, 13, 10, 13, 9, 23, 21]
      },
      {
        name: '食物',
        type: 'line',
        stack: 'Total',
        data: [32, 33, 22, 18, 21, 33, 32]
      },
      {
        name: '装饰',
        type: 'line',
        stack: 'Total',
        data: [15, 23, 20, 15, 19, 33, 41]
      },
      {
        name: '配饰',
        type: 'line',
        stack: 'Total',
        data: [ 19, 23, 22, 18, 29, 33, 31]
      },
      {
        name: '日用品',
        type: 'line',
        stack: 'Total',
        data: [82, 129, 133, 132, 93, 90, 93]
      }
    ]
};
      
    return (
        <div>
            <div>回收数据变化（年）</div>
            <EChartsReact option={option} style={{height:'350px',width:'1000px'}}/>
        </div>
    );
};

export default UYear;