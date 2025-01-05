import { NavLink } from "react-router-dom";

export default function Dog({dogproduct}) {
  return (
    <div>
     <div className="flex flex-row gap-3 overflow-scroll xs:justify-start xl:justify-center md:justify-center">
     <div> <img className='innerimg recproduct' src='https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(14).png'/>
      <p className='flex justify-center font-medium'>Dog</p></div>

      {dogproduct?.map(el=>(
        
       <button key={el.id} >
        <NavLink to={`/products/dog-${el.proname}`}>
         <div ><img className='innerimg recproduct'  src={el.image_url}/>
        <p className='flex justify-center font-medium'>{el.proname}</p></div>
        </NavLink>
        </button> 
       ))}
      </div>
    </div>
  )
}
