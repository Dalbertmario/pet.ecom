import clsx from "clsx";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

export default function Dogheader({hover,hoverstate}) {
const dispatch = useDispatch()

  return (
    
      <div className={clsx(`flex justify-center gap-8 w-screen z-10  ${hoverstate ? 'w-screen h-[140px]' : 'h-[0px] w-screen'} ease-in-out  duration-300 bg-slate-100 transition-all`)}  onMouseLeave={()=>dispatch(hover(false))}>
         {hoverstate &&
          <>
              <div className={`flex flex-col items-center gap-2`}>
                <h1 className="font-semibold text-base">Food</h1>
               <NavLink to='/headerpro/dog-dry'> <button className="headerBtn">Dry food</button></NavLink>
              <NavLink to='/headerpro/dog-wet'> <button className="headerBtn">Wet food</button></NavLink> 
              </div>
              <div className="flex flex-col items-center gap-2">
              <h1 className="font-semibold text-base">Treats</h1>
              <NavLink to='/headerpro/dog-treat'> <button className="headerBtn" >Treats</button></NavLink> 
              <NavLink to='/headerpro/dental'> <button className="headerBtn">Dental</button></NavLink> 
              </div>
              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Supplies</h1>
              <NavLink to='/headerpro/dog-toy'> <button className="headerBtn">Toys</button></NavLink> 
              <NavLink to='/headerpro/dog-grooming'> <button className="headerBtn">Grooming</button></NavLink> 
              </div>

              <div className="flex flex-col items-center gap-2">
                <h1  className="font-semibold text-base">Health</h1>
              <NavLink to='/headerpro/dog-sup'> <button className="headerBtn">Healthcare aids</button></NavLink> 
              <NavLink to='/headerpro/flea-tick'><button className="headerBtn">Flea & ticks</button></NavLink>  
              </div>    
          </>
}   
    </div>
  )
}
