//---- utils
import { newMessage } from "@/utils/box-effects"

//---- data
const inputs_of_type_select = ["type","owner"]

export const is_input_of_type_select = (name) => inputs_of_type_select.includes(name)

export const controller_of_request = async (cb, load=false) =>{
    if(load) document.querySelector(".ContainerBoxes__loadingContainer")
                .classList.add("ContainerBoxes__loadingContainer--active")
    
    const response = await cb()
    console.log(response);
    
    if(response.statusText === "OK"){
        const data = response.data
        console.log(data);
        const type = data.error ? "ERROR" : "OK"
        newMessage({ type, message:data.msg })
    }
    
    if(load) document.querySelector(".ContainerBoxes__loadingContainer")
                .classList.remove("ContainerBoxes__loadingContainer--active")
}