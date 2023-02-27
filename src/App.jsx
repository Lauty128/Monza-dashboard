//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react'

//---- Assets
import logo from './assets/logo.jpg';

//----- Context
import { VehiclesContextProvider } from './context/vehicles.context';

//---- Components
import VehicleForm from './components/VehicleForm'
import VehiclesSection from './components/vehiclesSection/VehiclesSection';
import Filters from './components/Filters'
import ClientForm from './components/clients/clientForm';
import Boxes_Layout from './components/boxes/Layout';


function App() {
  

  return (
    <>

      <BrowserRouter>

      <header className='Header'>
        <img src={logo} alt="" className='Header__image'/>    
        <h1 className='Header__h1'>DASHBOARD</h1>
      </header>
      
      <main className='Main'>
        <VehiclesContextProvider>
          <Filters />
          <VehiclesSection />
        </VehiclesContextProvider>
      </main>

        <Routes>
          <Route path='/' element={ <div></div> } />
          <Route path='/vehicle/:id' element={ <Boxes_Layout /> } />
        </Routes>
      </BrowserRouter>

      

    </>
    )
}

export default App
