//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//---- Components
import { NewVehicleBox } from "./components/boxes"
import { Boxes_Layout } from './components/boxes';
import MainLayout from './components/Layout';
import { VehicleBox } from './components/boxes'


function App() {
  
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />} >
            
            <Route path='vehicle' element={<Boxes_Layout />}>
              <Route path=':id' element={<VehicleBox />}/>
              <Route path='edit/:id' element={<VehicleBox />}/>
              <Route path='new' element={<NewVehicleBox />}/>
            </Route>
            
          </Route>
        </Routes>
      </BrowserRouter>

      

    </>
    )
}

export default App
