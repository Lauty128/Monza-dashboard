//----- Dependencies
import { Outlet } from "react-router-dom";

//----- Context
import { VehiclesContextProvider } from "../context/vehicles.context"

//----- Components
import { Filters } from "./vehiclesSection/handlers"
import { VehiclesSection } from "./vehiclesSection"
import { Link } from "react-router-dom";

//---- Assets
import { FaPlusCircle , FaFileExcel, FaInfoCircle } from 'react-icons/fa'


export default function MainLayout(){

  return(
        <>
            <header className='Header'>
              <img src='logo.jpg' alt="" className='Header__image'/>    
              <div className="Header__optionsContainer">
                <Link className="Header__option" to={'/vehicle/new'}>
                  <FaPlusCircle /> NUEVO
                </Link>
                <Link className="Header__option">
                  <FaFileExcel /> DESCARGAR
                </Link>
              </div>
            </header>
      
            <main className='Main'>
              <VehiclesContextProvider>
                <Filters />
                <VehiclesSection />
              </VehiclesContextProvider>
            </main>

            <Outlet /> {/* Here the boxes are loaded  */}

            <div className="MessageBox">
              <FaInfoCircle className="MessageBox__icon"/>
              <p className="MessageBox__message">{/* Dynamic message */}</p>
            </div>
        </>
    )
}