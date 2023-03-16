//---- Dependencies
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//---- Components
import { NewVehicleBox,
        Boxes_Layout,
        VehicleBox,
        EditVehicleBox } from "./pages/boxes"
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
