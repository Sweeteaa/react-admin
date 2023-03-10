import React from 'react';
import { useState, useRef } from 'react';
import { login } from '../../store/reducer/authSlice';
import { store } from '../../store/index';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import classes from './Enter.module.css'


const Enter = () => {
    const [isLogin, setIsLogin] = useState(true)

    // const [regFn, {error:regError}] = useRegisterMutation()
    const numberInf = useRef()
    const pwdInf = useRef()
    
    const navigate = useNavigate();

    const submitHandler = (e)=>{
        e.preventDefault();
        
        const username = numberInf.current.value
        const password = pwdInf.current.value
        if(isLogin){
            console.log('登录-->', username, password)
            let params = {
                username:username,
                password:password,
            }
            let url = 'http://localhost:3001/api/login'
            return new Promise((resolve,reject) => {
                axios({
                      method:'post',
                      url:url,
                      data:params,
                      headers:{'Content-Type':'application/x-www-form-urlencoded'}
                  })
                .then((res) => {
                      resolve( res );
                      store.dispatch(login({
                          token:res.data.token,
                          data:res.data.data,
                      }))
                      navigate('/home/first',{replace:true})
                      console.log(res)
                  })
                .catch((error) => {
                      reject( error );
                      console.log(error)
                  });
              })
        }
    }
    return (
        <div className={classes.main}>
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes.name}>
                    <input ref={numberInf} type="text" placeholder={"账号"}/>
                </div>
                <div className={classes.psw}>
                    <input ref={pwdInf} type="password" placeholder={"密码"}/>
                </div>
                <div>
                    <button className={classes.btn}>{"登录"}</button>
                </div>
            </form>
        </div>
    );
};

export default Enter;