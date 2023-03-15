//axios封装
import http from "./index";

//获取各类型回收订单数量
// function signIn(data){
//     let baseURL = 'http://localhost:3001/api/signIn'
//     http.post(baseURL,data)
// }

//登录
function getRCN(type){
    let baseURL = `http://127.0.0.1:3001/chart/recyclecate/${type}`
    http.get(baseURL)
}

export {
    getRCN
}