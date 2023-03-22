//----- Dependencies
import { createContext, useState, useContext, useEffect } from "react";

//----- Services
import { getVehicles } from "@/services";

//----- Components
import filtersHandler from '@/utils/filters';


export const vehiclesContext = createContext(null)

export function VehiclesContextProvider({ children }){

    //---- Hooks
    const [ vehicles, setVehicles ] = useState(null)
    const [ page, setPage ] = useState({ page : 1 })
    const [ filters , setFilters ] = useState({})

    //---- Functions
    useEffect(()=>{
        (async()=>{
            const filtersString = (filters == {}) ? '' : filtersHandler(filters)
            const response = await getVehicles(1, filtersString)
            
            changeHooks(response) 
        })()
    },[filters])

    async function getNewPage(newPage){
        const filtersString = (filters == {}) ? '' : filtersHandler(filters)
        const response = await getVehicles(newPage, filtersString)

        changeHooks(response)
    }

    function changeHooks(response){
        if(response.status === 200 || response.status === 204){
            setVehicles(response.data.docs)
            delete response.data.docs
            setPage(response.data)
        }
    }

    //---- return JSX
    return(
        <vehiclesContext.Provider value={{
            filters, setFilters,
            page, setPage, getNewPage,
            vehicles
        }}>
            { children }
        </vehiclesContext.Provider>
    )
}

export const VehicleContext = () => useContext(vehiclesContext) 
