import React from 'react'

export default function DropdownForm({data=[],className='',key='name',title='title',onSelected = true }) {
     return (
          <div>
               <label className="text-normal ml-2 mb-2">{title}</label>
               <select className={`border border-gray-500 rounded-lg w-full py-2.5 px-5 ${className}`}>
                    {data.map((el,index)=>{
                         return (
                              <option className="border rounded-md mt-2.5" key={index} selected="selected" value={el.name}> {el[key]}</option>
                              )
                         })}
               </select>
          </div>
     )
}
