const useGetWeek = ()=>{
    let now = new Date() 
    let arr = []
    for(let i = 0; i < 7; i++){
        let oneweekdate = new Date(now-24*3600*i*1000);
        let y = oneweekdate.getFullYear();
        let m = oneweekdate.getMonth()+1;
        let d = oneweekdate.getDate();
        arr.push(y+'-'+m+'-'+d);
    }
    return arr.reverse()
}

export default useGetWeek;