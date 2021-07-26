import React, { useState } from 'react'
import {Link} from 'react-router-dom'
export default function Dropdown({button,menus=[]}) {
     const [show,setShow]=useState(false)
     const handleDropdown= ()=>{
          setShow(!show)
     }
     return (
          <div className="relative">
               <div onClick={handleDropdown} className="cursor-pointer">
                    { button}
               </div>
               {show &&(
                    <ul className=" absolute bg-white rounded-md  px-2 w-20 mt-3 shadow-md py-1 ">
                         {menus.map((el,index)=>{
                              return (
                                   <li className=" border-b border-gray-500 small hover:bg-gray-300 hover:rounded-md hover:border-b-0  " key={index}>
                                             <Link to={el.to}  >{el.title}</Link>
                                   </li>
                         )})}
                    </ul>
               )}
          </div>
     )
}
