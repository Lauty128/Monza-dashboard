//----- Depedendncies
import { Outlet } from "react-router-dom";


export function Boxes_Layout(){
    return(
        <div className='ContainerBoxes'>
            <Outlet/>
        </div>
    )
}