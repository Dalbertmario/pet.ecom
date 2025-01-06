import { NavLink } from "react-router-dom";

export default function ShopbypetButton() {
  return (
    <div className="p-4 flex flex-col">
       <h1 className="text-xl font-semibold text-stone-500">Shop by Pet</h1>
       <div>
        <ul className="flex gap-4 justify-center">
          <NavLink to='/shopybypets/dogs'> <li className="petBack flex flex-col"><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(10).png"/>
            <p>Dog</p></li>
            </NavLink> 
            <NavLink to='/shopybypets/cats'>
            <li className="petBack flex flex-col" ><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(8).png"/>
            <p>Cat</p></li>
            </NavLink>
            <NavLink to='/shopybypets/birds'>
            <li className="petBack flex flex-col"><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(11).png"/>
            <p>Bird</p></li>
            </NavLink>
        </ul>
       </div>
    </div>
  )
}
