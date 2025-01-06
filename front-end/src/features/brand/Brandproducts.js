import { useQuery } from "@tanstack/react-query"

async function branddata(params){
const api = import.meta.env.VITE_API_BACKEND 
    try{
        const result = await fetch(`${api}/products/brandpack/${params}`,{
            method:'GET'
        })
        if(!result.ok) throw new Error("Unexpected error while fetching error brand data")
        const data = await result.json()
        return data 
    }catch(er){
         throw new Error(er.message)
    }
}

function UseBrandFetching(params){
    const {data,isLoading}=useQuery({
        queryKey:['brandpack',params],
        queryFn:()=>branddata(params)
    })
  return {data,isLoading}
}

export default UseBrandFetching;