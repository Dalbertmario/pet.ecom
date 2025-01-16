import { useQuery } from "@tanstack/react-query"

async function GetallwishList() {
const api = import.meta.env.VITE_API_BACKEND
const role = JSON.parse(localStorage.getItem('role'))
    try{
       const result = await fetch(`${api}/wish/getwishData/${role?.user?.id}`,{
        method:'GET'
       })
       if(!result.ok){
         throw new Error('Unexpected error')
       }
       const data = await result.json()
       console.log(data)
       return data
    }catch(Err){
         throw new Error(Err.message)
    }
}

function UsegetWishAll(){
    const {data,isLoading}=useQuery({
        queryKey:['wishlists'],
        queryFn:GetallwishList
    })
    return {data,isLoading}
}

export default UsegetWishAll