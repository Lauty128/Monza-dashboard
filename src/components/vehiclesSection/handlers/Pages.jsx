//---- Assets
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa'


export function Page({ props }){

    //----- Props
    const { page , filterVehicles } = props

    //----- Functions
    async function handlerPage(num){
        const newPage = page.page + num
        filterVehicles(newPage)
    }


    //----- JSX return
    return(
        <div className="HandlerPages">
            { page.hasPrevPage ? 
            <span className='HandlerPages__span' onClick={()=> handlerPage(-1)}>
                <FaAngleLeft/>
            </span> : ""}
            <span className='HandlerPages__span'>{page.page}</span>
            { page.hasNextPage ? 
            <span className='HandlerPages__span' onClick={()=> handlerPage(1)}>
                <FaAngleRight/>
            </span> : ""}
        </div>
    )
}