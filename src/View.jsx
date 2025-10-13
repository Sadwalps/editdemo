import React from 'react'
import { Link } from 'react-router-dom'

function View() {
  return (
    <>
     <div className='min-h-screen ' style={{ position: "relative" }}>
                <div className='flex justify-center items-center w-screen' style={{ position: "absolute", top: "20%" }}>
                    <div className='border-4 border-stone-500 lg:p-14 md:p-12 sm:p-12 p-8'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold text-center'>Details</h1>
                       <div>
                        <h1 className='text-2xl font-bold mt-4'>Name: sadwal ps</h1>
                        <h2  className='text-xl font-bold mt-2'>Phone Number: 44575686798</h2>
                        <h2  className='text-xl font-bold mt-2'>Email Id: sfdasg@gamil.com</h2>
                       </div>

                        <div className=' mt-5'>
                            <Link to={'/'}><button className='float-right px-3 py-2 text-white bg-stone-500 hover:bg-stone-700 hover:cursor-pointer'>Close</button></Link>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default View