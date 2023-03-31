//获取各回收订单种类一周七天每天的订单数

import useGetWeek from "./useGetWeek";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

const useGetWeekUse = (type)=>{
    // let week = useGetWeek()
    // console.log(week)
    let now = new Date() 
    let arr = []
    for(let i = 0; i < 7; i++){
        let oneweekdate = new Date(now-24*3600*i*1000);
        let y = oneweekdate.getFullYear();
        let m = oneweekdate.getMonth()+1;
        let d = oneweekdate.getDate();
        arr.push(y+'-'+m+'-'+d);
    }
    let week = arr.reverse()
    let num = []
    const [yi ,setYi] = useState([])
    const [er ,setEr] = useState([])
    const [san ,setSan] = useState([])
    const [si ,setSi] = useState([])
    const [wu ,setWu] = useState([])
    const [liu ,setLiu] = useState([])
    const [qi ,setQi] = useState([])
    const one = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[0]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setYi(res.data.data[0])
        });
    },[])

    const two = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[1]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setEr(res.data.data[0])
        });
    },[])

    const three = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[2]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setSan(res.data.data[0])
        });
    },[])
    
    const four = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[3]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setSi(res.data.data[0])
        });
    },[])
    
    const five = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[4]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setWu(res.data.data[0])
        });
    },[])
    
    const six = useCallback(async () => {
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[5]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setLiu(res.data.data[0])
        });
    },[])

    const seven = useCallback(async () => {
        // console.log(day)
        await axios({
            method:'get',
            url:`http://127.0.0.1:3001/chart/useday/${week[6]}/${type}`,
        }).then((res) => {
            // console.log('res', res);
            setQi(res.data.data[0])
        });
    },[])
    
    useEffect(() => {
        one()
        two()
        three()
        four()
        five()
        six()
        seven()
    }, [one,two,three,four,five,six,seven]);

    num[0] = yi
    num[1] = er
    num[2] = san
    num[3] = si
    num[4] = wu
    num[5] = liu
    num[6] = qi

    return num
}

export default useGetWeekUse;