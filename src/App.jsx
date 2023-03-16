//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//---- Components
import { NewVehicleBox, VehicleBox, EditVehicleBox } from "./pages/boxes/components"

import Boxes_Layout from './pages/boxes/Layout';
import MainLayout from './pages/Home/Layout';


function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            
            <Route path='vehicle' element={<Boxes_Layout />}>
              <Route path=':id' element={<VehicleBox />}/>
              <Route path='edit/:id' element={<EditVehicleBox />}/>
              <Route path='new' element={<NewVehicleBox />}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App
