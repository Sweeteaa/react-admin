//使用redux对状态进行管理·

import {configureStore} from "@reduxjs/toolkit"
import {userReducer} from './reducer/authSlice'

export const store = configureStore({
    reducer:{
        auth:userReducer,
    }
})
