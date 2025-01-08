import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <header>Admin Header</header>
       <Outlet/>
    </div>
  )
}
