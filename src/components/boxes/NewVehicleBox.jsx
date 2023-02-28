//------- Assets
import { FaPlusCircle, FaTimes } from 'react-icons/fa'

//------- Components
import { Link } from 'react-router-dom'


export function NewVehicleBox() {

  function inputHandler(input){
    const label = input.previousElementSibling

    if(!label.classList.contains("UploadForm__label--active")){
      //if the "label" not have the class:{styles["label--active"]}, it is added
      label.classList.add("UploadForm__label--active")
      return
    }

    if(input.value.length === 0){
      //if blur is true and the input has no content then it remove the class {styles["label--active"]}
      label.classList.remove("UploadForm__label--active")
    }
  }

  return (
    <div className='UploadForm'>
      <Link to='/' className="VehicleBox__exitButton"><FaTimes /></Link>
      <form action={`${import.meta.env.VITE_HOST_API}`} method='POST' className='UploadForm__form'
      encType="multipart/form-data">
      
        <div className='UploadForm__inputImageContainer'>
          <label className='UploadForm__labelImage' htmlFor="input-image"><FaPlusCircle/> Add</label>
          <input id="input-image" type="file"
          name="image" accept="image/png, image/jpeg" />
        </div>

        <div className='UploadForm__inputImagesContainer'>
          {/* <label className={styles.UploadForm__label} htmlFor="input-images">Images</label> */}
          <input id="input-images" type="file" name="images"
          multiple accept="image/png, image/jpeg"/>
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-mark">Marca</label>
          <input id="input-mark" type="text" name="mark" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>        
          <label className='UploadForm__label' htmlFor="input-version">Version</label>
          <input id="input-version" type="text" name="version" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)}/>
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-engine">Motor</label>
          <input id="input-engine" type="text" name="engine" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-fuel">Combustible</label>
          <input id="input-fuel" type="text" name="fuel" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-type">Tipo</label>
          <input id="input-type" type="text" name="type" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-transmission">Transmision</label>
          <input id="input-transmission" type="text" name="transmission" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-color">Color</label>
          <input id="input-color" type="text" name="color" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-model">Modelo</label>
          <input id="input-model" type="number" name="model" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-owner">Dueño</label>
          <input id="input-owner" type="text" name="owner" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer'>
          <label className='UploadForm__label' htmlFor="input-km">Kilometraje</label>
          <input id="input-km" type="number" name="km" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <div className='UploadForm__inputContainer UploadForm__inputPriceContainer'>
          {/* <label className={styles.UploadForm__obligatory}>$</label> */}
          <label className='UploadForm__label' htmlFor="input-price">Precio</label>
          <input id="input-price" type="number" name="price" autoComplete='off'
          onFocus={e=> inputHandler(e.target)} onBlur={e=> inputHandler(e.target)} />
        </div>

        <input id="input-" type="submit" value="ENVIAR" className='UploadForm__submitButton' />
      </form>
    </div>
  )
}

