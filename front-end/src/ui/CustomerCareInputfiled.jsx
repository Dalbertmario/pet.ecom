import { useForm } from "react-hook-form";
import { FaArrowRight } from "react-icons/fa6";


export default function CustomerCareInputfiled({setCusText,handelSendmsg}) {
const {register,reset,handleSubmit} = useForm()

function handelClick(data){
 if(data.text !== ''){
    setCusText((msg)=>[...msg,data.text])
    handelSendmsg(data)
    reset()
}
}

  return (
   
       <form autoComplete="off" onSubmit={handleSubmit(handelClick)} className="flex justify-center transition-all " >
              <div className="flex flex-row w-[80%]  justify-center items-center">
              <input  {...register('text')}  placeholder="Start typing..." className="py-4 p-2 w-[95%] bg-slate-300 outline-2 focus:outline-red-500 rounded-l-md  h-auto" type="text" />
              <button onClick={()=>handelClick} className="bg-slate-300 py-5 px-2 rounded-r-md hover:bg-slate-500 transition-all">
              <FaArrowRight />
              </button>
              </div>
        </form>
    
  )
}
