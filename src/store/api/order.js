//axios封装
import http from "./index";

//注册
function updateOrderState(data,id){
    let baseURL = `http://127.0.0.1:3001/user/order/updateOrderState/${id}`
    // console.log(data,id)
    http.post(baseURL,data)
}


export {
    updateOrderState
}