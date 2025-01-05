export default function Shopbybrand({ logo }) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold text-stone-500 mb-4">
        Shop by pet brand
      </h1>
      <div className="flex justify-center gap-2">
        {logo?.map((el) => (
          <div key={el.id} className="productBack">
            <img src={el.image_url} alt={`Brand ${el.id}`}  />
          </div>
        ))}
      </div>
    </div>
  );
}
