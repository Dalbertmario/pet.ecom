import { useState } from "react"
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import Imageview from "./Imageview";

export default function Imageover({children,image}) {
const [iamgeing,setImageing]=useState(false)
const [imageview,setImageView]=useState(false)
function handelImageClick(){
    setImageView(e=>!e)
    setImageing((e)=>!e)
}
  return (
    <div onMouseLeave={()=>setImageing((e)=>!e)} onMouseEnter={()=>setImageing(e=>!e)}>
       {imageview && <Imageview image={image} btn={setImageView}/>} 
      <div className={`${iamgeing && 'z-10 absolute rounded-md max-w-[100px] m-auto bg-black bg-opacity-45 flex justify-center  flex-wrap gap-3 '} h-[100px] w-[100px] absolute`}>
        <button onClick={()=>handelImageClick()} className="text-white"><IoMdEye size={20}/></button>
      </div> 
      <div className={`${iamgeing && 'z-5'}`}>{children}</div> 
    </div>
  )
}
