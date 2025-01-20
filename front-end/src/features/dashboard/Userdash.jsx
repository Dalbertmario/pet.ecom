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
import Coroselimage from "../../ui/Coroselimage";
import UseCorosel from "./Uicorosel";

export default function Userdash() {
const {logodata,logoLoading} =useDashlogoFetch();
const {dashing,productloding}=UseDashBoradproduct();
const {dogDash,isLoading:dogLoading}=UseDogdash()
const {data:corselData}= UseCorosel()
const {byBreed,isLoading:breedLoading}=UseBybreed()
if(logoLoading || productloding || dogLoading || breedLoading) return <Loading/>
  return (
    <div className="contenBody flex-col gap-3">
         <Coroselimage image={corselData}/>
         
       <div className="flex flex-col gap-4 px-2 justify-center">
       <Cat catproduct={dashing}/>
       <Dog dogproduct={dogDash}/>
       </div>
         <ShopbybrandButton logo = {logodata}/>
         <ShopbypetButton/>
         <ShopbyBreed breed={byBreed}/>
    </div>
  )
}
