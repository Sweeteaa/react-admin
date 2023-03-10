//createSlice状态切片

import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:'auth',
    initialState:()=>{
        const token = localStorage.getItem('token');

        //判断是否有token，没有token则为空，有token则有登录数据
        if(!token){
            return{
                isLogged:false,
                token:null,
                data:null,
                expirationTime:0 //登录状态失效时间
            }
        }
        
        return{
            isLogged:true,
            token,
            data:JSON.parse(localStorage.getItem('data')),
            expirationTime:+localStorage.getItem('expirationTime')
        }

    },
    reducers:{
        login(state, action){
            state.isLogged = true;
            state.token = action.payload.token;
            state.data = action.payload.data;
            //获取当前时间戳
            const currentTime = Date.now();
            //设置登录有效时间
            const timeout = 1000 * 60 * 60 * 24 * 7; //一周
            // const timeout = 10000 ; //test 10s
            state.expirationTime = currentTime + timeout; //设置失效日期

            localStorage.setItem('token', state.token);
            localStorage.setItem('data',JSON.stringify(state.data))
            localStorage.setItem('expirationTime', state.expirationTime + "")
        },
        logout(state, action){
            state.isLogged = false;
            state.token = null;
            state.data = null;

            
            localStorage.removeItem('token');
            localStorage.removeItem('data');
            localStorage.removeItem('expirationTime')
        }
    }
})

export const {login, logout} = authSlice.actions
export const userReducer = authSlice.reducer