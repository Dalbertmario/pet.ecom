import { NavLink } from "react-router-dom";

export default function AdminPage() {
  return (
    <div >
      <div className="flex gap-4 flex-row w-[300px]">
      <NavLink to='/createRole'><button className="adinBtn">Create a role</button></NavLink>
      </div>
       
    </div>
  )
}
