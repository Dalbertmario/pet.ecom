import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UseTitileformation } from "../helper/Titleformation"
import SingelProduct from "../ui/SingelProduct"

export default function DisplaySingleProduct() {
const  {id,productname} = useParams()
const [product,setproduct] = useState()
const [weight,setWeight] = useState()
const api = import.meta.env.VITE_API_BACKEND 
useEffect(function(){
    async function fetchproduct(){
        try{
        const product = await fetch(`${api}/products/cat-food/${id}`)
        if(!product.ok) throw new Error('Unexprected error')
        const data = await product.json()
        setproduct(data)
    }catch(err){
        console.log(err.message)
    }
    }
    if(id) fetchproduct()
},[id,api])

useEffect(function(){
    async function fetchproduct(){
        try{
        const product = await fetch(`${api}/products/selected-food-product/${id}`)
        if(!product.ok) throw new Error('Unexprected error')
        const data = await product.json()
        setWeight(data)
    }catch(err){
        console.log(err.message)
    }
    }
    if(id) fetchproduct()
},[id,api])
const title = UseTitileformation(productname)
  return (
    <div className="contenBody">
      <h1 className="text-slate-600 font-medium">{title}</h1>
      {product?.map(el=>(
        <SingelProduct key={el.productid} data={el} weights={weight}/>
      ))}
 </div>
  )
}
