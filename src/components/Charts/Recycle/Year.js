import React from 'react';
import EChartsReact from 'echarts-for-react';
import useGetWeek from '../../../hooks/useGetWeek'
import useGetWeekData from '../../../hooks/useGetWeekData';

const Year = () => {
    let week = useGetWeek() 
    // console.log(week)
    let cloth = useGetWeekData('衣服')
    let book = useGetWeekData('书籍')
    let fur = useGetWeekData('家具')
    let item = useGetWeekData('日用品')
    console.log(cloth,book,fur,item)
    // console.log(book[2]["count(1)"])
    let option = {
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: [ '衣物', '书籍', '家具','日用品']
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
          // {
          //   name: '衣物',
          //   type: 'line',
          //   data: [
          //       cloth[0]["count(1)"], 
          //       cloth[1]["count(1)"], 
          //       cloth[2]["count(1)"], 
          //       cloth[3]["count(1)"], 
          //       cloth[4]["count(1)"], 
          //       cloth[5]["count(1)"], 
          //       cloth[6]["count(1)"]
          //   ]
          // },
          // {
          //   name: '书籍',
          //   type: 'line',
          //   data: [
          //       book[0]["count(1)"], 
          //       book[1]["count(1)"], 
          //       book[2]["count(1)"], 
          //       book[3]["count(1)"], 
          //       book[4]["count(1)"], 
          //       book[5]["count(1)"], 
          //       book[6]["count(1)"]
          //   ]
          // },
          // {
          //   name: '家具',
          //   type: 'line',
          //   data: [
          //     item[0]["count(1)"], 
          //     item[1]["count(1)"], 
          //     item[2]["count(1)"], 
          //     item[3]["count(1)"], 
          //     item[4]["count(1)"], 
          //     item[5]["count(1)"], 
          //     item[6]["count(1)"]
          //   ]
          // },
          // {
          //   name: '日用品',
          //   type: 'line',
          //   data: [
          //       fur[0]["count(1)"], 
          //       fur[1]["count(1)"], 
          //       fur[2]["count(1)"], 
          //       fur[3]["count(1)"], 
          //       fur[4]["count(1)"], 
          //       fur[5]["count(1)"], 
          //       fur[6]["count(1)"]
          //   ]
          // },
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