import { MdOutlineDeleteOutline } from "react-icons/md";
import { moneyformat } from "../helper/Moneyformat";

export default function CartDisplay({data=[]}) {

  return (
    <div className="overflow-y-scroll md:h-[600px] xl:h-[600px] xs:h-[450px]">
        {data?.cartItem ? (
    data.cartItem.map((el) => (
        <div key={el.id} className="flex outline outline-1 p-2 outline-red-500 flex-row gap-2 text-[13px] justify-between" >
        <img className="max-w-[100px]" src={el.productimage} alt="Product" />
        <div className="flex flex-col gap-3" >
        <p>{el.productname}</p>  
        <p>{moneyformat(el.price)}</p> 
        </div>
        <button className="text-red-500"><MdOutlineDeleteOutline size={20} /></button>
        </div>
    ))
  ) : (
    <p>No items in the cart</p>
  )}
    </div>
  )
}
