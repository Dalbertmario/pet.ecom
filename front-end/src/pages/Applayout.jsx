import { Outlet } from "react-router-dom";
import Headers from "../ui/Header";
import { useSelector } from "react-redux";
import clsx from "clsx";
import Sidebar from "../ui/Sidebar";
import FirstHeader from "../ui/FirstHeader";
import Cart from "./Cart";

function Applayout() {
const {hoverDogstate,hoverCatstate,sandwich,carttoggle} = useSelector(state=>state.uistore)

  return (
    <div className={`font-condensed ${sandwich || carttoggle  && 'xs:overflow-hidden md:overflow-scroll xl:overflow-scroll' }`}>
        <div className="h-screen">
        <FirstHeader/>
            <div>
         <div className="xs:block md:hidden xl:hidden "> 
          <Sidebar/> 
          </div>
          <div>
            <Cart/>
          </div>
        </div>
        <Headers/>
            <div className={clsx(`${hoverCatstate || hoverDogstate || sandwich || carttoggle ? 'blur-sm' : 'blur-none'} bg-white ${!sandwich && 'md:blur-none xl:blur-none' }`)}>{<Outlet/>}</div>
        </div>

    </div>
  )
}

export default Applayout;