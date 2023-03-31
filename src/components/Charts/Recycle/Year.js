import React from 'react';
import EChartsReact from 'echarts-for-react';
import useGetWeek from '../../../hooks/useGetWeek'
import useGetWeekData from '../../../hooks/useGetWeekData';
import { useState,useCallback,useEffect } from 'react';
import axios from 'axios';

const Year = () => {
  let week = useGetWeek()
    // console.log(week[0],week[1],week[2],week[3],week[4],week[5],week[6])
    // let num = []
    // const [yi ,setYi] = useState()
    // const [er ,setEr] = useState()
    // const [san ,setSan] = useState()
    // const [si ,setSi] = useState()
    // const [wu ,setWu] = useState()
    // const [liu ,setLiu] = useState()
    // const [qi ,setQi] = useState()
    // const one = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[0]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setYi(res.data.data[0])
    //     });
    // },[])

    // const two = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[1]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setEr(res.data.data[0])
    //     });
    // },[])

    // const three = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[2]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setSan(res.data.data[0])
    //     });
    // },[])
    
    // const four = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[3]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setSi(res.data.data[0])
    //     });
    // },[])
    
    // const five = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[4]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setWu(res.data.data[0])
    //     });
    // },[])
    
    // const six = useCallback(async () => {
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[5]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setLiu(res.data.data[0])
    //     });
    // },[])

    // const seven = useCallback(async () => {
    //     // console.log(day)
    //     await axios({
    //         method:'get',
    //         url:`http://127.0.0.1:3001/chart/recycleday/${week[6]}/${'书籍'}`,
    //     }).then((res) => {
    //         // console.log('res', res);
    //         setQi(res.data.data[0])
    //     });
    // },[])
    
    // useEffect(() => {
    //     one()
    //     two()
    //     three()
    //     four()
    //     five()
    //     six()
    //     seven()
    // }, [one,two,three,four,five,six,seven]);

    // num[0] = yi
    // num[1] = er
    // num[2] = san
    // num[3] = si
    // num[4] = wu
    // num[5] = liu
    // num[6] = qi
    // console.log(num)
    // console.log(week)
    let cloth = useGetWeekData('衣服')
    let book = useGetWeekData('书籍')
    let fur = useGetWeekData('家具')
    let item = useGetWeekData('日用品')
    // console.log(cloth,book,fur,item)
    // console.log(book[2]["count(1)"])
    let option = {
        title: {
          text: '近七日新增订单'
        },
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
          {
            name: '衣物',
            type: 'line',
            data: [
                cloth[0]["count(1)"], 
                cloth[1]["count(1)"], 
                cloth[2]["count(1)"], 
                cloth[3]["count(1)"], 
                cloth[4]["count(1)"], 
                cloth[5]["count(1)"], 
                cloth[6]["count(1)"]
            ]
          },
          {
            name: '书籍',
            type: 'line',
            data: [
              book[0]["count(1)"], 
              book[1]["count(1)"], 
              book[2]["count(1)"], 
              book[3]["count(1)"], 
              book[4]["count(1)"], 
              book[5]["count(1)"], 
              book[6]["count(1)"]
          ]
          },
          {
            name: '家具',
            type: 'line',
            data: [
              fur[0]["count(1)"], 
              fur[1]["count(1)"], 
              fur[2]["count(1)"], 
              fur[3]["count(1)"], 
              fur[4]["count(1)"], 
              fur[5]["count(1)"], 
              fur[6]["count(1)"]
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

export default Year;