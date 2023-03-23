//----- Dependencies
import axios from 'axios';


export async function deleteVehicle(id){
    const data = await axios.delete(`${import.meta.env.VITE_HOST_API}/${id}`)
    return data
}

export async function modifyVehicle(id, body){
    const data = await axios.put(`${import.meta.env.VITE_HOST_API}/${id}`, body)
    return data
}

export async function newVehicle(body){
    return await axios.post(`${import.meta.env.VITE_HOST_API}`, body)
                    .then(data => data)
}