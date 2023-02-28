import { Link } from "react-router-dom";

import { FaWindowClose } from 'react-icons/fa'
// hacer las cartas de vehiculos disponibles y no disponibles

export function VehicleCard({ props }){

    const { vehicle } = props

    function animationBox(){
        setTimeout(()=>{
            document.querySelector(".VehicleBox").classList.add("VehicleBox--active")
        }, 10)
    }

    return(
        <div className='Vehicle'>
            <div className='Vehicle__imageContainer'>
                <img src={vehicle.image} className='Vehicle__img' />
                <span className='Vehicle__model'>
                    { vehicle.model }
                </span>
                {vehicle.traction ?
                    <span className='Vehicle__type'>
                        { vehicle.traction }
                    </span>
                : ""}
                {!vehicle.available ?
                    <FaWindowClose className="Vehicle__noAvailable" />
                : ""}
            </div>
            <div className='Vehicle__info'>
                <span className='Vehicle__price}' >
                { new Intl.NumberFormat("en-ES", {
                    style: "currency",
                    currency: "USD",
                }).format(vehicle.price) } 
                </span>
                <span className='Vehicle__mark' >{ vehicle.mark }</span>
            </div>
            <h3 className='Vehicle__name' id={vehicle._id}>
                <Link to={`vehicle/${vehicle._id}`} onClick={()=>{ animationBox() }}>
                    { vehicle.version }
                </Link>
            </h3>
        </div>
    )
}