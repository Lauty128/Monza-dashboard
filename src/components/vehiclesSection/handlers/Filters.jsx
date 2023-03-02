//----- Dependencies
import { vehiclesContext } from "../../../context/vehicles.context";

//----- Hooks
    import { useContext } from 'react'

//----- Assets
    import { MdRestartAlt } from 'react-icons/md'


export function Filters(props){

    //----- Hooks
    const { filters, setFilters, setPage, filterVehicles } = useContext(vehiclesContext)
    
    //----- Functions
    async function submitHandler(e){
        e.preventDefault()
        setPage(1)
        filterVehicles()
    }

    async function resettHandler(e){
        e.preventDefault()
        window.location.href = window.location.href
        // refresh the navigator
    }

    function filtersChange(target){
        const { name , value , type } = target
        if(type === 'checkbox'){
            if(!target.checked) return setFilters({ ...filters, [name]:undefined })
            if(target.name !== 'sale_date') filtersCheckbox(target);
        }

        if(value === "") return setFilters({ ...filters, [name]:undefined })
        setFilters({...filters, [name]:value})
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
        <form className='FiltersContainer'>

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
                <option value="Sebastian del Soto">Sebastian del Soto</option>
                <option value="Juan Silverii">Juan Silverii</option>
                <option value="Sergio Castor">Sergio Castor</option>
                <option value="Negro Machi">Negro Machi</option>
                <option value="Hernan Gorostieta">Hernan Gorostieta</option>
                <option value="Otros">Otros</option>
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

            <div className="FiltersContainer__checkboxContainer FiltersContainer__checkboxContainer--sold">
                <input type="checkbox" name="sale_date" className="FiltersContainer__checkbox" value='yes' id="checkbox-sold" onChange={e=> filtersChange(e.target)} />
                <label htmlFor="checkbox-sold">Vendido</label>
            </div>

            <input type="submit" value="FILTRAR" className='FiltersContainer__submitFilters'
            onClick={e=> submitHandler(e)}/>
            
            {
                filters != {} ?
                <button className='FiltersContainer__restartFilters' onClick={e=> resettHandler(e)}>
                    <MdRestartAlt/> Restablecer
                </button> :
                    " "
            }

        </form>
    )
}