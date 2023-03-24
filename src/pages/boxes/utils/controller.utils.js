//---- utils
import { newMessage } from "@/utils/box-effects"


//---- data
const inputs_of_type_select = ["type","fuel","owner"]

export const is_input_of_type_select = (name) => inputs_of_type_select.includes(name)

export async function controller_of_request(cb, load=false){
    if(load) document.querySelector(".ContainerBoxes__loadingContainer")
                .classList.add("ContainerBoxes__loadingContainer--active")
    
    const response = await cb()
    
    if(response.status === 201 || response.status === 200){
        const data = response.data
        const type = data.error ? "ERROR" : "OK"
        newMessage({ type, message:data.msg })
    }
    
    if(load) document.querySelector(".ContainerBoxes__loadingContainer")
                .classList.remove("ContainerBoxes__loadingContainer--active")

}

export function capture_image(image, state){
    const reader = new FileReader()
    
    reader.readAsDataURL(image)

    reader.onload = e=> state(e.target.result)
}