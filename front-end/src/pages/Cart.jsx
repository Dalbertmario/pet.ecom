import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { setCartToggel } from "../ui/uistore";
import UsefetchCartItems from "../features/Carting/fetchcartitems";
function Cart() {
const {carttoggle} = useSelector(state=>state.uistore)
const dispatch = useDispatch()
const {data:cartData} = UsefetchCartItems()

  return (
    <div className={`bg-slate-100 right-0 top-0 ${carttoggle ? "xs:w-[100%] xl:w-[30%] md:w-[30%] p-5" : "w-[0] "} duration-300 fixed h-screen transition-all ease-in-out z-30`}>
      <div className="flex flex-row justify-between">
       <h1>Cart</h1>
       <h1 className="text-red-500" onClick={()=>dispatch(setCartToggel())}><TiDeleteOutline size={30} /></h1>
       </div>
       <div>
         {/* {cartData.map(el=><div></div>)} */}
       </div>
    </div>
  )
}
export default Cart