import { NavLink, useParams} from "react-router-dom"
import Usefetchcatfood from "../features/productFetching/catproduct/catfoodfetching"
import DisplayingProducts from "../ui/DisplayingProducts"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import { UseTitileformation } from "../helper/Titleformation"
import Loading from "../ui/Loading"

export default function ViewProducts() {
const {animal} = useParams()
const {data:productData,isLoading:productLoading} = Usefetchcatfood(animal)
const {data:priceData,isLoading} = Usepriceing()
const finalCorrectedtitle =UseTitileformation(animal)
if(productLoading) return <Loading/>
  return (
    <div className="flex flex-col gap-3 contenBody p-1 ">
      <p className="flex gap-2 font-extralight text-red-500 "><NavLink to='/userdash'>Home</NavLink> <p className="text-slate-600 font-thin">{finalCorrectedtitle}</p></p>
         <h1 className="text-slate-600 font-semibold text-xl">{finalCorrectedtitle}</h1>
         <div className="flex gap-5 flex-wrap justify-center">
         {productData?.map(el=>(
            <DisplayingProducts key={productData.productid} price={priceData} titles={animal} data={el} loading={productLoading}/>
          ))}
         </div>
    </div>
  )
}
