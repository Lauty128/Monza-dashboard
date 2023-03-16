//----- Dependencies
    import axios from 'axios';

export async function getVehicles(page = 1, filters = ""){
    const url = filters === "" ?
    `${import.meta.env.VITE_HOST_API}?page=${page}` :
    `${import.meta.env.VITE_HOST_API}?page=${page}${filters}` 
    
    const data = await axios(url)
    return data
}

export async function getVehicle(id){
    const data = await axios(`${import.meta.env.VITE_HOST_API}/${id}`)
    return data
}