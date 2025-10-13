import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { deletelistdataAPI, getlistdataAPI } from './service/allApi'

function Home() {
    const [getdetails, setGetdetails] = useState([])
    const [deletestatus, setDeletestatus] = useState([])

    const getDetails = async () => {
        const result = await getlistdataAPI()
        setGetdetails(result.data)
    }
    console.log(getdetails);

    const handleDelete = async (id) => {
        const result = await deletelistdataAPI(id)
        if (result.status >= 200 && result.status < 300) {
            setDeletestatus(result)
        } else {
            alert(`Something Went Wrong`)
        }

    }


    useEffect(() => {
        getDetails()
    }, [deletestatus])
    return (
        <>
            <div className='min-h-screen '>
                <div className='w-full  p-7 '>
                    <table className='w-full  border-3 border-stone-400'>
                        <thead className='text-center font-bold'>
                            <tr >
                                <td className='py-2'>sl.No</td>
                                <td>Name</td>
                                <td>Phone Number</td>
                                <td>Email</td>
                                <td className='flex justify-center items-center py-2'>
                                    <Link to={'/add'}> <button className='px-3 py-1 text-lime-50 bg-green-500 hover:bg-green-700 hover:cursor-pointer'>Add +</button></Link>
                                </td>
                            </tr>
                        </thead>

                        <tbody className='text-center'>
                            {getdetails?.map((item, index) => (<tr>
                                <td>{index + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.phone}</td>
                                <td>{item?.email}</td>
                                <td className='flex justify-around py-2'>
                                    <Link to={'/view'}> <button className='px-2 py-1 text-lime-50 bg-blue-500 hover:bg-blue-700 hover:cursor-pointer'>View</button></Link>
                                    <Link to={'/edit'}><button className='px-2 py-1 text-lime-50 bg-violet-500 hover:bg-violet-700 hover:cursor-pointer'>Edit</button></Link>
                                    <button onClick={() => handleDelete(item?.id)} className='px-2 py-1 text-lime-50 bg-red-500 hover:bg-red-700 hover:cursor-pointer'>Delete</button>
                                </td>
                            </tr>))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Home