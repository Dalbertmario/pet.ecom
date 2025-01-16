import React,{ useMemo, useState } from "react"
import clsx from 'clsx'
import { FaHeart } from "react-icons/fa";
import { moneyformat } from "../helper/Moneyformat"
import { CiHeart } from "react-icons/ci";
import { NavLink } from "react-router-dom"
import { useSelector } from "react-redux"
import CartingData from "../features/Carting/carting"
import UseCreateWishlist from "../features/wishlisting/createwish";
import UseDeleteWishlist from "../features/wishlisting/deleteWish";
import UseGetWishlist from "../features/wishlisting/getWish";
import { MdDeleteOutline } from "react-icons/md";


function DisplayingProducts({price=[],data=[],page=[]}) {
const {data:wishdata}=UseGetWishlist()
const {mutate:wishMutate} =UseCreateWishlist()
const {mutate:deleteMutate} = UseDeleteWishlist()
const [productPrice,setProductPrice]=useState(null)
const {productid,productimage,productname,brandname} = data
const [wishList,setwishlist]=useState(false)
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
  console.log(datas)
   if(datas[0]){
     const cartitem= datas[0]
     cartmutate({productid:cartitem.productid,quantity:1,varientid:cartitem.id,userid:roles?.user?.id})
   }else{
     const cartitem = {...datas}
     cartmutate({productid:cartitem.productid,quantity:1,varientid:cartitem.id,userid:roles?.user?.id})
   }
  
}
function handelWishing(data){
  setwishlist(e=>!e)
  if(!wishList){
  wishMutate(data)
  }else{
    deleteMutate(data)
  }
}
function handeldeleteWishlist(od){
  deleteMutate(od)
}
  return (
    <div className=" bg-white wrapped-2">
        
            <div className="shadow-xl flex flex-col rounded-lg  min-h-[450px] justify-between">
            <NavLink to={`/products/${correctedlink}/${productid}`}>
            <img src={productimage}/>
            </NavLink>
            <div className="productjus xs:text-[11px] xl:text-[15px] md:text-[15px]">
             <div className="flex flex-col" > <NavLink to={`/products/${correctedlink}/${productid}`}><p className="hover:text-red-500">{productname}</p></NavLink>
          { page === 'wishlist' ?  <button className="text-red-500 transition-all hover:text-red-800" onClick={()=>handeldeleteWishlist({proid:productid})}><MdDeleteOutline size={18}/></button> : <button className="text-slate-400 flex items-center justify-between">{brandname} <span onClick={()=>handelWishing({proid:productid})}>{!wishList && !wishdata?.find(el=>el.proid === productid)?.proid ? <CiHeart size={20}/> : <button className="text-red-500">{<FaHeart size={20}/>}</button>}</span></button> }</div>
            <p className="flex gap-2">
             {!productPrice?.id ? def.map(el=><p key = {el.id}>{moneyformat(el.offerprice)}</p>) : <p>{moneyformat(productPrice.offerprice)}</p>}
             <span className="line-through text-slate-400">
              {!productPrice?.id ? def?.map(el=><p key={el.id}>{moneyformat(el.price)}</p>) : <p>{moneyformat(productPrice.price)}</p>}
             </span>
              <span className="bg-red-400 rounded-md px-1 font-medium text-white">
              Save {!productPrice ? def.map(el=> Math.round((el.offerprice/el.price)*10)) : Math.round((productPrice?.offerprice / (productPrice?.price || 1)) * 10)} %
              </span>
            </p>
            <div className={clsx(`flex outline-gray-300 flex-row gap-2 flex-wrap text-[13px]`)}>
              {pricedata?.map(el=>
              <button onClick={()=>handelClick(el?.id)} key={el?.id} className={clsx(` outline-slate-300 flex gap-4 outline outline-2 py-1 px-1 rounded-lg`)}>
                {el?.weight}</button>)}</div>
            <button onClick={()=>handelAddProduct(toAddWeight || def.map(el=>el))} className="product-btn">Add to cart</button>
                
            </div>
            </div>
            </div>
  )
}

export default React.memo(DisplayingProducts)