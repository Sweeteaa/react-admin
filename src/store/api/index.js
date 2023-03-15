//调用axios

import axios from "axios";

let http ={
    post: function(url,params){
        params = params || {};
        return new Promise((resolve,reject) => {
          axios({
                method:'post',
                url:url,
                data:params,
                headers:{'Content-Type':'application/x-www-form-urlencoded'}
            })
          .then((res) => {
                resolve( res );
                console.log(res)
            })
          .catch((error) => {
                reject( error );
                console.log(error)
            });
        })
    },

    get: function(url,param){
        // params = params || {};
        return new Promise((resolve, reject)=>{
            axios({
                method:'get',
                url:url,
                data:{username:param},
            })
            .then((res)=>{
                // console.log(res.data.data);
                resolve(res.data.data)
            })
            .catch((error)=>{
                reject(error)
                console.log(error);
            })
        })
    },

    getRC: function(url,param){
        // params = params || {};
        return new Promise((resolve, reject)=>{
            axios({
                method:'get',
                url:url,
            })
            .then((res)=>{
                // console.log(res.data.data);
                resolve(res.data.data)
            })
            .catch((error)=>{
                reject(error)
                console.log(error);
            })
        })
    }
}

export default http;