import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { setCartToggel, setCheckOutItem } from "../ui/uistore";
import UsefetchCartItems from "../features/Carting/fetchcartitems";
import CartDisplay from "../ui/CartDisplay";
import TotalpriceCart from "../ui/TotalpriceCart";
import { moneyformat } from "../helper/Moneyformat";
import { useNavigate } from "react-router-dom";

function Cart() {
const {carttoggle} = useSelector(state=>state.uistore)
const dispatch = useDispatch()
const {data:cartData} = UsefetchCartItems()
const naviate = useNavigate()
function handelCheckOut(){
   naviate('/checkout')
   dispatch(setCartToggel(false))
}

  return (
    <div className={`bg-white flex flex-col justify-between right-0 top-0 ${carttoggle ? "xs:w-[100%] xl:w-[30%] md:w-[40%] p-3" : "w-[0] "} duration-200 fixed h-screen transition-all ease-in-out z-30`}>
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
       <h1 className="text-xl font-semibold text-slate-700">Cart</h1>
       <h1 className="text-red-500" onClick={()=>dispatch(setCartToggel())}><TiDeleteOutline size={30} /></h1>
       </div>
       <CartDisplay data={cartData}/>
       </div>
       <div>
       {cartData?.cartItem?.length > 0  &&
        <TotalpriceCart data={cartData}/>
}    
 { cartData?.cartItem?.length > 0  && <button onClick={()=>handelCheckOut()} className="bg-red-500 w-full py-1 hover:bg-red-600 transition-all font-semibold text-white rounded-lg">CheckOut <span>{moneyformat(cartData?.grandtotal)}</span> </button>}
</div>
    </div>
  )
}
export default Cart