import clsx from "clsx";
import { useDispatch } from "react-redux";

export default function Dogheader({hover,hoverstate}) {
const dispatch = useDispatch()
  return (
    
      <div className={clsx(`flex justify-center gap-8 w-screen z-10  ${hoverstate ? 'w-screen h-[140px]' : 'h-[0px] w-screen'} ease-in-out  duration-300 bg-slate-100 transition-all`)}  onMouseLeave={()=>dispatch(hover(false))}>
         {hoverstate &&
          <>
              <div className={`flex flex-col gap-2`}>
                <h1 className="font-semibold text-base">Food</h1>
                <button className="headerBtn">Dry food</button>
                <button className="headerBtn">Wet food</button>
                <button className="headerBtn">Premium food</button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Treats</h1>
                <button className="headerBtn">Buscuits & Cookies</button>
                <button className="headerBtn">Dental</button>
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Supplies</h1>
                <button className="headerBtn">Toys</button>
                <button className="headerBtn">Grooming</button>
              </div>

              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Health</h1>
                <button className="headerBtn">Healthcare aids</button>
                <button className="headerBtn">Flea & ticks</button>
              </div>    
          </>
}   
    </div>
  )
}
