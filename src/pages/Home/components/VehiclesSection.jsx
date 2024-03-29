//---- Dependencies
    import { useEffect } from 'react';
    import { VehicleContext } from '@/context/vehicles.context';

//----- Components
    import { VehicleCard, Page } from './';

//----- Assets
import { MdRestartAlt } from 'react-icons/md';


export function VehiclesSection(){

    //----- Hooks
    const { vehicles, page, filterVehicles } = VehicleContext()
    
    useEffect(()=>{ filterVehicles() }, []) // Load the vehicles when the page loads
    
    //----- Variables
    const arrayofthree = [1,2,3]

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
                        { vehicles.length <= 3 ? arrayofthree.map(index=>(<div key={index}></div>) ) : '' }
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