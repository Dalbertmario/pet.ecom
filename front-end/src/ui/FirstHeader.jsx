import { IoReorderThree } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { setCartToggel, togglesandWitch } from "./uistore";
export default function FirstHeader() {
const dispath = useDispatch()
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
       <button><IoIosSearch size={20}/></button> 
      <button><FaRegHeart size={20}/></button>
      <button onClick={()=>dispatch(setCartToggel())}><SlBasket size={20} /></button> 
      </div>
    </div>
  )
}
