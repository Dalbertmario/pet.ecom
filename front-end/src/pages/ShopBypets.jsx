import { NavLink, useParams } from "react-router-dom"
import UsefetchbyPets from "../features/shopbypet/pets"
import DisplayingProducts from "../ui/DisplayingProducts"
import { UseTitileformation } from "../helper/Titleformation"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import Loading from "../ui/Loading"

export default function ShopBypets() {
const {petname} = useParams()
const {data:productData,isLoading:productLoading}=UsefetchbyPets(petname)
const {data:priceData,isLoading:priceDataLoding} = Usepriceing()
const title =UseTitileformation(petname)
if(priceDataLoding || productLoading) return <Loading/>
  return (
    <div>
      <div className="flex flex-col gap-3 contenBody p-1 ">
      <p className="flex gap-2 font-extralight text-red-500 "><NavLink to='/userdash'>Home</NavLink> <p className="text-slate-600 font-thin">{title}</p></p>
         <h1 className="text-slate-600 font-semibold text-xl">{title}</h1>
         <div className="flex gap-5 flex-wrap justify-center">
         {productData?.map(el=>(
            <DisplayingProducts priceLoading={priceDataLoding} key={productData.productid} price={priceData} data={el}/>
          ))}
         </div>
    </div>
    </div>
  )
}
