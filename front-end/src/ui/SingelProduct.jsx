import { useState } from "react";
import { moneyformat } from "../helper/Moneyformat";
import clsx from 'clsx'

export default function SingelProduct({data=[], weights=[]}) {
const  {productimage,brandname,productname} = data
const [priceing,setPricing]=useState(weights[0] || null)
const def = weights?.reduce((acc,dat)=>{
    if(!acc?.some(item => item?.varient_id === dat?.varient_id)){
      acc.push(dat);
    }
    return acc
  },[])

  function handelWeight(item){
       setPricing(item)
  }
  
  return (
    <div>
      <div className="md:grid md:grid-cols-[1fr_1fr] xl:grid xl:grid-cols-[1fr_1fr]    gap-8 xs:flex xs:flex-col" >
        <div>
        <img src={`${productimage}`}/>
        </div>
        <div className="flex flex-col gap-5">
            <h1 className="font-semibold xl:text-xl md:text-xl xs:text-base">{productname}
            <p className="flex gap-2 text-base"> <p className="text-slate-400 text-xs">by</p> <span className="text-red-400">{brandname}</span></p>
            </h1>
           
            <p className="flex flex-col">{def.map(el=>(
                <div  key={el.id} className="flex gap-4 ">
                <p className="line-through text-slate-400 text-xl">{!priceing ? moneyformat(el.price) : moneyformat(priceing?.price)}</p>
                <p className="font-semibold text-xl flex justify-center gap-1">{!priceing ? moneyformat(el.offerprice) : moneyformat(priceing?.offerprice)} <span>{<p className="bg-red-600 px-2 text-sm content-center font-semibold text-white rounded-full">Save {!priceing ? Math.round((el.offerprice/el.price)*10)  : Math.round((priceing?.offerprice/priceing?.price)*10) }%</p>
              }</span></p>
                </div>
            ))}
             <p className="font-semibold text-green-600 text-xs">Inclusive all tax</p></p>
            
            {/* Size */}
            <p className="font-semibold text-[12px]">Size :{!priceing ? def.map(el=>el.weight) : priceing.weight}</p>
            <div className="flex gap-3">

            {/* Weight */}
            {weights.map(el=>(<div key={el.id}>
              <div className="flex flex-row">
              <button
                    onClick={() =>
                      handelWeight({
                        price: el.price,
                        offerprice: el.offerprice,
                        weight: el.weight,
                      })
                    }
                    className={`outline outline-1 outline-slate-300 px-3 py-1  text-sm rounded-lg transition-all text-slate-500 ${
                      priceing?.weight === el.weight
                        && "p-2  bg-red-100 outline outline-2 focus:outline-red-400 text-red-600 shadow-2xl"
                       
                    }`}
                  >
                    {el.weight}
                  </button>

                </div>
            </div>))}
            </div>
            {/* Quantity */}
            <div className=" outline outline-2 focus:outline-slate-600 outline-slate-300 max-w-[60px] p-1 rounded-lg hover:shadow-2xl">
            <p className="text-slate-500 text-sm">Quantity</p>
            <select className="bg-white max-w-[60px] px-3">
              <option >1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
            </select>
            </div>
            <button className="p-2 bg-red-500 text-white rounded-xl hover:shadow-2xl transition-all">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
