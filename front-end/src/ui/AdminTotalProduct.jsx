import { NavLink } from "react-router-dom";

export default function AdminTotalProduct({totalOrder}) {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
       <div className="flex flex-row justify-between">
       <h1 className="text-slate-600 font-semibold text-xl">Top product</h1>
       <NavLink to='/addproduct'>  <button className="outline outline-1 rounded-lg p-2 hover:font-semibold outline-slate-300 hover:text-blue-700 transition-all hover:outline-2 text-slate-500 hover:outline-blue-600">View all</button></NavLink>
       </div>
       <div>
         <ul className="flex flex-col gap-3 p-2">
            {totalOrder?.map(el=>(
                <li key={el}>
                    <div className="flex gap-5">
                        <div className=" h-[80px] w-[80px]">
                        <img  src={el?.productimage}/>
                        </div>
                        <div>
                        <h1 className="font-semibold text-[14px]">{el?.productname}</h1>
                        <h1 className="text-slate-500 text-[12px]"><span className=" text-slate-400 font-semibold">Sold :</span> {el?.quantity}</h1>
                        </div>
                    </div>
                </li>
            ))}
         </ul>
       </div>
      
    </div>
  )
}
