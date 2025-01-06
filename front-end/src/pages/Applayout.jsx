import { Outlet } from "react-router-dom";
import Headers from "../ui/Header";
import { useSelector } from "react-redux";
import clsx from "clsx";
function Applayout() {
const {hoverDogstate,hoverCatstate} = useSelector(state=>state.uistore)
  return (
    <div className="font-condensed">
        <div>

        </div>
        <div className="h-screen">
            <Headers/>
            <div className={clsx(`${hoverCatstate || hoverDogstate ? 'blur-sm' : 'blur-none'} bg-white`)}>{<Outlet/>}</div>
        </div>
    </div>
  )
}

export default Applayout;