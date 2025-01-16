import clsx from 'clsx'
import { useDispatch } from 'react-redux'
import UseFetchproducts from '../features/productFetching/catproduct/catheader'
import { NavLink } from 'react-router-dom'

export default function Catheader({hover,hoverstate}) {
const dispatch = useDispatch()

  return (
    
          <div className={clsx(`flex justify-center gap-8 w-screen z-10 ${hoverstate ? 'w-screen h-[180px]' : 'h-[0px] w-screen'} ease-in-out  duration-300 bg-slate-100 transition-all `)} onMouseLeave={()=>dispatch(hover(false))}>
            {
              hoverstate &&
             <>
                   <div className="flex flex-col items-center gap-2">
                    <h1 className='font-semibold'>Food & Treats</h1>
                   <NavLink to={`/headerpro/${'cat-dry'}`}><button className='hover:text-red-600 hover:bg-slate-300 transition-all rounded-lg'>Dry Food</button></NavLink> 
                   <NavLink to={`/headerpro/${'cat-wet'}`}> <button className='headerBtn'>Wet Food</button>  </NavLink>
                  <NavLink to={`/headerpro/${'cat-treat'}`}><button  className='headerBtn'>Treats</button></NavLink>  
                   </div>
                   <div className="flex flex-col items-center gap-2">
                     <h1 className='font-semibold'>Cat Litters</h1>
                  <NavLink to={`/headerpro/litter`}> <button className='headerBtn'>Cat Litter</button></NavLink>  
                   <NavLink to={`/headerpro/litter`}></NavLink>   <button className='headerBtn'>Cat Litter trays</button>
                   </div>
                   <div className="flex flex-col items-center  gap-2">
                     <h1 className='font-semibold'>Essentials</h1>
                    <NavLink to='/headerpro/cat-toy'><button className='headerBtn'>Toys</button></NavLink> 
                   <NavLink to='/headerpro/cat-grooming'> <button className='headerBtn'>Grooming</button></NavLink> 
                   </div>
     
                   <div className="flex flex-col gap-2 items-center">
                     <h1 className='font-semibold'>Healthcare</h1>
                    <NavLink to='/headerpro/cat-sup'> <button className='headerBtn'>Healthcare aids</button></NavLink>
                    <NavLink to='/headerpro/flea-tick'><button className='headerBtn'>Flea & ticks</button></NavLink> 
                   </div>
                   </>    
}   
            </div>
       
  )
}
