import React,{ useMemo, useState } from "react"
import clsx from 'clsx'
import { moneyformat } from "../helper/Moneyformat"
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import CartingData from "../features/Carting/carting"

function DisplayingProducts({price=[],data}) {
const [productPrice,setProductPrice]=useState(null)
const {productid,productimage,productname,brandname} = data
const [toAddWeight,setWeight] = useState(null)
const {mutate:cartmutate} = CartingData()
const pricedata = useMemo(() => price?.filter(el => el.productid === productid), [price, productid]);
function handelClick(id){
  const data = pricedata.find(el => el?.id === id);
  if (data) setProductPrice(data);
  setWeight(data)
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

function handelAddProduct(datas){
  const roles = JSON.parse(localStorage.getItem('role'))
   if(datas[0]){
     const cartitem= datas[0]
     cartmutate({productid:cartitem.productid,quantity:1,varientid:cartitem.id,userid:roles?.user?.id})
   }else{
     const cartitem = {...datas}
     cartmutate({productid:cartitem.productid,quantity:1,varientid:cartitem.id,userid:roles?.user?.id})
   }
  
}
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
            <div className={clsx(`flex ${def.map(el=>el) && 'outline-red-500'} outline-gray-300 flex-row gap-2 flex-wrap text-[13px]`)}>{pricedata?.map(el=><button onClick={()=>handelClick(el?.id)} key={el?.id} className={clsx(`${productPrice?.id ? 'outline-red-400' : ''} flex gap-4 outline outline-2 outline-slate-300 py-1 px-1 rounded-lg`)}>{el?.weight}</button>)}</div>
            <button onClick={()=>handelAddProduct(toAddWeight || def.map(el=>el))} className="product-btn">Add to cart</button>
                
            </div>
            </div>
            </div>
  )
}

export default React.memo(DisplayingProducts)