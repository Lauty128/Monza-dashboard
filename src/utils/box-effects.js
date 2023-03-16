export function newMessage({ type , message }){
    const messageBox = document.querySelector('.MessageBox')

    document.querySelector(".MessageBox__message").textContent = message
    messageBox.classList.add(`MessageBox--${type}`)
    
    messageBox.classList.add('MessageBox--active')
    setTimeout(()=>{
        messageBox.classList.remove('MessageBox--active')
    }, 2000)
}

export function openBox(){
    //------- Box animation
    setTimeout(()=>{
        document.querySelector(".ContainerBoxes__box").classList.add("ContainerBoxes__box--active")
    }, 30)
}