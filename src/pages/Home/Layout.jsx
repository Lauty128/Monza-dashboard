//----- Dependencies
import { Outlet } from "react-router-dom";

//----- Context
import { VehiclesContextProvider } from "../../context/vehicles.context";

//----- Components
import { VehiclesSection, Filters } from "./components";
import { MessageBox, Header } from "@/components";


export default function MainLayout(){

  return(
        <>
          <Header />
    
          <main className='Main'>
            <VehiclesContextProvider>
              <Filters />
              <VehiclesSection />

              <Outlet /> {/* Here the boxes are loaded  */}
            </VehiclesContextProvider>
          </main>

          <MessageBox/>
        </>
    )
}