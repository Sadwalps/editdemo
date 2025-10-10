import React from 'react'
import { Link } from 'react-router-dom'

function Add() {
    return (
        <>
            <div className='min-h-screen ' style={{ position: "relative" }}>
                <div className='flex justify-center items-center w-screen' style={{ position: "absolute", top: "20%" }}>
                    <div className='border-4 border-stone-500 p-7 text-center'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold'>Add Details</h1>
                        <div className='flex flex-col'>
                            <input type="text" placeholder='Name' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input type="phone" placeholder='Phone Number' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input type="email" placeholder='Email' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                        </div>

                        <div className='flex justify-between mt-3'>
                            <button className='px-3 py-2 text-white bg-green-500 hover:bg-green-700 hover:cursor-pointer'>Add</button>
                            <button className='px-3 py-2 text-white bg-stone-500 hover:bg-stone-700 hover:cursor-pointer'>cancel</button>
                            <Link to={'/'}><button className='px-3 py-2 text-white bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Close</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add