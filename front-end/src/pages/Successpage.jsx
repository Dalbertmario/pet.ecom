import { useEffect } from "react";
import { TiTickOutline } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
export default function Successpage() {
const navigate = useNavigate()
useEffect(function(){
    const timer = setInterval(function(){
        navigate('/userdash')
   },2000)

   return ()=>clearTimeout(timer)
},[navigate])
  return (
    <div className="h-screen contenBody">
        <div className="bg-blue-900 mt-[350px] animate-slide-in m-auto items-center content-center rounded-full max-w-[100px]">
        <div className="text-red-600 animate-bounce">
        <TiTickOutline size={100} />
        </div>
        </div>
        <h1 className="flex justify-center font-semibold text-green-500">Your order placed suceessfully</h1>
    </div>
  )
}
