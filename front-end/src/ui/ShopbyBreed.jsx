export default function ShopbyBreed({breed}) {

  return (
    <div className="p-3 flex flex-col gap-3">
      <h1 className="text-xl font-medium text-slate-500">Shop by Brand</h1>
      <div className="flex flex-row gap-4 justify-between rounded-sm overflow-x-auto">
        {breed?.map(el=>(<div key={el.id}><img className="shopBrand" src={el.image_url}/>
        <p className="flex justify-center font-medium">{el.proname}</p></div>))}
      </div>
    </div>
  )
}
