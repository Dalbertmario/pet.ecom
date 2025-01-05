import { NavLink } from "react-router-dom";

export default function Cat({catproduct}) {
  return (
    <div  className=" flex flex-row  max-w-auto overflow-scroll xs:justify-start xl:justify-center md:justify-center">
      <div className="flex flex-row gap-3">
        <div>
        <img className='recproduct innerimg' src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(12).png"/>
        <p className="flex justify-center font-medium">Cat</p>
        </div>
        {catproduct?.map(el=>(
         <button key={el.id}>
          <NavLink to={`/products/cat-${el.proname}`}>
          <div className="overflow-x-scroll"> <img  className="innerimg recproduct" src={el.image_url}/>
           <p className="flex justify-center font-medium">{el.proname}</p>
        </div>
        </NavLink>
      </button>))}
      </div>
    </div>
  )
}
