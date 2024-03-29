//----- Dependencies
import axios from 'axios';


export async function soldVehicle(id){
    const data = await axios.put(`${import.meta.env.VITE_HOST_API}/sold/${id}`)
    return data
}

export async function deleteVehicle(id){
    const data = await axios.put(`${import.meta.env.VITE_HOST_API}/delete/${id}`)
    return data
}

export async function modifyVehicle(id, body){
    const data = await axios.put(`${import.meta.env.VITE_HOST_API}/${id}`, body)
    return data
}

export async function newVehicle(body){
    return await axios.post(`${import.meta.env.VITE_HOST_API}`, body)
                    .then(data => data.data)
                    .catch(error => error.response.data)
}