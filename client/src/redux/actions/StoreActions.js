import { api } from "../../config/api"

export const deleteStore=(data,token)=>dispatch=> {
    return new Promise((resolve,reject)=>{
        api().remove(`/store/${data.id}`,{},token).then(res=>{
            console.log(res)
            return resolve(res)
        }).catch(err=>{
            return reject(err)
        })
    })
}

export const createStore=(data,token) =>dispatch=>{
    return new Promise((resolve,reject)=>{
        const payload ={
            name:data.store,
            email:data.email,
            img_path:data.img
        };
        api().post('/store',payload,{},token).then(res=>{
            return resolve(res.data)
        }).catch(err=>{
            return reject(err)
        })
    })
}