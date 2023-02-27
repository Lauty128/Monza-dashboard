//---- Dependencies
    import { useEffect, useContext } from 'react';
    import { vehiclesContext } from '../../context/vehicles.context';

//----- Components
    import VehicleCard from './VehicleCard'
    import Page from './Pages';


export default function VehiclesSection(props){

    const { vehicles, page, filterVehicles } = useContext(vehiclesContext)
    
    useEffect(()=>{ filterVehicles() }, []) // Load the vehicles when the page loads

    return(
        <>
            <section className='Main__containerVehicles'>
                { vehicles ? 
                vehicles.map((vehicle=> <VehicleCard key={vehicle._id} 
                                        props={{vehicle}}/> )) : 
                "Cargando..." }

                <Page props={{ page , filterVehicles }} />
                    
            </section>
            
        </>
    )
}