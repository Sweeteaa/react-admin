import React from 'react';
import EChartsReact from 'echarts-for-react';
import { useState,useCallback,useEffect } from 'react';
import axios from 'axios';

const UType = () => {
    const [UCD, getUCD] = useState([])
    const [UBD, getUBD] = useState([])
    const [UFD, getUFD] = useState([])
    const [UDD, getUDD] = useState([])

    //获取配饰种类订单数
    const UClothData = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/usecate/${'配饰'}`,
        }).then((res) => {
            // console.log('res', res.data.data);
            getUCD(res.data.data[0])
        });
    },[])

    //获取装饰种类订单数
    const UBookData = useCallback(async () => {
      await axios({
          method:'get',
          url:`http://127.0.0.1:3001/chart/usecate/${'装饰'}`,
      }).then((res) => {
          // console.log('res', res.data.data);
          getUBD(res.data.data[0])
        });
    },[])

    //获取食物种类订单数
    const UFoodData = useCallback(async () => {
      await axios({
          method:'get',
          url:`http://127.0.0.1:3001/chart/usecate/${'食物'}`,
      }).then((res) => {
          // console.log('res', res.data.data);
          getUFD(res.data.data[0])
      });
    },[])

    //获取日用品种类订单数
    const UDayData = useCallback(async () => {
      await axios({
          method:'get',
          url:`http://127.0.0.1:3001/chart/usecate/${'日用品'}`,
      }).then((res) => {
          // console.log('res', res.data.data);
          getUDD(res.data.data[0])
      });
    },[])

    useEffect(() => {
      UClothData()
      UBookData()
      UFoodData()
      UDayData()
    }, [UClothData,UFoodData,UDayData]);

    // console.log(UCD["count(1)"],UFD["count(1)"],UDD["count(1)"])
  
    let option = {
        title: {
          text: '换购物品种类回收占比',
          // subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'top'
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
            radius: [30, 150],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: UCD["count(1)"], name: '配饰' },
              { value: UBD["count(1)"], name: '装饰' },
              { value: UFD["count(1)"], name: '食物' },
              { value: UDD["count(1)"], name: '日用品' },
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

export default UType;