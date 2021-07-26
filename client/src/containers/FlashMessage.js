import React,{useRef,useState} from 'react'

export default function FlashMessage({message,type,onClose}) {
     const flash = useRef()
     const [className,setClassName] = useState(`transition duration-200 ease-in-out transform hover:-translate-y-1  mx-5 my-5  px-6 py-3 rounded-md shadow ${type==='error'?'bg-red-400 border-red-500' :'bg-green-400 border-green-500'}  border-2 opacity-90  flex justify-between`)
     const handleClose =()=>{
           setClassName(className.concat(' scale-0 '))
           setTimeout(()=>{
               setClassName(className.concat(' hidden'))
               message=''
           },500)
           onClose()
     }
     return message.length !== 0 ?(
          <div >
               <div ref={flash} className={className}>
                    <p className="small italic text-white"> {message}</p>
                    <p className="text-gray-200 hover:text-gray-400 cursor-pointer" onClick={handleClose}>X</p>
               </div>
               
          </div>
     ): ''
}
