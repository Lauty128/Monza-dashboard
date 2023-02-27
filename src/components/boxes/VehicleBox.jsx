//---- Services
import { getVehicle , soldVehicle } from "../../services"

//---- Dependencies
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { FaAngleLeft, FaAngleRight, FaTimesCircle, FaTimes, 
        FaPen, FaTrashAlt, FaRegEdit  } from 'react-icons/fa'

//---- Utils
// newMessage


export default function VehicleBox({ props }){

    const { id } = props
    const [ vehicle , setVehicle ] = useState(null)
    const [ slider, setSlider ] = useState([])
    const [ imageNum, setImageNum ] = useState(0)
    //const [ widthSlider, setWidthSlider ] = useState(0)

    useEffect(()=>{
        (async()=>{
            const response = await getVehicle(id)
            if(response.status === 200){
                setVehicle(response.data)
                setSlider([response.data.image, ...response.data.images])
            }
            else{
                console.log("un error pa")
            }
        })()
    }, [])

    function optionsSection(){
        return (
            !vehicle.sale_date ?
                <>
                    <div className="VehicleBox__optionsContainer">
                        <Link className="VehicleBox__option" to={`/vehicle/edit/${vehicle._id}`}>
                            <FaPen /> Editar
                        </Link>
                        <Link className="VehicleBox__option"
                        onClick={()=> buttonSold(vehicle._id) }>
                            <FaTrashAlt /> Eliminar
                        </Link>
                    </div>
                    <span className="VehicleBox__price">
                        { new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "ARS",
                                minimumFractionDigits:0
                        }).format(vehicle.price) }
                    </span>
                </> :
                <>
                    <span className="VehicleBox__price">
                        { new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "ARS",
                                    minimumFractionDigits:0
                        }).format(vehicle.price) }
                    </span>
                    <span className="VehicleBox__soldMessage">VENDIDO!!</span>
                </>
            )
    }

    async function buttonSold(id){
        const data = await soldVehicle(id)

        console.log(data);
    }

    function handlerSlider(num){
        const length = slider.length
        const newImage = imageNum + num

        if(newImage > (length - 1)) return setImageNum(0)        
        if(newImage < 0) return setImageNum(length - 1)
        setImageNum(newImage)
    }

    return(
        <div className="VehicleBox">
            <Link to='/' className="VehicleBox__exitButton"><FaTimes /></Link>
            <div className="VehicleBox__imagesContainer">
                <div className="VehicleBox__image">
                    <img src={slider[imageNum]} placeholder="blur" />
                </div>
                <FaAngleLeft className="VehicleBox__arrow VehicleBox__arrow--left"
                    onClick={()=>{ handlerSlider(-1) }} />
                <FaAngleRight className="VehicleBox__arrow VehicleBox__arrow--right"
                    onClick={()=>{ handlerSlider(1) }} />

            </div>
            {
                vehicle ?
                <>
                    <h2>{ `${vehicle.version} ${vehicle.model}` }</h2>
                    <div className="VehicleBox__mainDataContainer">
                        <span className="VehicleBox__mainData">Marca: <b>{vehicle.mark}</b></span>
                        <span className="VehicleBox__mainData">Motor: <b>{vehicle.engine}</b></span>
                        <span className="VehicleBox__mainData">Combustible: <b>{vehicle.fuel}</b></span>
                        <span className="VehicleBox__mainData">Transmision: <b>{vehicle.transmission}</b></span>
                        <span className="VehicleBox__mainData">Color: <b>{vehicle.color}</b></span>
                        <span className="VehicleBox__mainData">Dueño: <b>{vehicle.owner}</b></span>
                    </div>
                    <h3 className='VehicleBox__h3'>Caracteristicas</h3>
                    {
                        (vehicle.extra.lenght > 0) ?
                        <div className="VehicleBox__extraDataContainer">
                            {vehicle.extra.map(extra=>(
                                <span className="VehicleBox__extraData">{ extra }</span>   
                            ))}
                        </div> :
                        <span className="VehicleBox__extraData--error"><FaTimesCircle /> Sin datos extra</span>
                    }
                    <div className="VehicleBox__bottomContainer">
                       { optionsSection() }
                    </div>
                </> :
                    ""
            }
        </div>
    )
}