import { useState } from "react";
import UseOrderFeching from "../features/checkOut/Ordersfetching";
import { useDispatch } from "react-redux";
import { FaPlus } from "react-icons/fa";
import { moneyformat } from "../helper/Moneyformat";
import WarningCancelOrder from "./WarningCancelOrder";    
import Loading from "../ui/Loading";
import UseItemDelete from "../features/checkOut/OrderDeleting";



export default function UserOrder() {
  const {mutate}=UseItemDelete()
  const { data, isLoading } = UseOrderFeching();
  const [canceling, setCanceling] = useState(false);
  const [orderid,setOrderid]=useState(null)
  const [clickedItemId, setClickedItemId] = useState(null);


  if (isLoading) return <Loading/>;
  if (data?.length === 0) return <p>No orders yet</p>;

  function handleClick(itemId) {
    setClickedItemId((prev) => (prev === itemId ? null : itemId));
  }

  function handelCanceling(orderid) {
    setCanceling(true);
   setOrderid(orderid)
  }
  console.log(clickedItemId)

  return (
    <div className="contenBody p-4">
      {canceling && <WarningCancelOrder fn={mutate} btnState={canceling} btnCancel={setCanceling} orderid={orderid} />}
      <h1 className="text-xl font-semibold text-slate-600">Your orders</h1>
      <ul className="flex flex-col gap-5 justify-center">
        {data?.map((el) => (
          <div key={el.orderid}>
            <div className="flex shadow-xl flex-row m-auto gap-5  max-w-[600px] transition-all hover:shadow-2xl items-center">
              <div className="flex flex-col gap-5">
                <img
                  className="max-h-[120px] max-w-[100px] shadow-xl flex gap-10"
                  src={el.productimage}
                  alt={el.productname}
                />
              </div>
              <div className="xs:text-xs content-start md:text-base xl:text-base">
                <h1 className="font-semibold text-slate-600">{el?.productname}</h1>
                <h1>
                  <span className="text-slate-600">Quantity :</span> {el.quantity}
                </h1>
                <h1>
                  <span className="text-slate-600">Price </span> {moneyformat(el.total)}
                </h1>
                <h1>
                  <span className="text-slate-600">No. of items :</span> {el.weight}
                </h1>
              </div>
              <div className="p-3 justify-end content-end items-end">
                <button className="text-red-500" onClick={() => handleClick(el.orderid)}>
                  <FaPlus />
                </button>
              </div>
            </div>

  
           
              <div
                className={`${clickedItemId === el.orderid ? 'h-[190px] overflow-scroll' : 'h-[0px] hidden'} max-w-[600px] flex flex-col gap-4 shadow-xl p-2 font-serif ease-in-out overflow-hidden transition-all duration-200 bg-white m-auto`}
                
              > 
          
               <h1>
                  Order ID #{el.orderid}
                  <span className="ml-5 bg-blue-300 py-1 px-1 rounded-full text-blue-700">
                    Confirmed
                  </span>
                </h1>
                <p>Product: {el.productname}</p>
                <p>Your order will be delivered in 2 days</p>
                <button
                  onClick={() => handelCanceling(el.orderid)}
                  className="bg-red-500 hover:bg-red-700 transition-all rounded-full p-1 text-white"
                >
                  Cancel Order
                </button>
              </div>
             
              </div>
             
        ))}
      </ul>
    </div>
  );
}
