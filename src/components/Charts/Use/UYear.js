import React from 'react';
import EChartsReact from 'echarts-for-react';
import useGetWeekUse from '../../../hooks/useGetWeekUse';
import useGetWeek from '../../../hooks/useGetWeek';

const UYear = () => {
    let week = useGetWeek()
    let food = useGetWeekUse('食物')
    let dec = useGetWeekUse('装饰')
    let bea = useGetWeekUse('配饰')
    let item = useGetWeekUse('日用品')
    // console.log(cloth,book,fur,item)
    // console.log(book[2]["count(1)"])
    let option = {
        title: {
          text: '近七日新增换购订单'
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [ '食物', '装饰', '配饰','日用品']
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
            name: '食物',
            type: 'line',
            data: [
                food[0]["count(1)"], 
                food[1]["count(1)"], 
                food[2]["count(1)"], 
                food[3]["count(1)"], 
                food[4]["count(1)"], 
                food[5]["count(1)"], 
                food[6]["count(1)"]
            ]
          },
          {
            name: '装饰',
            type: 'line',
            data: [
              dec[0]["count(1)"], 
              dec[1]["count(1)"], 
              dec[2]["count(1)"], 
              dec[3]["count(1)"], 
              dec[4]["count(1)"], 
              dec[5]["count(1)"], 
              dec[6]["count(1)"]
          ]
          },
          {
            name: '配饰',
            type: 'line',
            data: [
              bea[0]["count(1)"], 
              bea[1]["count(1)"], 
              bea[2]["count(1)"], 
              bea[3]["count(1)"], 
              bea[4]["count(1)"], 
              bea[5]["count(1)"], 
              bea[6]["count(1)"]
            ]
          },
          {
            name: '日用品',
            type: 'line',
            data: [
                item[0]["count(1)"], 
                item[1]["count(1)"], 
                item[2]["count(1)"], 
                item[3]["count(1)"], 
                item[4]["count(1)"], 
                item[5]["count(1)"], 
                item[6]["count(1)"]
            ]
          },
        ]
    };
      
    return (
        <div>
            <EChartsReact option={option} style={{height:'350px',width:'1000px'}}/>
        </div>
    );
};

export default UYear;