import { api } from '../../config/api'
import { actionType } from '../constants/action-types'

export const create= (data,token)=>(dispatch)=>{
     return new Promise((resolve,reject)=>{
          dispatch({type: actionType.SET_LOADING,payload:true})
          console.log(data,token);
          api().post('/user',data,{},token).then((response)=>{
               dispatch({type:actionType.SET_MESSAGE,payload:{type:'success',message:'User had Ben Crated'}})
              return  resolve(response.data);
          }).catch((err)=>{
               if (data.password !== data.confirmPassword) {
                   err.errors.password = ['password not match'];
               }
               return reject(err);
          }).finally(()=>{
               dispatch({type: actionType.SET_LOADING,payload:false})
          })
     })
}
export const update =(data,token) => (dispatch)=>{
     return new Promise((resolve,reject) =>{
          dispatch({type: actionType.SET_LOADING,payload:true})
          console.log(data)
          api().put(`/user/${data.id}`,data,{},token).then(res=>{
               dispatch({type:actionType.SET_MESSAGE,payload:{type:'success',message:'User had Ben Updated'}})
               return resolve(res.data)
          }).catch(err=>{
               return reject(err.data)
          }).finally(()=>{
               dispatch({type: actionType.SET_LOADING,payload:false})
          })
     })
}