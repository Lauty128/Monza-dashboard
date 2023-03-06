//---- Dependencies
    import { useEffect, useContext } from 'react';
    import { vehiclesContext } from '../../context/vehicles.context';

//----- Components
    import { VehicleCard } from './VehicleCard';
    import { Page } from './handlers';

//----- Assets
import { MdRestartAlt } from 'react-icons/md';


export function VehiclesSection(){

    //----- Hooks
    const { vehicles, page, filterVehicles } = useContext(vehiclesContext)
    
    useEffect(()=>{ filterVehicles() }, []) // Load the vehicles when the page loads

    //----- JSX return
    return(
        <>
            <section className='Main__containerVehicles'>
                { 
                (vehicles && vehicles.length > 0) ? 
                    <>
                        {   
                        vehicles.map((vehicle=> <VehicleCard key={vehicle._id} 
                            props={{vehicle}}/> )) 
                        }        
                        <Page props={{ page , filterVehicles }} />
                    </> 
                    :
                    <div className='ErrorFindVehicles'>
                        <span className='ErrorFindVehicles__span'>
                            No se encontro ningun vehiculo!! <br />
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