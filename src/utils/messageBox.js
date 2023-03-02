export function newMessage({ type , message }){
    const messageBox = document.querySelector('.MessageBox')

    document.querySelector(".MessageBox__message").textContent = message
    messageBox.classList.add(`MessageBox--${type}`)
    
    messageBox.classList.add('MessageBox--active')
    setTimeout(()=>{
        messageBox.classList.remove('MessageBox--active')
    }, 2000)
}