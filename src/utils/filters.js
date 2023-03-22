//----- Data
import { filters_input } from '@/data/form'

export default function filtersHandler(filters){
    let filtersString = ''

    const newFilters = filters_input.map(name=>{ 
        if(filters[name]) return {name, value:filters[name]} 
    })

    newFilters.forEach(filter=>{
        if(filter === undefined) return
        filtersString += `${filter.name}=${filter.value}&`
    })

    return `&${filtersString.slice(0,filtersString.length - 1)}`
}