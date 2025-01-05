import clsx from 'clsx'
import { useDispatch } from 'react-redux'

export default function Catheader({hover,hoverstate}) {
const dispatch = useDispatch()
  return (
     <div>
           <div className={clsx(`flex justify-center gap-8 w-screen z-10  ${hoverstate ? 'absolute right-[2px] p-10 w-screen transition-all' : ' mb-10 p-0 h-0'} bg-slate-100 transition-all`)} onMouseLeave={()=>dispatch(hover(false))}>
                   <div className="flex flex-col gap-2">
                    <h1 className='font-semibold'>Food & Treats</h1>
                    <button className='hover:text-red-600 hover:bg-slate-300 transition-all rounded-lg'>Dry Food</button>
                    <button className='headerBtn'>Wet Food</button>  
                    <button className='headerBtn'>Treats</button>
                   </div>
                   <div className="flex flex-col items-center gap-2">
                     <h1 className='font-semibold'>Cat Litters</h1>
                     <button className='headerBtn'>Cat Litter</button>
                      <button className='headerBtn'>Cat Litter trays</button>
                     <button className='headerBtn'>Cat Litter Scoops</button>
                     <button className='headerBtn'>Cleaners & Deordorisers</button> 
                   </div>
                   <div className="flex flex-col gap-2">
                     <h1 className='font-semibold'>Essentials</h1>
                     <button className='headerBtn'>Toys</button>
                     <button className='headerBtn'>Grooming</button>
                   </div>
     
                   <div className="flex flex-col gap-2 items-center">
                     <h1 className='font-semibold'>Healthcare</h1>
                     <button className='headerBtn'>Healthcare aids</button>
                     <button className='headerBtn'>Flea & ticks</button>
                   </div>
                   </div>
         </div>
  )
}
