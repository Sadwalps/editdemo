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
