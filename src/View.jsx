import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function View({ details }) {
  const [show, setShow] = useState(false)
  const handleshow = () => {
    setShow(true)
  }

  const handleClose = () => {
    setShow(false)
  }
  console.log(details);

  return (
    <>
      <div className='  ' style={{ position: "relative" }}>
        <button onClick={handleshow} className='px-2 py-1 text-lime-50 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer'>View</button>

        {show && <div className=' ' style={{ zIndex: "1" }}>
          <div className=' ' style={{ position: "absolute", top: "10%", right: "98%" }}>
            <div className='border-4 bg-amber-50 border-stone-500 flex flex-col lg:p-10 p-8'>
              <h1 className='mb-3 text-3xl text-stone-600 font-bold text-center'>Details</h1>
              <div className='flex flex-col'>
                <h1 className='text-2xl  font-bold mt-4 lg:w-2xl md:w-xl w-70'>Name:{details.name}</h1>
                <h2 className='text-xl  font-bold mt-2 lg:w-2xl md:w-xl w-70'>Phone Number: {details.phone}</h2>
                <h2 className='text-xl  font-bold mt-2 lg:w-2xl md:w-xl w-70'>Email Id:{details.email} </h2>
              </div>
              <div className=' mt-5'>
                <button onClick={handleClose} className='float-right px-3 py-2 text-white bg-stone-500 hover:bg-stone-700 hover:cursor-pointer'>Close</button>
              </div>
            </div>
          </div>
        </div>}
      </div>
    </>
  )
}

export default View