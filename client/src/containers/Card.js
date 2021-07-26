import React from 'react'

export default function Card({header,children}) {
     return (
          <div className="bg-white w-full   rounded-xl overflow-y-auto" style={{height:'75vh'}}>
               <div className="w-full border-b px-6 py-3 border-gray-300">
                    {header}
               </div>
               <div className="w-full px-6 py-6">
                    {children}
               </div>
          </div>
     )
}
