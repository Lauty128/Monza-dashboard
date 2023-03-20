//---- Dependencies
import { useParams } from "react-router-dom"
import { useState , useEffect } from "react"

//---- Services
import { modifyVehicle } from "./services"
import { getVehicle } from "@/services";

//------- Utils
import { newMessage } from '@/utils/box-effects'

//------- Data
import { clientsData, typesData } from '@/data/form'


export function EditVehicleBox() {

  //------- Paramas
  const { id } = useParams()

  //------- Hooks
  const [ values , setValues ] = useState({})
  const [ vehicle , setVehicle ] = useState(null)

  useEffect(()=>{
    (async()=>{
      const data = await getVehicle(id)
      if(data.status === 200){
        delete data.data.images
        if(data.data.extra) data.data.extra = data.data.extra.join('\n')
        setVehicle(data.data)
      }
    })()
  },[])

  //------- Functions
  function inputChange(input){
    const { name , value } = input

    setVehicle({ ...vehicle , [name]:value });
    setValues({ ...values , [name]:value });
  }

  function selectHandler(target){
    inputChange({ name:target.name , value:target.value })
  }

  async function submitHandler(e){
    e.preventDefault()
    const boxLoading = document.querySelector(".ContainerBoxes__loadingContainer")
    boxLoading.classList.add("ContainerBoxes__loadingContainer--active")

    const response = await modifyVehicle(id, values)
    let type = "ERROR" 

    if(response.statusText === "OK"){
      e.target.reset()
      type = "OK" 
    }
    
    boxLoading.classList.remove("ContainerBoxes__loadingContainer--active")
    newMessage({ type , message:response.data.msg });
  }

  //------- JSX return
  return (
    <>
      <div className="UploadForm__div--edit">
        <img src={vehicle !== null ? vehicle.image : ''} className="UploadForm__image--edit" />
        <h2 className="UploadForm__h2--edit">{ vehicle ? vehicle.mark + " " + vehicle.version : "" }</h2>
      </div>
      <form className='UploadForm__form UploadForm__form--edit' onSubmit={e=> submitHandler(e) }>
        {
          vehicle !== null ?
          <>
            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-mark">Marca</label>
              <input id="input-mark" type="text" name="mark" autoComplete='off' value={vehicle.mark}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>        
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-version">Version</label>
              <input id="input-version" type="text" name="version" autoComplete='off' value={vehicle.version}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-engine">Motor</label>
              <input id="input-engine" type="text" name="engine" autoComplete='off' value={vehicle.engine}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-fuel">Combustible</label>
              <input id="input-fuel" type="text" name="fuel" autoComplete='off' value={vehicle.fuel}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-type">Tipo</label>
              {/* <input id="input-type" type="text" name="type" autoComplete='off' value={vehicle.type} */}
              {/* onChange={e=> inputChange(e.target)} /> */}
              <select name="type" id="input-type" value={vehicle.type} onChange={(e)=> selectHandler(e.target)}>
                { typesData.map((type,index)=>{
                  return <option value={type} key={index}>{type}</option>
                }) }
              </select>
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-transmission">Transmision</label>
              <input id="input-transmission" type="text" name="transmission" autoComplete='off' value={vehicle.transmission}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-color">Color</label>
              <input id="input-color" type="text" name="color" autoComplete='off' value={vehicle.color}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-model">Modelo</label>
              <input id="input-model" type="number" name="model" autoComplete='off' value={vehicle.model}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-owner">Propietario</label>
              {/* <input id="input-owner" type="text" name="owner" autoComplete='off' value={vehicle.owner}
              onChange={e=> inputChange(e.target)} /> */}
              <select name="owner" id="input-owner" value={vehicle.owner} onChange={e=> selectHandler(e.target)}>
              { clientsData.map((client,index)=>{
                  return <option value={client} key={index}>{client}</option>
                }) }
              </select>
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-km">Kilometraje</label>
              <input id="input-km" type="number" name="km" autoComplete='off' value={vehicle.km}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
              <label className='UploadForm__label UploadForm__label--active' htmlFor="input-price">Precio</label>
              <input id="input-price" type="number" name="price" autoComplete='off' value={vehicle.price}
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer'>
            <label className='UploadForm__label UploadForm__label--active' htmlFor="input-price">Oferta</label>
              <input id="input-offer_price" type="number" name="offer_price" autoComplete='off' value={vehicle.offer_price || ''} 
              onChange={e=> inputChange(e.target)} />
            </div>

            <div className='UploadForm__inputContainer UploadForm__inputExtraContainer'>
              <label className='UploadForm__label UploadForm__label--textarea UploadForm__label--active' htmlFor="input-price">Extra</label>
              <textarea name="extra" id="input-extra" cols="30" rows="10" 
              onChange={e=> inputChange(e.target)} value={vehicle.extra}>
              </textarea>
            </div>
          </> :
          ""
        }
        <input id="input-" type="submit" value="ENVIAR" className='UploadForm__submitButton'/>
      </form>
    </>
  )
}


