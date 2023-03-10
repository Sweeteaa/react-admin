//axios封装
import http from "./index";

//注册
function signIn(data){
    let baseURL = 'http://localhost:3001/api/signIn'
    http.post(baseURL,data)
}

//登录
function login(data){
    let baseURL = 'http://localhost:3001/api/login'
    http.post(baseURL,data)
}

export {
    signIn,
    login
}