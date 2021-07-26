import React, { useRef, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { RegisterAction } from '../redux/actions/AuthAction'
import InputLabel from '../containers/InputLabel'
import Button from '../containers/Button'
import FlashMessage from '../containers/FlashMessage'
import useLocalStorage from '../config/useLocalStorage'

export const Register = (props) => {
const nameRef = useRef()
const emailRef = useRef()
const passwordRef = useRef()
const confirmRef = useRef()
const [errors,setErrors] = useState({
     name:'',
     email:'',
     password:'',
})
const [user,setUser] = useLocalStorage('user')
const [messages,setMessages] = useState('')
     const handleSubmit =(e) => {
          e.preventDefault()
          props.register({
               name:nameRef.current.value,
               email:emailRef.current.value,
               password:passwordRef.current.value,
               confirmPasswod:confirmRef.current.value
          }).then((res) =>{
               setUser(res)
               props.history.push('/')
          }).catch(err => {
               console.log('err',err.errors)
               if (err.errors !== undefined) setErrors(err.errors)
               setMessages(err.message)
          })
     }

     return (
          <div style={{backgroundColor: '#EDF2EF'}}>
               <div className="container mx-auto py-10 px-20 ">
                    <div className="bg-white shadow-lg flex justify-center items-center" style={{height:'86vh'}}>
                         <img src="https://cdn.maubelajarapa.com/wp-content/uploads/2021/03/03114920/happy-people-shopping-online_74855-5865.jpg" alt="" className="w-1/2" />
                         <div className="w-1/2 bg-gray-200 h-full flex flex-col py-5 items-center">
                              <h1 className="text-5xl font-thin"> <span className="font-bold"> Reg</span>ister</h1>
                              <form className="my-auto w-full" onSubmit={handleSubmit}>
                              <FlashMessage message={messages} type="error" />
                                   <InputLabel className="my-5" label="Name" ref={nameRef} error={errors.name} />
                                   <InputLabel className="my-5" label="Email" ref={emailRef} error={errors.email} />
                                   <div className="flex px-8 my-5">
                                        <InputLabel className="" width="full" mx="2" ref={passwordRef} label="Password" type="password" error={errors.password} />
                                        <InputLabel width="full" className="" mx="2" ref={confirmRef} label="Confirm" type="password" />
                                   </div>
                                   <div className="flex w-full justify-end pr-10 items center">
                                        <Link to="/login" className="italic mx-2 text-blue-400">I  have Account</Link>
                                        <Button className="" type="submit" title="Register" />
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
          </div>
     
     )
}

const mapStateToProps = (state) => ({
     auth: state.auth
})

const mapDispatchToProps = (dispatch) =>({
     register: (data) =>dispatch(RegisterAction(data))
})


export default connect(mapStateToProps, mapDispatchToProps)(Register)
