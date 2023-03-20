//----- Dependencies
    import { vehiclesContext } from "@/context/vehicles.context";

//----- Hooks
    import { useContext, useRef, useState } from 'react'

//----- Assets
    import { MdRestartAlt } from 'react-icons/md'

//----- Data
    import { clientsData } from "@/data/form";


export function Filters(props){

    //----- Hooks
    const { setFilters } = useContext(vehiclesContext)
    const [ localFilters, setLocalFilters ] = useState({})
    const formRef = useRef(null)
    
    //----- Functions
    async function submitHandler(e){
        e.preventDefault()
        setFilters(localFilters)
    }

    async function resettHandler(e){
        e.preventDefault()
        setLocalFilters({})
        setFilters({})
        // the second parameter indicates that the filters must be reset
        
        if(formRef.current !== null){
            formRef.current.reset()
            // refresh the form
        }
    }

    function filtersChange(target){
        const { name , value , type } = target
        if(type === 'checkbox'){
            if(!target.checked) return setLocalFilters({ ...localFilters, [name]:undefined })
            else filtersCheckbox(target);
        }

        if(value === "") return setLocalFilters({ ...localFilters, [name]:undefined })
        setLocalFilters({...localFilters, [name]:value})
    }

    function filtersCheckbox(target){
        let options = ['checkbox-camioneta','checkbox-utilitario','checkbox-auto']
        options.forEach(element=>{
            if(element !== target.getAttribute('id')){
                document.getElementById(element).checked = false
            }
        })
    }


    //----- JSX return
    return(
        <form className='FiltersContainer' ref={formRef}>

            <div>
                <label htmlFor="sortOption">Ordenar por: </label>
                <select name="sort"  className='FiltersContainer__select' id="sortOption" 
                onChange={e=> filtersChange(e.target)} >
                    <option value="">Predeterminado</option>
                    <option value="pUP">Precio: menor a mayor</option>
                    <option value="pDOWN">Precio: mayor a menor</option>
                    <option value="mUP">Modelo: menor a mayor</option>
                    <option value="mDOWN">Modelo: mayor a menor</option>
                </select>
            </div>

            <select name="mark"  className='FiltersContainer__select' 
            onChange={e=> filtersChange(e.target)} >
                <option value="">Marca</option>
                <option value="Volkswagen">Volkswagen</option>
                <option value="Fiat">Fiat</option>
                <option value="Peugeot">Peugeot</option>
                <option value="Toyota">Toyota</option>
                <option value="Chevrolet">Chevrolet</option>
                <option value="Ford">Ford</option>
            </select>

            <select name="owner" className='FiltersContainer__select' 
            onChange={e=> filtersChange(e.target)} >
                <option value="">Dueño</option>
                { clientsData.map((client,index)=> <option key={index} value={client}>{client}</option>) }
            </select>

            <div className="FiltersContainer__div">
                <span>Tipo:</span>
                <div className="FiltersContainer__checkboxContainer">
                    <input type="checkbox" name="type" className="FiltersContainer__checkbox" value='Auto' id="checkbox-auto" onChange={e=> filtersChange(e.target)} />
                    <label htmlFor="checkbox-auto">Auto</label>
                </div>
                <div className="FiltersContainer__checkboxContainer">
                    <input type="checkbox" name="type" className="FiltersContainer__checkbox" value='Camioneta' id="checkbox-camioneta" onChange={e=> filtersChange(e.target)} />
                    <label htmlFor="checkbox-camioneta">Camioneta</label>
                </div>
                <div className="FiltersContainer__checkboxContainer">
                    <input type="checkbox" name="type" className="FiltersContainer__checkbox" value='Utilitario' id="checkbox-utilitario" onChange={e=> filtersChange(e.target)} />
                    <label htmlFor="checkbox-utilitario">Utilitario</label>
                </div>
            </div>

            <input type="submit" value="FILTRAR" className='FiltersContainer__submitFilters'
            onClick={e=> submitHandler(e)}/>
            
            <button className='FiltersContainer__restartFilters' onClick={e=> resettHandler(e)}>
                <MdRestartAlt/> Restablecer
            </button> 

        </form>
    )
}