import React from 'react'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function Button({type = 'link',title,styles,action,to,className=""}) {
    let actions = useSelector(state => state.action)
     return (
          
          <div>{type === 'link'?
          (<>
          <Link to={to} className={(styles === undefined ? 'bg-gray-700 text-white':styles) + ` shadow-md px-5 py-2 rounded-lg ${className}`}  onClick={action} type={type}>{title}</Link>
          </>)
          :( <button className={(styles === undefined ? 'bg-gray-700  text-white':styles) + ` ${ actions.isLoading &&' opacity-50 dcursor-not-allowed '} shadow-md px-5 py-2 rounded-lg ${className}`} disabled={actions.isLoading} onClick={action} type={type}>{title}</button>
          )
          }
              
          </div>
     )
}
