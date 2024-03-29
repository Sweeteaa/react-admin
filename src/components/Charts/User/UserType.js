import React from 'react';
import EChartsReact from 'echarts-for-react';

const UserType = () => {
    let option = {
      title: {
        text: '用户性别统计',
        // subtext: 'Fake Data',
        left: 'center'
      },
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            type: 'pie',
            radius: [22, 160],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 30, name: '男' },
              { value: 58, name: '女' },
            ]
          }
        ]
      };
    return (
        <div>
            <EChartsReact option={option} style={{height:'450px',width:'500px'}}/>
        </div>
    );
};

export default UserType;