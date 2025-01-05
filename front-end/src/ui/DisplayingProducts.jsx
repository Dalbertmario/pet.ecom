import { useState } from "react"
import clsx from 'clsx'
import { moneyformat } from "../helper/Moneyformat"
import { NavLink } from "react-router-dom"
export default function DisplayingProducts({price=[],titles,data,loading}) {
const [productPrice,setProductPrice]=useState()
const {productid,productimage,productname,brandname} = data

const pricedata = price?.filter(el=>el.productid === productid)
function handelClick(id){
  console.log(id)
  const data = pricedata.find(el=>el?.id === id)
  console.log(data)
  setProductPrice(data)
}
const def = pricedata?.reduce((acc,dat)=>{
  if(!acc?.some(item => item?.productid === dat?.varient_id)){
    acc?.push(dat);
  }
  return acc
},[])
  return (
    <div className=" bg-white wrapped-2">
            <div className="shadow-md flex flex-col rounded-lg justify-between ">
            <img src={productimage}/>
            <div className="productjus xs:text-[11px] xl:text-[15px] md:text-[15px]">
            <NavLink to={`/products/${productname}/${productid}`}> <div className="hover:text-red-500 flex flex-col" ><p>{productname}</p>
            <p className="text-slate-400">{brandname}</p></div> </NavLink>
            <p className="flex gap-3">
             {!productPrice?.id ? def.map(el=><p key = {el.id}>{moneyformat(el.offerprice)}</p>) : <p>{moneyformat(productPrice.offerprice)}</p>}
             <span className="line-through text-slate-400">
              {!productPrice?.id ? def?.map(el=><p key={el.id}>{moneyformat(el.price)}</p>) : <p>{moneyformat(productPrice.price)}</p>}
             </span>
              <span className="bg-red-400 rounded-md px-1 font-medium text-white">
              Save {!productPrice ? def.map(el=> Math.round((el.offerprice/el.price)*10)) : Math.round((productPrice?.offerprice / (productPrice?.price || 1)) * 10)} %
              </span>
            </p>
            <h1 className={clsx(`flex ${pricedata[0] ? 'outline-red-500' : 'outline-gray-500'} flex-row gap-2 flex-wrap xs:text-[11px] md:text-base xl:text-base`)}>{pricedata?.map(el=><button onClick={()=>handelClick(el?.id)} key={el?.id} className={clsx(`${productPrice?.id ? 'outline-red-400' : ''} flex gap-4 outline outline-2 outline-slate-400 p-1 px-2 rounded-lg`)}>{el?.weight}</button>)}</h1>
            <button className="product-btn">Add to cart</button>
            </div>
            </div>
            </div>
  )
}
