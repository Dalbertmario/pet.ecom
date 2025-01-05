import { useParams} from "react-router-dom"
import Usefetchcatfood from "../features/productFetching/catproduct/catfoodfetching"
import DisplayingProducts from "../ui/DisplayingProducts"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import { UseTitileformation } from "../helper/Titleformation"

export default function ViewProducts() {
const {animal} = useParams()
const {data:productData,isLoading:productLoading} = Usefetchcatfood(animal)
const {data:priceData,isLoading} = Usepriceing()
const finalCorrectedtitle =UseTitileformation(animal)

  return (
    <div className="flex flex-col gap-3 contenBody  p-1 ">
         <h1 className="text-slate-600 font-semibold text-xl">{finalCorrectedtitle}</h1>
         <div className="flex gap-5 flex-wrap justify-center ">
         {productData?.map(el=>(
            <DisplayingProducts key={productData.productid} price={priceData} titles={animal} data={el} loading={productLoading}/>
          ))}
         </div>
            
       
    </div>
  )
}
