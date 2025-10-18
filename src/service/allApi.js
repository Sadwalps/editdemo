import { commonAPI } from "./commonApi"
import { serverURL } from "./serverUrl"

export const addlistdataAPI = async(reqbody)=>{
    return await commonAPI(`POST`,`${serverURL}/listdata`, reqbody)
}

export const getlistdataAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/listdata`,"")
}

export const deletelistdataAPI = async(id)=>{
    return await commonAPI(`DELETE`, `${serverURL}/listdata/${id}`,{})
}

export const editlistdataAPI = async(id,data)=>{
    return await commonAPI(`PUT`, `${serverURL}/listdata/${id}`,data)
}

export const addselectdataAPI = async(reqbody)=>{
    return await commonAPI(`POST`, `${serverURL}/selectedlist`,reqbody)
}

export const getselectlistdataAPI = async()=>{
    return await commonAPI(`GET`, `${serverURL}/selectedlist`,"")
}

