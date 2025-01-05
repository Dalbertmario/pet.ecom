import { useEffect } from "react";
import Cat from "../../ui/Cat";
import Dog from "../../ui/Dog";
import Shopbybrand from "../../ui/Shopbybrand";
import Shopbypet from "../../ui/Shopbypet";
import useDashlogoFetch from "./logofetch";
import UseDashBoradproduct from "./Dashproduct";
import UseDogdash from "./DogDashproduct";
import UseBybreed from "./ShopBreed";
import ShopbyBreed from "../../ui/ShopbyBreed";

export default function Userdash() {
const {logodata,logoLoading} =useDashlogoFetch();
const {dashing,productloding}=UseDashBoradproduct();
const {dogDash}=UseDogdash()
const {byBreed}=UseBybreed()

  return (
    <div className="contenBody flex-col gap-4">
         <Shopbybrand logo = {logodata}/>
       <div className="flex flex-col gap-4 px-2 justify-center">
       <Cat catproduct={dashing}/>
       <Dog dogproduct={dogDash}/>
       </div>
         <Shopbypet/>
         <ShopbyBreed breed={byBreed}/>
    </div>
  )
}
