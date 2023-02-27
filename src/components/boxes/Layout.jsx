import { useParams } from "react-router-dom"
import logo from '../../assets/logo.jpg'

import VehicleBox from "./VehicleBox"

export default function Boxes_Layout(){

    const { id } = useParams()
    //const { type , data } = props

    return(
        <div className='ContainerBoxes'>
            <VehicleBox props={{id}} />
        </div>
    )
}