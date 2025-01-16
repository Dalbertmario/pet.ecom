import clsx from "clsx";
import { useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import Dogheader from "./Dogheader";
import Catheader from "./Catheader";
import { useDispatch, useSelector } from "react-redux";
import { toggelCathover, toggelDogHover, toggleMorePets,setCartToggel,setSearch} from "./uistore";
import Morepets from "./Morepets";
import { CgProfile } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import UsefetchCartItems from "../features/Carting/fetchcartitems";
import useSearch from "../features/search/search";
import Searching from "./Searching";
import UseAccountdetailsFetch from "../features/dashboard/accountDetailsFetch";

function Headers() {
const {hoverDogstate,hoverCatstate,hoverMorepets,location,search} = useSelector((state)=>state.uistore)
const [position,setPosition]=useState('')
const {data:UserData} = UseAccountdetailsFetch()
const {data:searchdata}= useSearch(search)
const dispatch = useDispatch()
const ref = useRef()
const {data}= UsefetchCartItems()

function handelPosition(){
  const position = ref.current.getBoundingClientRect()
  const data = {x:position.right+window.scrollY,y:position.left+window.scrollX}
  setPosition(data)
  dispatch(toggleMorePets(true))
}
const len=data?.cartItem.length
function setingtheSeaarch(e){
  dispatch(setSearch(e))
}
const role = JSON.parse(localStorage.getItem('role'))

  return (
    <>
    <header >
        <div className="header flex items-center justify-between">
        <button className="flex flex-row gap-2">
          <NavLink to='/addressForm'>
           <p className="pb-2"><FaLocationDot /></p> 
           <p>{UserData?.map(el=>(<div className="flex flex-col text-[11px]" key={el?.pincode}> <p>{el?.address}</p></div>))}</p> 
        </NavLink>
        </button>
      
        <div className="flex gap-2 flex-col">
          <input onChange={(e)=>setingtheSeaarch(e.target.value)} className={`dashinput ${searchdata?.length > 0 ? 'rounded-t-md' : 'rounded-md' }`}  type="text"/>
          <Searching datas={searchdata}/>
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
          <button className="text-red-400 font-semibold hover:text-red-600">
           {role?.user ? <NavLink to='/profile'><CgProfile size={30} /></NavLink> :
           <NavLink to='/'>Login/Sign up</NavLink>}
           </button>
           
         <button onClick={()=>dispatch(setCartToggel())} className="text-red-400 hover:text-red-600">
        {len!=0 && <p className="absolute bg-red-500 px-[5px] py-[5xp] text-white font-semibold rounded-full text-[14px] top-7 right-1">{len}</p> }
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