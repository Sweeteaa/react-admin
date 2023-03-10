import { useSelector } from 'react-redux';
import { store } from '../store';
import { logout } from '../store/reducer/authSlice';
import { useEffect } from 'react';

const useAutoLogout = ()=>{
    //创建一个useEffect，用来处理登录状态
  const auth = useSelector(state => state.auth)

  useEffect(()=>{
        const timeout = auth.expirationTime -  Date.now()
        //判断timeout值
        if(timeout < 6000){
        return;
        }
        const timer = setTimeout(()=>{
            store.dispatch(logout())
        },timeout)

        //关闭定时器
        return ()=>{
        clearTimeout(timer)
        }
    },[auth])
}

export default useAutoLogout;