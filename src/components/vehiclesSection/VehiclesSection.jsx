//---- Dependencies
    import { useEffect, useContext } from 'react';
    import { vehiclesContext } from '../../context/vehicles.context';

//----- Components
    import { VehicleCard } from './VehicleCard'
    import { Page } from './handlers';
    import { Link } from 'react-router-dom';

//----- Assets
import { MdRestartAlt } from 'react-icons/md'


export function VehiclesSection(props){

    const { vehicles, page, filterVehicles } = useContext(vehiclesContext)
    
    useEffect(()=>{ filterVehicles() }, []) // Load the vehicles when the page loads

    return(
        <>
            <section className='Main__containerVehicles'>
                { (vehicles && vehicles.length > 0) ? 
                <>
                    {   
                    vehicles.map((vehicle=> <VehicleCard key={vehicle._id} 
                        props={{vehicle}}/> )) 
                    }        
                    <Page props={{ page , filterVehicles }} />
                </> :
                <div className='ErrorFindVehicles'>
                    <span className='ErrorFindVehicles__span'>
                        No existe ningun vehiculo con las caracteristicas especificadas!! <br />
                        Por favor vuelve a buscar
                    </span> <br />
                    <a className='ErrorFindVehicles__link' href='/'>
                        <MdRestartAlt/> Refrescar
                    </a>
                </div>
                }
                    
            </section>
            
        </>
    )
}