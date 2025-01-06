import React,{ useMemo, useState } from "react"
import clsx from 'clsx'
import { moneyformat } from "../helper/Moneyformat"
import { NavLink } from "react-router-dom"

function DisplayingProducts({price=[],data}) {
const [productPrice,setProductPrice]=useState()
const {productid,productimage,productname,brandname} = data

const pricedata = useMemo(() => price?.filter(el => el.productid === productid), [price, productid]);

function handelClick(id){
  const data = pricedata.find(el => el?.id === id);
  if (data) setProductPrice(data);
}

const def = useMemo(() => {
  return pricedata?.reduce((acc, dat) => {
    if (!acc.some(item => item?.productid === dat?.varient_id)) {
      acc.push(dat);
    }
    return acc;
  }, []);
}, [pricedata]);

const linkCorrection = productname?.split(' ')
const linkarray =[]

linkCorrection.map(el=>{
  if(el ==='/'){
     linkarray.push(' ')
  }else{
    linkarray.push(el)
  }
})

const correctedlink = useMemo(() => {
  return linkCorrection.map(el => (el === '/' ? ' ' : el)).join(' ');
}, [linkCorrection]);

  return (
    <div className=" bg-white wrapped-2">
            <div className="shadow-xl flex flex-col rounded-lg  min-h-[450px] justify-between">
            <NavLink to={`/products/${correctedlink}/${productid}`}>
            <img src={productimage}/>
            </NavLink>
            <div className="productjus xs:text-[11px] xl:text-[15px] md:text-[15px]">
             <div className="hover:text-red-500 flex flex-col" > <NavLink to={`/products/${correctedlink}/${productid}`}><p>{productname}</p></NavLink>
            <p className="text-slate-400">{brandname}</p></div>
            <p className="flex gap-2">
             {!productPrice?.id ? def.map(el=><p key = {el.id}>{moneyformat(el.offerprice)}</p>) : <p>{moneyformat(productPrice.offerprice)}</p>}
             <span className="line-through text-slate-400">
              {!productPrice?.id ? def?.map(el=><p key={el.id}>{moneyformat(el.price)}</p>) : <p>{moneyformat(productPrice.price)}</p>}
             </span>
              <span className="bg-red-400 rounded-md px-1 font-medium text-white">
              Save {!productPrice ? def.map(el=> Math.round((el.offerprice/el.price)*10)) : Math.round((productPrice?.offerprice / (productPrice?.price || 1)) * 10)} %
              </span>
            </p>
            <h1 className={clsx(`flex ${pricedata[0] && 'outline-red-500'} outline-gray-300 flex-row gap-2 flex-wrap text-[13px]`)}>{pricedata?.map(el=><button onClick={()=>handelClick(el?.id)} key={el?.id} className={clsx(`${productPrice?.id ? 'outline-red-400' : ''} flex gap-4 outline outline-2 outline-slate-300 p-1 px-2 rounded-lg`)}>{el?.weight}</button>)}</h1>
            <button className="product-btn">Add to cart</button>
            </div>
            </div>
            </div>
  )
}

export default React.memo(DisplayingProducts)