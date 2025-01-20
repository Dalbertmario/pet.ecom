import { NavLink } from "react-router-dom"
import { moneyformat } from "../helper/Moneyformat"


export default function Recentorders({order}) {
console.log(order)
  return (
    <div className="bg-white p-5 flex flex-col gap-4">
    <div className="flex flex-row justify-between">
      <h1 className="text-xl font-semibold text-slate-500">Recent orders</h1>
    <button className="outline outline-1 rounded-lg p-2 hover:font-semibold outline-slate-300 hover:text-blue-700 transition-all hover:outline-2 text-slate-500 hover:outline-blue-600">View Orders</button> 
      </div>
      <div className="flex flex-row text-xs text-slate-500 font-semibold justify-between">
        <h1>ORDER</h1>
        <h1>DATE</h1>
        <h1>CUSTOMER</h1>
        <h1>AMOUNT</h1>
      </div>
      <div>
            {order?.map(el=>(
                <li className="flex flex-row text-[15px] justify-between" key={el}>
                    <h1 className="text-slate-600  font-semibold">#{el.orderid}</h1>
                    <h1 className="font-thin min-w-[50px]">{`${new Date(el.order_date).getFullYear()}/${new Date(el.order_date).getMonth()+1}/${new Date(el.order_date).getDate()}`}</h1>
                    <h1 className="font-thin min-w-[50px] ">{el.user_name}</h1>
                    <h1 className="font-semibold min-w-[50px] flex justify-center">{moneyformat(el.total)}</h1>
                </li>
            ))}
      </div>
    </div>
  )
}
