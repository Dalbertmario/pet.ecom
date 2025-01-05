import { useQuery } from "@tanstack/react-query"

async function logofetch() {
const api = import.meta.env.VITE_API_BACKEND
    try{
       const result = await fetch(`${api}/userdash/logo`,{
        method:'GET'
       })
       if(!result.ok) throw new Error('Network error') 
       const data = await result.json()
       return data
    }catch(err){
        throw new Error(err.message)
    }
}

function useDashlogoFetch(){
    const {data:logodata,isLoading:logoLoading}=useQuery({
        queryKey:['logo'],
        queryFn:logofetch
    })
    return {logodata,logoLoading};
}

export default useDashlogoFetch;