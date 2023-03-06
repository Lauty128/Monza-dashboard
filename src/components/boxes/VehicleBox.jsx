//---- Services
import { getVehicle , soldVehicle } from "../../services"

//---- Dependencies
import { useState, useEffect } from "react"
import {AdvancedImage, placeholder} from '@cloudinary/react';
import { Link, useParams } from "react-router-dom"
import { FaAngleLeft, FaAngleRight, FaTimesCircle, 
        FaTimes, FaPen, FaTrashAlt, FaRegCheckCircle,
        FaDownload } from 'react-icons/fa'

//---- Utils
import { newMessage } from '../../utils/messageBox'


export function VehicleBox(){

    //------- Box animation
    setTimeout(()=>{
        document.querySelector(".VehicleBox").classList.add("VehicleBox--active")
    }, 30)

    //------- Hooks
    const { id } = useParams()
    const [ vehicle , setVehicle ] = useState(null)
    const [ slider, setSlider ] = useState([])
    const [ imageNum, setImageNum ] = useState(0)

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

    //------- Functions
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
        const response = await soldVehicle(id)
        const data = response.data;

        const type = data.err ? "ERROR" : "OK";
        newMessage({ type , message })
    }

    function handlerSlider(num){
        const length = slider.length
        const newImage = imageNum + num

        if(newImage > (length - 1)) return setImageNum(0)        
        if(newImage < 0) return setImageNum(length - 1)
        setImageNum(newImage)
    }


    //------- JSX return
    return(
        <div className="VehicleBox">
            <Link to='/' className="Component__exitButton"><FaTimes /></Link>
            <div className="VehicleBox__imagesContainer">
                <div className="VehicleBox__image">
                    {/* <a href={slider[imageNum]} download className="VehicleBox__downloadImage">
                        <FaDownload />
                    </a> */}
                    <img src={slider[imageNum]} /> 
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
                        <span className="VehicleBox__mainData">Traccion: <b>{vehicle.traction || "Normal"}</b></span>
                        <span className="VehicleBox__mainData">
                            Disponible: <b>{vehicle.available ? "Si" : "No"}</b>
                            </span>
                    </div>
                    <h3 className='VehicleBox__h3'>Caracteristicas</h3>
                    {
                        (vehicle.extra && vehicle.extra.length > 0) ?
                        <div className="VehicleBox__extraDataContainer">
                            {vehicle.extra.map((extra, index)=>(
                                <div className="VehicleBox__extraData"  key={index}>
                                    <FaRegCheckCircle />
                                    <span>{ extra }</span>   
                                </div>
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