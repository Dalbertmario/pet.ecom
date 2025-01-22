import { useState } from "react"
import UsefetchCartItems from "../features/Carting/fetchcartitems"
import { moneyformat } from "../helper/Moneyformat"
import { useNavigate } from "react-router-dom"
import UseOrderPost from "../features/checkOut/checkout.js"

export default function CheackOut() {
const [orderplace,setOrderplace]=useState(false)
const {mutate}=UseOrderPost()
const navigate = useNavigate()
const {data:cartData} = UsefetchCartItems()

if(cartData?.cartItem?.length === 0){
    return navigate('/userdash')
}

function handelOrderPost(data){
     const role = JSON.parse(localStorage.getItem('role'))
     const setup = data.cartItem
     console.log(setup)
     mutate({userid:role.user.id,items:setup})
} 


  return (
    <div className="contenBody p-2">
       <div>
        <button onClick={()=>setOrderplace((e)=>!e)} className="bg-red-500 hover:bg-red-700  transition-all rounded-lg p-2 text-white">Cash on Delivery</button>
        </div>
       <div className={`p-3 ${orderplace ? 'h-[100%] w-[100%] bg-slate-100' :'w-[20%] h-[0%]'} ease-in-out transition-all delay-100`}>
           {orderplace && <div onClick={()=>handelOrderPost(cartData)} className="delay-300 p-3"><button className="bg-red-500 text-white transition-all hover:p-3 rounded-lg p-2">Place Order {moneyformat(cartData.grandtotal)}</button>
            <p className="text-blue-500 text-[11px]">Terms & Condition applied</p> </div> }
       </div>
    </div>
  )
}
