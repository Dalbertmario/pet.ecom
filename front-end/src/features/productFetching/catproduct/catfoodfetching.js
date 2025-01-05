import { useQuery } from "@tanstack/react-query"
 
async function catfood(params){
const api = import.meta.env.VITE_API_BACKEND 
    try{
     const data = await fetch(`${api}/products/${params}`)
     if(!data.ok) throw new Error('Unexpected error')
     const result =await data.json()
    return result
    }catch(err){
       throw new Error(err.message)
    }
}

function Usefetchcatfood(input){
    const {data,isLoading}=useQuery({
        queryKey:['catfood',input],
        queryFn:()=>catfood(input)
    })
    return {data,isLoading}
}

export default Usefetchcatfood;