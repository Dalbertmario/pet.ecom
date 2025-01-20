import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";
import { MdOutlineDelete } from "react-icons/md";
import { MdOutlineModeEdit } from "react-icons/md";
import { moneyformat } from "../helper/Moneyformat";


export default function AdminAddproductShow({next,btnext,btnprv,prev,data}) {
function handelIncrement (){
   btnext(e=>e+10)
   btnprv(e=>e+10)
}
function handelDecrement(){
  if(prev >= 1){
    btnprv(e=>e-10)
    btnext(e=>e-10)
  }
}

  return (
    <>
    <div className=" flex flex-col gap-4">
      <div>
        <ul className="flex flex-col gap-4">
            {data?.products.map(el=>(<li className="grid xs:w-[700px] border-b-2 xl:w-[920px] md:w-[700px] content-center items-center text-stone-700 font-semibold text-[12px] p-2 grid-cols-[1.5fr_1fr_0.5fr_1fr] " key={el.productid}>
                <div className="max-w-[100px] flex gap-2 flex-row">
                <img src={el.productimage}/>
                <div>
                <p>#{el.productid}</p>
                <p className="text-xs font-thin">{el.productname}</p>
                </div>
                </div>
                <p className="font-semibold">{moneyformat(el.price)} <span>({el.weight})</span></p>
                <p className="font-semibold">{el.total_orders}</p>
                <p className="flex font-semibold justify-between">{el.price * el.total_orders} <span className="text-slate-500 flex flex-row gap-2"><button className="hover:text-blue-600"><MdOutlineDelete size={20} /></button> <button className="hover:text-blue-600"><MdOutlineModeEdit size={20} /></button></span></p>
            </li>))}
        </ul>
      </div>
      
    </div>
    <div className="flex justify-between flex-row just">
    <div className="flex flex-row gap-2">
        <button title="delete" className="flex  gap-2 font-semibold hover:text-blue-500 transition-all items-center" onClick={()=>handelDecrement()}><span><FaAngleDoubleLeft size={20}/></span> Previous</button>
        <button title="Edit" className="flex gap-2 font-semibold hover:text-blue-500 transition-all items-center" onClick={()=>handelIncrement()}>Next <span><FaAngleDoubleRight size={20}/></span></button>
    </div>
    <div>
        <p>Showing result {prev+1} to {next}</p>
    </div>
  </div>
  </>
  )
}
