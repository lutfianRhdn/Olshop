import React from 'react'

function InputLabel({type="text",label="Label",labelSize="2xl",width='full',height='full',className="",mx="10",error, ...otherProps},ref) {
     return (
          <div className={`flex flex-col mx-${mx} ${className}`}>
               <label className={`text-${labelSize} ml-2 mb-2`}>{label}</label>
               
               <input type={type}  className={` w-${width} h-${height} border border-gray-500 py-2 px-5 focus:border-0  rounded-lg `} ref={ref}  {...otherProps} />
               <p className="small text-red-500 italic">{error} </p>
          </div>
     )
}
export default React.forwardRef( InputLabel)