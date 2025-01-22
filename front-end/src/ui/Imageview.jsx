import { createPortal } from "react-dom"
import { TiDeleteOutline } from "react-icons/ti";

export default function Imageview({image,btn}) {
  return createPortal(
    <div className=" h-screen fixed bottom-[0.4px] w-screen z-5 bg-black bg-opacity-55 ">
        <div className="bg-white mt-[100px] m-auto md:max-w-[500px] xl:max-w-[500px] xs:max-w-[350px] p-5 z-10 rounded-xl">
        <button onClick={()=>btn(e=>!e)}><TiDeleteOutline size={30} /></button>
        <img  className={`h-[500px] w-[500px] `} src={image}/>
        </div>
    </div>,document.body
  )
}
