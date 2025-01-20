import { useQuery } from "@tanstack/react-query"

async function alloders() {
const api = import.meta.env.VITE_API_BACKEND
console.log(api)
    try{
        const result = await fetch(`${api}/admin/adminAllorder`,{
            method:'GET'
        })
        if(!result.ok){
            throw new Error('Error in fetching the all order details')
        }
        const data = await result.json()
        console.log(data)
        return data
    }catch(err){
        console.log(err.message)
    }
}

function UseAllOrderDetails(){
    const {data,isLoading}=useQuery({
        queryKey:['adminorders'],
        queryFn:alloders
    })
    return {data,isLoading}
}

export default UseAllOrderDetails;