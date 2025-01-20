import { Outlet } from "react-router-dom";
import AdminHeader from "../../ui/AdminHeader";

export default function AdminLayout() {
  return (
    <div className="bg-stone-200">
      <header><AdminHeader/></header>
      <div className="contenBody h-screen ">
       <Outlet/>
       </div>
    </div>
  )
}
