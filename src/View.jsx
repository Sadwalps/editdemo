import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function View({details}) {
 const[show, setShow] =useState(false)
const handleshow = ()=>{
setShow(true)
}

const handleClose = ()=>{
  setShow(false)
}
console.log(details);



 
  return (
    <>
    <div className='  ' style={{position:"relative"}}>
       <button onClick={handleshow} className='px-2 py-1 text-lime-50 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer'>View</button>
    
     {show&& <div  className=' ' style={{ zIndex:"1" }}>
                <div className=' ' style={{ position: "absolute", top: "5%",right:"100%" }}>
                    <div className='border-4 bg-amber-950 border-stone-500 flex flex-col lg:p-20 p-8'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold text-center'>Details</h1>
                       <div>
                        <h1 className='text-2xl text-amber-50 font-bold mt-4'>Name:{details.name}</h1>
                        <h2  className='text-xl text-amber-50 font-bold mt-2'>Phone Number: {details.phone}</h2>
                        <h2  className='text-xl text-amber-50 font-bold mt-2'>Email Id:{details.email} </h2>
                       </div>

                        <div className=' mt-5'>
                           <button onClick={handleClose} className='float-right px-3 py-2 text-white bg-stone-500 hover:bg-stone-700 hover:cursor-pointer'>Close</button>
                        </div>
                    </div>
                </div>
            </div> }
            </div>
    </>
  )
}

export default View