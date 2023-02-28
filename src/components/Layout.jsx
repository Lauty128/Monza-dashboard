//----- Dependencies
import { Outlet } from "react-router-dom";

//----- Context
import { VehiclesContextProvider } from "../context/vehicles.context"

//----- Components
import { Filters } from "./vehiclesSection/handlers"
import { VehiclesSection } from "./vehiclesSection"
import { Link } from "react-router-dom";

//---- Assets
import logo from '../assets/logo.jpg';
import { FaPlusCircle , FaFileExcel } from 'react-icons/fa'


export default function MainLayout(){

  function animationBox(){
    setTimeout(()=>{
        document.querySelector(".UploadForm").classList.add("UploadForm--active")
    }, 10)
}

  return(
        <>
            <header className='Header'>
              <img src={logo} alt="" className='Header__image'/>    
              <div className="Header__optionsContainer">
              <Link className="Header__option" to={'/vehicle/new'} onClick={animationBox}>
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
        </>
    )
}