import { IoReorderThree } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setCartToggel, togglesandWitch } from "./uistore";
import UsefetchCartItems from "../features/Carting/fetchcartitems";
import { NavLink } from "react-router-dom";
export default function FirstHeader() {
const dispath = useDispatch()
const {data}= UsefetchCartItems()
const {sandwich,carttoggle} =useSelector(state=>state.uistore)
const dispatch = useDispatch()
  return (
    <div className="flex flex-row xs:flex xl:hidden md:hidden justify-between py-2 p-2">
      <div className="flex flex-row gap-5 items-center">
      <button onClick={()=>dispath(togglesandWitch())}>
      <IoReorderThree size={30}/>
      </button>
       <h1>Super Petzy</h1>
      </div>
      <div className="flex flex-row gap-3 items-center">
      <NavLink to='/wishlist'> <button><FaRegHeart size={20}/></button></NavLink> 
      <div>
      {data?.cartItem?.length === 0  ? '' : <div className="rounded-full px-[3px] font-semibold absolute right-[3px] items-center content-center bg-red-500 text-white text-xs">
       {data?.cartItem?.length}
       </div>}
      <button onClick={()=>dispatch(setCartToggel())}><SlBasket size={20} /></button> 
      </div>
      </div>
    </div>
  )
}
