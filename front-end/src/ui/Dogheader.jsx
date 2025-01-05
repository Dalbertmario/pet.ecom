import clsx from "clsx";
import { useDispatch } from "react-redux";

export default function Dogheader({hover,hoverstate}) {
const dispatch = useDispatch()
  return (
    <div>
      <div className={clsx(`flex justify-center gap-5 w-screen z-10  ${hoverstate ? 'absolute right-[2px] p-10 h-[200px] w-screen mb-10' : 'mb-10 p-0 h-0'} bg-slate-100 transition-all`)}  onMouseLeave={()=>dispatch(hover(false))}>
              <div className="flex flex-col items-center gap-2">
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
              </div>
    </div>
  )
}
