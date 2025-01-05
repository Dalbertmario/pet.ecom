export default function Shopbypet() {
  return (
    <div className="p-4 flex flex-col">
       <h1 className="text-xl font-semibold text-stone-500">Shop by Pet</h1>
       <div>
        <ul className="flex gap-4 justify-center">
            <li className="petBack flex flex-col"><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(10).png"/>
            <p>Dog</p></li>
            <li className="petBack flex flex-col" ><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(8).png"/>
            <p>Cat</p></li>
            <li className="petBack flex flex-col"><img className="img" src="https://petsstore.s3.us-east-1.amazonaws.com/pngwing.com+(11).png"/>
            <p>Bird</p></li>
        </ul>
       </div>
    </div>
  )
}
