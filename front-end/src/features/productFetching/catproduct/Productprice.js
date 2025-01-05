import { useQuery } from "@tanstack/react-query"

async function productPrice(){
const api = import.meta.env.VITE_API_BACKEND

    try{
      const data = await fetch(`${api}/products/price`,{
        method:'GET'
      })
       if(!data.ok){
        throw new Error('Error in fetching product price')
       }
      const result = await data.json()
      return result
    }catch(err){
       console.log(err.message)
       throw new Error(err.message)
    } 
}

function Usepriceing(){
    const {data,isLoading}=useQuery({
        queryKey:['price'],
        queryFn:productPrice
    })
  return {data,isLoading}
}

export default Usepriceing;