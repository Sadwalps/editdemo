import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { addlistdataAPI } from './service/allApi';

function Add() {
    const [listdetails, setListdetails] = useState({
        name: "",
        phone: "",
        email: ""
    })
    console.log(listdetails);

    const handleCancel = () => {
        setListdetails({
            name: "",
            phone: "",
            email: ""
        })
    }

    const navigate = useNavigate()

    const handleAdd = async () => {
        const { name, phone, email } = listdetails
        console.log(name, phone, email);
        if (!name || !phone || !email) {
            alert(`Fill the form completly`)
        } else {
            const result = await addlistdataAPI({ name, phone, email })
            if (result.status >= 200 && result.status < 300) {
                alert(`Details Successfully Added`)
                navigate('/')
            } else {
                alert(`Something Went Wrong`)
            }
        }
    }
    return (
        <>
            <div className='min-h-screen ' style={{ position: "relative" }}>
                <div className='flex justify-center items-center w-screen' style={{ position: "absolute", top: "20%" }}>
                    <div className='border-4 border-stone-500 p-7 text-center'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold'>Add Details</h1>
                        <div className='flex flex-col'>
                            <input value={listdetails.name} onChange={(e) => { setListdetails({ ...listdetails, name: e.target.value }) }} type="text" placeholder='Name' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input value={listdetails.phone} onChange={(e) => { setListdetails({ ...listdetails, phone: e.target.value }) }} type="phone" placeholder='Phone Number' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input value={listdetails.email} onChange={(e) => { setListdetails({ ...listdetails, email: e.target.value }) }} type="email" placeholder='Email' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                        </div>

                        <div className='flex justify-between mt-3'>
                            <button onClick={handleAdd} className='px-3 py-2 text-white bg-green-500 hover:bg-green-700 hover:cursor-pointer'>Add</button>
                            <button onClick={handleCancel} className='px-3 py-2 text-white bg-stone-500 hover:bg-stone-700 hover:cursor-pointer'>cancel</button>
                            <Link to={'/'}><button className='px-3 py-2 text-white bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Close</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Add