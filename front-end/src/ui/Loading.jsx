import { AiOutlineLoading3Quarters } from "react-icons/ai";
export default function Loading() {
  return (
    <div className="max-w-[50px] m-auto mt-[350px] text-red-500">
    <div>
        <p className="animate-spin">
        <AiOutlineLoading3Quarters size={50} />
        </p>
       
    </div>
    </div>
  )
}
