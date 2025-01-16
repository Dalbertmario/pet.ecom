import { useQuery } from "@tanstack/react-query"

async function GetWish() {
    const role = JSON.parse(localStorage.getItem('role'))
    const api = import.meta.env.VITE_API_BACKEND
    try{
      const result = await fetch(`${api}/wish/getWish/${role?.user?.id}`,{
        method:'GET'
      })
      if(!result.ok){
        throw new Error('Error in the create wishlist item')
      }
      const data = await result.json()
      return data
    }catch(err){
       console.logO(err.message)
    }
}

function UseGetWishlist(){
    const {data,isLoading}=useQuery({
        queryKey:['wishlist'],
        queryFn:GetWish
    })
    return {data,isLoading}
}

export default UseGetWishlist;