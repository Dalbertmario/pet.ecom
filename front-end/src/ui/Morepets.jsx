import { useState } from "react"
import { useDispatch } from "react-redux"

export default function Morepets({hover}) {
const dispatch = useDispatch()
const [tr,settr]=useState(false)
  return (
 <>
    <div className="absolute rounded-b-xl">
    <div className="flex flex-col bg-slate-100" onMouseLeave={()=>dispatch(hover(false))}>
      <div className="flex flex-row">
      <button onMouseEnter={()=>settr(true)} className="flex justify-start hover:text-red-500 transition-all hover:font-balance p-3 mr-5">Birds </button>
      {tr && <div className="flex flex-col">
          <button className="px-3">Food</button>
          <button className="px-3">Toys</button>
       </div>}
      </div>
      <button className="flex justify-start hover:text-red-500 transition-all hover:font-balance p-3 mr-5">Fish</button>
    </div>
    </div>
</>
  )
}
