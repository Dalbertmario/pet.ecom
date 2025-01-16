import { NavLink } from "react-router-dom"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import UsegetWishAll from "../features/wishlisting/getAllWish"
import DisplayingProducts from "../ui/DisplayingProducts"
import Loading from "../ui/Loading"

export default function Wishlist() {
const {data,isLoading} =UsegetWishAll()
const {data:priceData} = Usepriceing()

if(isLoading) return <Loading/>
  return (
    <div>
      <div className="flex flex-col gap-2 contenBody p-1 ">
      <div className="flex gap-2 font-extralight text-red-500 "><NavLink to='/userdash'>Home</NavLink> <p className="text-slate-600 font-thin">{'Wishlist'}</p></div>
         <h1 className="text-slate-600 font-semibold text-xl">{'WishListed Items'}</h1>
         <div className="flex gap-3 flex-wrap justify-center">
          {data?.length === 0 && <p className="text-slate-600">Wish items is been wishlisted </p>}
         {data?.map(el=>(
          <div  key={el.productid}>
            <DisplayingProducts page={'wishlist'} price={priceData} titles={'Wishlist'} data={el} loading={isLoading}/>
            </div> ))}
         </div>
    </div>
    </div>
  )
}
