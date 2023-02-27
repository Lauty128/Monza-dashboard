const allFilters = [ 'owner','type','mark','sort',"sale_date" ]

export default function filtersHandler(filters){
    let filtersString = ''

    const newFilters = allFilters.map(name=>{ 
        if(filters[name]) return {name, value:filters[name]} 
    })

    newFilters.forEach(filter=>{
        if(filter === undefined) return
        filtersString += `${filter.name}=${filter.value}&`
    })
   //if(find.owner === "Otros") find.owner = { $nin:["Sebastian del Soto","Sergio Castor","Juan Silverii","Negro Machi","Hernan Gorostieta"] }

    return `&${filtersString.slice(0,filtersString.length - 1)}`
}