//----- Depedendncies
import { Outlet, Link } from "react-router-dom";

//----- Assets
import { FaTimes } from "react-icons/fa";

//----- Utils
import { openBox } from "@/utils/box-effects";

function Boxes_Layout(){

    openBox() // This opens the boxes with a effect

    return(
        <div className='ContainerBoxes'>
            <div className="ContainerBoxes__box">
                <Link to='/' className="Component__exitButton"> <FaTimes /> </Link>
                <Outlet/>
            </div>

            {/* Box to show a loading screen */}
            <div className="ContainerBoxes__loadingContainer">
                <span className="ContainerBoxes__circleLoading"></span>
                <span className="ContainerBoxes__circleLoading"></span>
                <span className="ContainerBoxes__circleLoading"></span>
            </div>
        </div>
    )
}

export default Boxes_Layout