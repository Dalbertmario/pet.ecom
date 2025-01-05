export default function SingelProduct({data=[], weights=[]}) {
const  {productimage,brandname,productname} = data

console.log(weights)
const def = weights?.reduce((acc,dat)=>{
    if(!acc?.some(item => item?.varient_id === dat?.varient_id)){
      acc.push(dat);
    }
    return acc
  },[])
  return (
    <div>
      <div className="grid grid-cols-[1fr_1fr] gap-2" >
        <div>
        <img src={`${productimage}`}/>
        </div>
        <div>
            <p>{productname}</p>
            <p>{brandname}</p>
            <p>{def.map(el=>(
                <div  key={el.id} className="flex gap-4">
                <p className="line-through">{el.price}</p>
                <p>{el.offerprice}</p>
                </div>
            ))}</p>
            <div className="flex gap-3">
            {weights.map(el=>(<div key={el.id}>
                <h1 className="outline outline-2 outline-slate-400 p-1 rounded-lg">{el.weight}</h1>
            </div>))}
            </div>
        </div>
      </div>
    </div>
  )
}
