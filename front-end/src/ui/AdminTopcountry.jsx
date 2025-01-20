import {flag, name} from 'country-emoji';
export default function AdminTopcountry({country}) {
const totalviews = country?.views?.reduce((a,b)=>a+b.count,0)

  return (
    <div className='bg-white p-5 rounded-xl shadow-md'>
      <h1 className='text-xl text-slate-700 font-semibold'>Top country</h1>
      <div>
        <ul className='flex flex-col gap-5'>
          {country?.views?.map(el=>(
            <li className='flex hover:bg-stone-200 rounded-md p-3 transition-all flex-row gap-2 content-center items-center'  key={el}>
                    <p className='text-xl rounded-full p-2'>{flag(el.countryName)}</p>
                    <div className='w-full'>
                    <p className='font-semibold'>{name(el.countryName)}</p>
                    <p style={{
                        width:`${Math.round((el.count/totalviews)*100)}%`
                    }} className={`flex justify-start bg-blue-500 h-[10px]  rounded-lg`}/>
                   </div>
                    <p className='font-semibold'>{Math.round((el.count/totalviews)*100)}%</p>
                   </li>
             ))}
          </ul>
      </div>
    </div>
  )
}
