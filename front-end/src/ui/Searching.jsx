import { NavLink } from "react-router-dom";

export default function Searching({datas}) {
  return (
    <div className={`searching absolute top-[60px] z-50 ${datas?.length > 1 ? 'h-auto w-auto duration-300' : 'h-[0%] w-[0px] hidden'}  transition-all delay-150  bg-slate-100`}>
      {datas?.map((el)=>(<div key={el.productid}>
         <div className="flex flex-col gap-10 justify-center">
         <NavLink to={`/search/${el.productid}`}>
         <button className="flex hover:text-red-400 justify-center transition-all">{el.productname}</button>
         </NavLink>
          </div>
      </div>))}
    </div>
  )
}
