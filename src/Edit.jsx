import React, { useEffect, useState } from 'react'
import { editlistdataAPI } from './service/allApi'

function Edit({ details, setEditstatus }) {
    const [show, setShow] = useState(false)
    const [editdetailsname, setEditdetailsname] = useState({})
    const [editdetailsphone, setEditdetailsphone] = useState({})
    const [editdetailsemail, setEditdetailsemail] = useState({})


    const handleShow = () => {
        setShow(true)
        setEditdetailsname(details.name)
        setEditdetailsphone(details.phone)
        setEditdetailsemail(details.email)
    }
    const handleClose = () => {
        setShow(false)
    }

    const handleEdit = async (id) => {
        const updateddata = {
            name: editdetailsname,
            phone: editdetailsphone,
            email: editdetailsemail
        }
        const result = await editlistdataAPI(id, updateddata)
        if (result.status >= 200 && result.status < 300) {
            alert(`Success`)
            setEditstatus(result)
            handleClose()
        } else {
            alert(`dghsgdf`)
        }
    }

    console.log(details);
    useEffect(() => {

    }, [])
    console.log(editdetailsname);
    console.log(editdetailsphone);
    console.log(editdetailsemail);
    console.log(details.id);

    return (
        <>
            <div style={{ position: "relative" }}>
                <button onClick={handleShow} className='px-2 py-1 text-lime-50 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer'>Edit</button>
            </div>
            {show && <div className='' style={{ zIndex: "2" }}>
                <div className='' style={{ position: "absolute", top: "15%", left: "25%" }}>
                    <div className='border-4 bg-amber-50 border-stone-500 p-7 text-center'>
                        <h1 className='mb-3 text-3xl text-stone-600 font-bold'>Edit Details</h1>
                        <div className='flex flex-col'>
                            <input value={editdetailsname} onChange={(e) => setEditdetailsname(e.target.value)} type="text" placeholder='Name' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input value={editdetailsphone} onChange={(e) => setEditdetailsphone(e.target.value)} type="phone" placeholder='Phone Number' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                            <input value={editdetailsemail} onChange={(e) => setEditdetailsemail(e.target.value)} type="email" placeholder='Email' className='py-2 text-center mt-3 px-2 lg:w-2xl md:w-xl w-70 border-2 border-stone-700' />
                        </div>

                        <div className='flex justify-between mt-3'>
                            <button onClick={() => handleEdit(details.id)} className='px-3 py-2 text-white bg-green-500 hover:bg-green-700 hover:cursor-pointer'>Save Changes</button>
                            <button onClick={handleClose} className='px-3 py-2 text-white bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Close</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    )
}

export default Edit