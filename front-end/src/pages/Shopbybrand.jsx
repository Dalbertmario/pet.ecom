import { NavLink, useParams } from "react-router-dom"
import UseBrandFetching from "../features/brand/Brandproducts"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import DisplayingProducts from "../ui/DisplayingProducts"

export default function Shopbybrand() {
const {brand} = useParams()
const {data:productData,isLoading:productLoading} = UseBrandFetching(brand)
const {data:priceData,isLoading}= Usepriceing()
console.log(productData)

  return (
    <div className="flex flex-col gap-3 contenBody p-1 ">
    <p className="flex gap-2 font-extralight text-red-500 "><NavLink to='/userdash'>Home</NavLink> <p className="text-slate-600 font-thin">{brand}</p></p>
       <h1 className="text-slate-600 font-semibold text-xl">{brand}</h1>
       <div className="flex gap-5 flex-wrap justify-center">
       {productData?.map(el=>(
          <DisplayingProducts key={productData.productid} price={priceData} data={el} loading={productLoading}/>
        ))}
       </div>
          
     
  </div>
  )
}
