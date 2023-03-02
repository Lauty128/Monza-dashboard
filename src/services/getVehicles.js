//----- Dependencies
    import axios from 'axios';

export async function getVehicles(page = 1, filters = ""){
    const data = await axios(`${import.meta.env.VITE_HOST_API}?page=${page}${filters}`)
    return data
}

export async function getVehicle(id){
    const data = await axios(`${import.meta.env.VITE_HOST_API}/${id}`)
    return data
}
export async function getFiltersVehicles(page = 1, filters = ""){
    const data = await axios(`${import.meta.env.VITE_HOST_API}?page=${page}${filters}`)
    return data
}