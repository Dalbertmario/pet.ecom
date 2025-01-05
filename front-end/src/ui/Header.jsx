import clsx from "clsx";
import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Dogheader from "./Dogheader";
import Catheader from "./Catheader";
import { useDispatch, useSelector } from "react-redux";
import { toggelCathover, toggelDogHover, toggleMorePets } from "./uistore";
import Morepets from "./Morepets";

function Headers() {
const {hoverDogstate,hoverCatstate,hoverMorepets} = useSelector((state)=>state.uistore)
const [position,setPosition]=useState('')
const dispatch = useDispatch()
const ref = useRef()
function handelPosition(){
  const position = ref.current.getBoundingClientRect()
  console.log(position)
  const data = {x:position.right+window.scrollY,y:position.left+window.scrollX}
  setPosition(data)
  dispatch(toggleMorePets(true))
  console.log(data)
}
  return (
    <>
    <header >
        <div className="header flex items-center justify-between">
        <div>
        <FaLocationDot />
        </div>
        <div className="flex gap-2 flex-col">
          <input className="dashinput" type="text"/>
          <div className="flex gap-2 justify-between">
            <button onMouseEnter={()=>dispatch(toggelDogHover(true))}>bog</button>
            <button onMouseEnter={()=>dispatch(toggelCathover(true))}>cat</button>
            <button ref={ref} onMouseEnter={()=>dispatch(handelPosition)}>More pets</button>
          </div>
        </div>
         <div>
          profile
         </div>
        </div>
    </header>
        {hoverMorepets && <div className={`flex absolute justify-end`} style={{left:`${position.x}px`,top:`${position.y}`}}>
           <Morepets hover={toggleMorePets}/>
          </div>}
        {hoverDogstate && <div className={clsx(`flex justify-center`)}>
            <Dogheader hoverstate={hoverDogstate} hover={toggelDogHover}/>
        </div> }
        {hoverCatstate && <div> 
          <Catheader hoverstate={hoverCatstate} hover={toggelCathover}/> </div>}
</>
  )
}

export default  Headers