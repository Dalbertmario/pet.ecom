import { FaBell } from "react-icons/fa";

import { IoMdSettings } from "react-icons/io";
export default function AdminHeader() {
const role = JSON.parse(localStorage.getItem('role'))

  return (
    <div className="bg-white h-[50px] ">
       <div className="flex gap-6 justify-end p-2">
           <button>country</button>
           <button className="text-slate-500
           "><FaBell size={30}/></button>
           <button className="text-slate-400"><IoMdSettings size={30}/></button>
           <button>profile</button>
       </div>
    </div>
  )
}
