import { useQuery } from "@tanstack/react-query"

async function recentOrder() {
const api = import.meta.env.VITE_API_BACKEND
    try{
        const  result = await fetch(`${api}/admin/adminRecentOrder`,{
            method:'GET'
        })
        if(!result.ok){
            throw new Error('Unexpected error')
        }
        const data = await result.json()
        return data
    }catch(er){
       throw new Error(er.message)
    }
}

function UserecentenOrder(){
    const {data,isLoading}=useQuery({
        queryKey:['recentorder'],
        queryFn:recentOrder
    })
    return {data,isLoading}
}

export default UserecentenOrder