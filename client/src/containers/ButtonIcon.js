import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useSelector} from 'react-redux'
export default function ButtonIcon({icon,onSubmit,title,className}) {
     const action = useSelector(state=>state.action)

     return (
          <div className={(title ==='delete' ?'bg-red-500':'bg-yellow-500') +` cursor-pointer rounded-full w-8 h-8 p-1.5 text-white ${action.isLoading && 'opacity-50 cursor-not-allowed'} `+className  } >
               <form onSubmit={onSubmit}>
                    <button type="submit" disabled={action.isLoading }>
                         <FontAwesomeIcon icon={icon} />
                    </button>
               </form>
          </div>
     )
}
