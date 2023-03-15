import React from 'react';
import EChartsReact from 'echarts-for-react';
import { useState,useCallback,useEffect } from 'react';
import axios from 'axios';

const Type = () => {
  const [RCD, getRCD] = useState([])
  const [RBD, getRBD] = useState([])
  const [RFD, getRFD] = useState([])
  const [RDD, getRDD] = useState([])

  //获取衣服种类订单数
  const RClothData = useCallback(async () => {
      await axios({
          method:'get',
          url:`http://127.0.0.1:3001/chart/recyclecate/${'衣服'}`,
      }).then((res) => {
          // console.log('res', res.data.data);
          getRCD(res.data.data[0])
      });
  },[])

  //获取书籍种类订单数
  const RBookData = useCallback(async () => {
    await axios({
        method:'get',
        url:`http://127.0.0.1:3001/chart/recyclecate/${'书籍'}`,
    }).then((res) => {
        // console.log('res', res.data.data);
        getRBD(res.data.data[0])
    });
},[])

//获取家具种类订单数
const RFurData = useCallback(async () => {
  await axios({
      method:'get',
      url:`http://127.0.0.1:3001/chart/recyclecate/${'家具'}`,
  }).then((res) => {
      // console.log('res', res.data.data);
      getRFD(res.data.data[0])
  });
},[])

//获取日用品种类订单数
const RDayData = useCallback(async () => {
  await axios({
      method:'get',
      url:`http://127.0.0.1:3001/chart/recyclecate/${'日用品'}`,
  }).then((res) => {
      // console.log('res', res.data.data);
      getRDD(res.data.data[0])
  });
},[])

  useEffect(() => {
    RClothData()
    RBookData()
    RFurData()
    RDayData()
  }, [RClothData,RBookData,RFurData,RDayData]);

  // console.log(RCD["count(1)"])

    let option = {
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
              { value: RCD["count(1)"], name: '衣物' },
              { value: RBD["count(1)"], name: '书籍' },
              { value: RFD["count(1)"], name: '家具' },
              { value: RDD["count(1)"], name: '日用品' },
            ]
          }
        ]
      };
    return (
        <div>
            <div>回收物品种类回收占比</div>
            <EChartsReact option={option} style={{height:'450px',width:'500px'}}/>
        </div>
    );
};

export default Type;