import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom"
import DisplayingProducts from "../ui/DisplayingProducts";
import Usepriceing from "../features/productFetching/catproduct/Productprice";
import { useDispatch } from "react-redux";
import { setSearch } from "../ui/uistore";

export default function SearchViewPage() {
const {el} = useParams()
const {data:priceData} = Usepriceing()
 const [product, setProduct] = useState([]);
  const [weight, setWeight] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch()
const api = import.meta.env.VITE_API_BACKEND;

const id = parseInt(el)
product?.length > 0  && dispatch(setSearch(''))

console.log(product)
console.log(weight)
  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch product data
        const productResponse = await fetch(`${api}/products/cat-food/${id}`);
        if (!productResponse.ok) throw new Error("Failed to fetch product data");
        const productData = await productResponse.json();

        // Fetch weight data
        const weightResponse = await fetch(
          `${api}/products/selected-food-product/${parseInt(id)}`
        );
        if (!weightResponse.ok) throw new Error("Failed to fetch weight data");
        const weightData = await weightResponse.json();

        setProduct(productData);
        setWeight(weightData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    if (el) fetchData();
  }, [id,el,api]);
 

  return (
    <div className="contenBody p-2 flex flex-col gap-4">
            <p className="flex gap-2 font-extralight text-red-500 "><NavLink to='/userdash'>Home</NavLink> <p className="text-slate-600 font-thin">{product[0]?.productname}</p></p>     
        <p className="text-xl font-semibold text-slate-500">Search Result</p>
        {product.map(el=>(
          <div key={el.productid}>
           <DisplayingProducts price={priceData} data={el}/>
           </div>))}

    </div>
  )
}
