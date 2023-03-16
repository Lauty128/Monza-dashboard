//----- Dependencies
import { createContext, useState, useContext } from "react";

//----- Services
import { getVehicles } from "../services";

//----- Components
import filtersHandler from '../utils/filters';


export const vehiclesContext = createContext(null)

export function VehiclesContextProvider({ children }){

    //---- Hooks
    const [ vehicles, setVehicles ] = useState(null)
    const [ page, setPage ] = useState({ page : 1 })
    const [ filters , setFilters ] = useState({})

    //---- Functions
    async function filterVehicles(newPage = 1){
        const filtersString = filtersHandler(filters)
        const response = await getVehicles(newPage, filtersString)

        if(response.status === 200 || response.status === 204){
            setVehicles(response.data.docs)
            delete response.data.docs
            setPage(response.data)
        }
  }

    //---- return JSX
    return(
        <vehiclesContext.Provider value={{
            vehicles, setVehicles,
            filters, setFilters,
            page, setPage,
            filterVehicles
        }}>
            { children }
        </vehiclesContext.Provider>
    )
}

export const VehicleContext = () => useContext(vehiclesContext) 
