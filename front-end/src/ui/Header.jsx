import clsx from "clsx";
import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Dogheader from "./Dogheader";
import Catheader from "./Catheader";
import { useDispatch, useSelector } from "react-redux";
import { toggelCathover, toggelDogHover, toggleMorePets,setCartToggel} from "./uistore";
import Morepets from "./Morepets";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import UsefetchCartItems from "../features/Carting/fetchcartitems";
import { AiOutlineDatabase } from "react-icons/ai";

function Headers() {
const {hoverDogstate,hoverCatstate,hoverMorepets} = useSelector((state)=>state.uistore)
const [position,setPosition]=useState('')
const dispatch = useDispatch()
const ref = useRef()
const {data}= UsefetchCartItems()
function handelPosition(){
  const position = ref.current.getBoundingClientRect()
  console.log(position)
  const data = {x:position.right+window.scrollY,y:position.left+window.scrollX}
  setPosition(data)
  dispatch(toggleMorePets(true))
}
const len=data?.cartItem.length
  return (
    <>
    <header >
        <div className="header flex items-center justify-between">
        <div>
        <FaLocationDot />
        </div>
      
        <div className="flex gap-2 flex-col">
          <input className="dashinput" type="text"/>
          <div className="xs:hidden md:block xl:block">
          <div className="flex gap-2 justify-between">
            <button onMouseEnter={()=>dispatch(toggelDogHover(true))}>bog</button>
            <button onMouseEnter={()=>dispatch(toggelCathover(true))}>cat</button>
            <button ref={ref} onMouseEnter={()=>dispatch(handelPosition)}>More pets</button>
          </div>
          </div>
        </div>
        <div className="xs:hidden xl:block md:block">
         <div className="flex flex-row gap-5 ">
          <button className="text-red-400 hover:text-red-600">
            <NavLink to='/profile'><CgProfile size={30} /></NavLink></button>
         <button onClick={()=>dispatch(setCartToggel())} className="text-red-400 hover:text-red-600">
         <p className="absolute bg-red-600 px-1 py-1 text-white font-semibold rounded-full top-5 right-1">{len}</p>
          <IoCartOutline size={30} /></button>
         </div>
         </div>
        </div>
    </header>
   
        {hoverMorepets && <div className={`flex absolute justify-end`} style={{left:`${position.x}px`,top:`${position.y}`}}>
           <Morepets hover={toggleMorePets}/>
          </div>}
        {<div className={clsx(`flex justify-center`)}>
            <Dogheader hoverstate={hoverDogstate} hover={toggelDogHover}/>
        </div> }
        {<div > 
          <Catheader hoverstate={hoverCatstate} hover={toggelCathover}/> </div>}
 
</>
  )
}

export default  Headers