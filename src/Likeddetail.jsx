import React, { useEffect, useState } from 'react'
import { addselectdataAPI, getselectlistdataAPI } from './service/allApi'

function Likeddetail({ details }) {
    const [show, setShow] = useState(false)
    const [select, setSelect] = useState({
        name: details.name,
        phone: details.phone,
        email: details.email
    })

    const [selectdetails, setSelectdetails] = useState([])

    const handleshow = () => {
        setShow(true)
    }

    const handleClose = () => {
        setShow(false)
    }

    const handleAdd = async () => {
        const { name, phone, email } = select
        console.log(name, phone, email);
       
        console.log(selectdetails);
        if (selectdetails.name == name) {
            alert(`deatils already added`)
        } else {
            const result = await addselectdataAPI({ name, phone, email })
            if (result.status >= 200 && result.status < 300) {
                alert(`Details added to selected list`)
                handleClose()
            } else {
                alert(`Something went wrong`)
            }
        }
    }




    const getselectdata = async () => {
        const result = await getselectlistdataAPI()
        setSelectdetails(result.data)
    }
    console.log(selectdetails);

    useEffect(() => {
        getselectdata()
    }, [])



    return (
        <>
            <div>
                <button onClick={handleshow} className='px-2 py-1 text-lime-50 bg-pink-500 hover:bg-pink-700 hover:cursor-pointer'>select</button>
                {/* <button className='px-2 py-1 text-lime-50 bg-pink-800 '>selected</button> */}
            </div>
            {show && <div className='' style={{ zIndex: "2" }}>
                <div className='' style={{ position: "absolute", top: "15%", left: "25%" }}>
                    <div className='border-4 bg-amber-50 border-stone-500 p-7 text-center'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold'>Select Details</h1>
                        <div className='flex flex-col'>
                            <input type="text" value={select.name} readOnly placeholder='Name' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input type="phone" value={select.phone} readOnly placeholder='Phone Number' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input type="email" value={select.email} readOnly placeholder='Email' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                        </div>

                        <div className='flex justify-between mt-3'>
                            <button onClick={handleAdd} className='px-3 py-2 text-white bg-pink-500 hover:bg-pink-700 hover:cursor-pointer'>Add To selectedlist</button>
                            <button onClick={handleClose} className='px-3 py-2 text-white bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Close</button>
                        </div>
                    </div>
                </div>
            </div>}

        </>
    )
}

export default Likeddetail