import { useState } from "react";
import AdminaddproductHeader from "../../ui/AdminaddproductHeader";
import AdminAddproductShow from "../../ui/AdminAddproductShow";
import UseProductfrom from "../../features/Orderdetails/ProductDisp";
import Loading from "../../ui/Loading";

export default function AdminAddproduct() {
const [next,setnext]=useState(10)
const [pre,setPrev]=useState(0)
const {data,isLoading} = UseProductfrom({next:next,previous:pre})

console.log(next,pre)
  return (
    <div className="bg-stone-200  p-5">
        <div className="bg-white flex flex-col gap-5 min-h-[85vh] h-auto p-5 rounded-lg">
            <div className="flex flex-row justify-between">
                <h1 className="text-xl font-semibold text-slate-500">Products</h1>
                <button className="bg-blue-600 rounded-lg hover:bg-blue-500 transition-all text-white font-semibold p-3">Add products</button>
            </div>
            <div className="flex flex-row justify-between">
                <input placeholder="Search" className="bg-stone-200 transition-all focus:bg-white focus:outline focus:outline-2 focus:outline-blue-500 font-semibold text-stone-700 px-2 rounded-lg py-1 w-[80%]" type="text"/>
                <button className="outline outline-1 font-semibold rounded-lg p-2 px-5 hover:font-semibold outline-slate-300 hover:text-blue-700 hover:outline-2 text-slate-500 hover:outline-blue-600">Filter</button>
            </div>
            <div className=" xs:overflow-scroll">
                <AdminaddproductHeader/>
              {isLoading ?<Loading/> : <AdminAddproductShow data={data} next={next} prev={pre} btnext={setnext} btnprv={setPrev}/>}
            </div>
        </div>
    </div>
  )
}
