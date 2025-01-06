import { NavLink } from "react-router-dom";


export default function ShopbybrandButton({ logo }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-stone-500 mb-4">
        Shop by pet brand
      </h1>
      <div className="flex justify-center gap-2">
        {logo?.map((el) => (
          <button key={el.id} className="productBack">
          <NavLink to={`/shopbybrand/${el.proname}`}>
            <img src={el.image_url} alt={`Brand ${el.id}`}  />
            </NavLink>
          </button>
        ))}
      </div>
    </div>
  );
}
