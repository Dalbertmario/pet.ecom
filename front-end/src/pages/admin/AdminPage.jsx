import { NavLink } from "react-router-dom";
import AdminOverview from "../../ui/AdminOverview";
import UseAllDataFetching from "../../features/Orderdetails/OrderdetailsFetching";
import { useState } from "react";
import AdminTopcountry from "../../ui/AdminTopcountry";
import AdminTotalProduct from "../../ui/AdminTotalProduct";
import Loading from '../../ui/AdminHeader'
import UseAllOrderDetails from "../../features/Orderdetails/Allorders";
import Recentorders from "../../ui/Recentorders";
import UserecentenOrder from "../../features/Orderdetails/RecentOrder";

export default function AdminPage() {
const [select,setSelect]=useState('weekly')
const {data,isLoading} = UseAllDataFetching(select)
const {data:totalorder,isLoading:totalOrderloading}=UseAllOrderDetails()
const {data:recentOrder,isLoading:recentOrderLoading}=UserecentenOrder()
if(isLoading) return <Loading/>
  return (
    <div className=" flex flex-col p-3 gap-4 h-full bg-stone-200" >
      <div className="flex gap-4 flex-row w-[300px]">
      <NavLink to='/createRole'><button className="adinBtn">Create a role</button></NavLink>
      </div>
      <div>
       <AdminOverview selection={select} select={setSelect} overviewData={data}/>
       </div>
       <div>
       <AdminTopcountry country={data}/>
       </div>
       <div>
        <AdminTotalProduct totalOrder={totalorder} />
       </div>
       <div>
        <Recentorders order={recentOrder}/>
       </div>
    </div>
  )
}
