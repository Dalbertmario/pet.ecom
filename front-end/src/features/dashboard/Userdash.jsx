import Cat from "../../ui/Cat";
import Dog from "../../ui/Dog";
import useDashlogoFetch from "./logofetch";
import UseDashBoradproduct from "./Dashproduct";
import UseDogdash from "./DogDashproduct";
import UseBybreed from "./ShopBreed";
import ShopbyBreed from "../../ui/ShopbyBreed";
import ShopbybrandButton from "../../ui/ShopbybrandButton";
import ShopbypetButton from "../../ui/ShopbypetButton";
import Loading from '../../ui/Loading'

export default function Userdash() {
const {logodata,logoLoading} =useDashlogoFetch();
const {dashing,productloding}=UseDashBoradproduct();
const {dogDash,isLoading:dogLoading}=UseDogdash()
const {byBreed,isLoading:breedLoading}=UseBybreed()
if(logoLoading || productloding || dogLoading || breedLoading) return <Loading/>
console.log(logoLoading,productloding,dogLoading,breedLoading)
  return (
    <div className="contenBody flex-col gap-4">
         <ShopbybrandButton logo = {logodata}/>
       <div className="flex flex-col gap-4 px-2 justify-center">
       <Cat catproduct={dashing}/>
       <Dog dogproduct={dogDash}/>
       </div>
         <ShopbypetButton/>
         <ShopbyBreed breed={byBreed}/>
    </div>
  )
}
