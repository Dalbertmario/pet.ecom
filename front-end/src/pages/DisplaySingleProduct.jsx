import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { UseTitileformation } from "../helper/Titleformation";
import SingelProduct from "../ui/SingelProduct";
import Loading from "../ui/Loading";

export default function DisplaySingleProduct() {
  const { id, productname } = useParams();
  const [product, setProduct] = useState([]);
  const [weight, setWeight] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const api = import.meta.env.VITE_API_BACKEND;

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
          `${api}/products/selected-food-product/${id}`
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

    if (id) fetchData();
  }, [id, api]);

  const title = UseTitileformation(productname);

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div className="text-red-500 text-center mt-5">
        <p>Error: {error}</p>
        <NavLink to="/">Go back</NavLink>
      </div>
    );

  return (
    <div className="contenBody bg-white flex flex-col gap-2 p-4">
      <h1 className="text-slate-600 font-medium mt-5">{title}</h1>
      {product.length > 0 ? (
        product.map((el) => (
          <SingelProduct key={el.productid} data={el} weights={weight} />
        ))
      ) : (
        <p className="text-slate-500 text-center">No product found</p>
      )}
    </div>
  );
}
