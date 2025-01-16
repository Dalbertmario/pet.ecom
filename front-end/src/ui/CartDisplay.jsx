import { MdOutlineDeleteOutline } from "react-icons/md";
import { moneyformat } from "../helper/Moneyformat";
import UseDeleteItem from "../features/Carting/CartItemDeleting";
import Loading from "./Loading";
import { useSelector } from "react-redux";

export default function CartDisplay({data=[]}) {
const {mutate,isLoading}=UseDeleteItem()
const {carttoggle}=useSelector(state=>state.uistore)
function handelDelete(data){
  mutate(data)
}

if(isLoading) return <Loading/>
  return (
    <div className={`overflow-y-scroll ${carttoggle ? 'delay-200 w-[100%]' : 'w-[0%] delat-550'} transition-all md:h-[600px] xl:h-[600px] xs:h-[450px] ${data?.cartItem?.length > 0 ? ' shadow-md bg-slate-100' : ''}`}>
        {data?.cartItem?.length > 0 ? (
    data.cartItem.map((el) => (
        <div key={el.cartid} className="flex outline outline-1 p-2 outline-red-500 flex-row gap-2 text-[13px] justify-between" >
        <img className="max-w-[100px]" src={el.productimage} alt="Product" />
        <div className="flex flex-col gap-3" >
        <p>{el.productname}</p>  
        <div className="flex gap-2">
        <p className="line-through text-slate-400">{moneyformat(el.price)}</p> 
        <p >{moneyformat(el.offerprice)}</p>
        <p>Quantity :{el.quantity}</p>
        </div>
        </div>
        <button onClick={()=>handelDelete(el)} className="text-red-500"><MdOutlineDeleteOutline size={20} /></button>
        </div>
    ))
  ) : (
    <p>No items in the cart</p>
  )}
    </div>
  )
}
