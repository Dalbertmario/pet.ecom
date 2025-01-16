import { Outlet } from "react-router-dom";
import Headers from "../ui/Header";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import Sidebar from "../ui/Sidebar";
import FirstHeader from "../ui/FirstHeader";
import Cart from "./Cart";
import { useCallback, useEffect, useRef } from "react";
import { setCartToggel } from "../ui/uistore";

function Applayout() {
const {hoverDogstate,hoverCatstate,sandwich,carttoggle} = useSelector(state=>state.uistore)
const outletRef = useRef(null)
const dispatch =useDispatch()

function handelClose(e){
 if(outletRef.current && outletRef.current.contains(e.target)){
  dispatch(setCartToggel())
 }
}
useEffect(function(){
  if(carttoggle){
    document.addEventListener('click',handelClose)
    }else{
    document.removeEventListener('click',handelClose)
  }
  return()=>{
    document.removeEventListener('click',handelClose)}
},[carttoggle,handelClose])
  return (
    <div className={`font-condensed ${sandwich || carttoggle  && 'xs:overflow-hidden md:overflow-hidden xl:overflow-hidden' }`}>
        <div className="h-screen ">
        <FirstHeader/>
            <div>
         <div className="xs:block md:hidden xl:hidden "> 
          <Sidebar/> 
          </div>
          <div className={`${carttoggle && 'overflow-scroll'} `}>
            <Cart/>
          </div>
        </div>
        <Headers/>
        <div ref={outletRef}>
            <div  className={clsx(`${hoverCatstate || hoverDogstate || sandwich || carttoggle ? 'blur-sm' : 'blur-none'}  }`)}>{<Outlet/>}</div>
            </div>
        </div>

    </div>
  )
}

export default Applayout;