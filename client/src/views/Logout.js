import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import useLocalStorage from '../config/useLocalStorage'
import { logoutAction } from '../redux/actions/AuthAction'

export const Logout = (props) => {
     const [user,setUser]= useLocalStorage('user')
     useEffect(()=>{
          props.logout(user).then(res=>{
               setUser({})
               props.history.push('/')
          })
     },[])
     return(
          <div>

          </div>
     )
}

const mapStateToProps = (state) => ({
     
})

const mapDispatchToProps = (dispatch) => ({
     logout:(data)=>dispatch(logoutAction(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
