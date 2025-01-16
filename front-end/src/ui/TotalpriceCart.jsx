
import { moneyformat } from "../helper/Moneyformat";

export default function TotalpriceCart({data}) {

  return (
    <div className="flex flex-col gap-5">
        <div>
       <p className="font-semibold">Price Details</p>
       <p className=" flex justify-between">MRP(incl Taxed) <span className="font-mono">{moneyformat(data?.acutalPrice)}</span></p>
       <p  className="border-b-[2px] text-red-500 font-bold border-red-500 flex justify-between">You saved <span className="font-mono">{moneyformat(data?.acutalPrice - data?.grandtotal)}</span></p>
       <p className="flex justify-between">You pay <span className="font-mono">{moneyformat(data?.grandtotal)}</span></p> 
       </div>
       <div>
       </div>
    </div>
  )
}
