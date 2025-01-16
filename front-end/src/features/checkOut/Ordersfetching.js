import { useQuery } from "@tanstack/react-query"

async function OrderFetching() {
    const role = JSON.parse(localStorage.getItem('role'))
    const api = import.meta.env.VITE_API_BACKEND 
    try{
       const result = await fetch(`${api}/order/fetch/${role?.user?.id}`)
       if(!result.ok){
        throw new Error('Error in feching error')
       }
       const data = await result.json()
       return data
    }catch(err){
        console.group(err.message)
    }
}


function UseOrderFeching(){
    const {data,isLoading}=useQuery({
        queryKey:['order'],
        queryFn:OrderFetching,
    })
    return {data,isLoading}
}

export default UseOrderFeching;