import { useDispatch, useSelector } from "react-redux"
import Usepriceing from "../features/productFetching/catproduct/Productprice"
import DisplayingProducts from "../ui/DisplayingProducts"
import { NavLink, useParams } from "react-router-dom"
import UseFetchproducts from "../features/productFetching/catproduct/catheader"
import Loading from "../ui/Loading"
import { toggelCathover } from "../ui/uistore"

export default function HeaderProducts() {
const dispatch = useDispatch()
dispatch(toggelCathover(false))
const {data:priceData} = Usepriceing()
const {animal}=useParams()
const {data,isLoading} = UseFetchproducts(animal)
if(isLoading ) return <Loading/>
  return (
    <div className="contenBody flex p-2">
      <p className="font-thin flex flex-row gap-3"><span className="text-red-500 "><NavLink to='/userdash'>Home</NavLink></span> <p>{animal}</p></p>
        <div>
        <h1 className="text-xl text-slate-600 font-semibold">{animal}</h1>
       </div>
       <div className="flex gap-2 flex-wrap justify-center">
        {data.map(el=>( 
            <div  key={el.productid}>
                <DisplayingProducts  price={priceData} titles={animal} data={el} loading={isLoading}/>
                </div>))
       
}
</div>
    </div>
  )
}
