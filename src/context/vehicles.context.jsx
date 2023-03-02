//----- Dependencies
import { createContext, useState } from "react";

//----- Services
import { getVehicles } from "../services";

//----- Components
import filtersHandler from '../utils/filters'


export const vehiclesContext = createContext(null)

export function VehiclesContextProvider({ children }){

    const [ vehicles, setVehicles ] = useState(null)
    const [ page, setPage ] = useState({ page : 1 })
    const [ filters , setFilters ] = useState({})

    async function filterVehicles(newPage = 1){
        const filtersString = filtersHandler(filters)
        const response = await getVehicles(newPage, filtersString)

        if(response.status === 200){
            setVehicles(response.data.docs)
            delete response.data.docs
            setPage(response.data)
        }
  }

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
