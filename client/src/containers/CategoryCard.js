import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryCard({title,size =24,imgSrc="",to='/'}) {
     return (
          <div>
               <div className="w-full px-5 py-5" >
                    <Link to={to} className="flex flex-col items-center">
                         <img src={imgSrc} className={`w-${size} h-${size} rounded-xl bg-red-500`} alt={title}></img>
                         <p>{title}</p>
                    </Link>
               </div>
          </div>
     )
}
