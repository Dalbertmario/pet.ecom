import { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import UseItemDelete from "../features/checkOut/OrderDeleting";

export default function WarningCancelOrder({orderid,btnCancel,btnState}) {
const {mutate}=UseItemDelete()
const ref = useRef()

useEffect(function(){
  function handelRemoveCancelOrder(e){
    if(ref.current && ref.current.contains(e.target)){
    btnCancel(e=>!e)
  }
  }
  if(btnState){
    document.addEventListener('click',handelRemoveCancelOrder)
  }else{
    document.removeEventListener('click',handelRemoveCancelOrder)
  }
  return ()=> document.removeEventListener('click',handelRemoveCancelOrder)
},[ref,btnState,btnCancel])

function handelConformDelete(){
   btnCancel(e=>!e)
  mutate(orderid)
  console.log(orderid)
}

  return ReactDOM.createPortal(
     <div ref={ref}  className="fixed inset-0  bg-black bg-opacity-50 flex justify-center items-center z-50 ">
        <div  className="bg-white rounded-xl p-5 z-10 xs:max-w-[400px] md:max-w-[600px] xl:max-w-[800px]">
            <h1 className="p-2">Sure,About canceling the order after canceling the order cannot be retrived</h1>
            <div className="flex flex-row gap-3">
                <button onClick={()=>btnCancel(e=>!e)}  className=" outline rounded-md p-2 outline-1 outline-slate-500"> back</button>
                <button onClick={()=>handelConformDelete()} className="bg-red-500 p-2 rounded-md text-white">Cancel order</button>
            </div>
        </div>
     </div>,document.body
  )
}
