import { NavLink } from "react-router-dom"
import UseAccountdetailsFetch from "../features/dashboard/accountDetailsFetch"

export default function Profile() {
const {data=[]}=UseAccountdetailsFetch()

console.log(data)
  return (
    <div className="contenBody p-4 flex flex-col gap-5">
      <div className="flex gap-2 shadow-md p-2">
        <p className="bg-yellow-500 px-3 py-2 outline outline-3 outline-yellow-400 rounded-full">{data[0]?.user_name[0]}</p>
        <div>
        <p>{data[0]?.user_name}</p>
        <p>View acitivity</p>
        </div>
      </div>
      <NavLink to='/addressForm'><button className="p-2 shadow-md bg-slate-100  w-full flex justify-start transition-all hover:shadow-xl">Your Profile</button></NavLink>
      <NavLink to='/order'> <p className="p-2 shadow-md bg-slate-100 transition-all hover:shadow-xl">Orders</p></NavLink>
      <NavLink to='/wishlist'> 
      <p className="p-2 shadow-md bg-slate-100 transition-all hover:shadow-xl">Wishlist</p></NavLink>
      <NavLink to='/customer'><button className="p-2 shadow-md bg-slate-100 w-full flex justify-start transition-all hover:shadow-xl">Online Order help</button></NavLink>
      <p className="p-2 shadow-md bg-slate-100 transition-all hover:shadow-xl">Report</p>
       <NavLink to='/'><p className="p-2 shadow-md bg-slate-100 transition-all hover:shadow-xl">Log Out</p></NavLink> 
    </div>
  )
}
