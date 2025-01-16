import { useQuery } from "@tanstack/react-query"

const api = import.meta.env.VITE_API_BACKEND 
async function accountdetailsFetch() {
    const role = JSON.parse(localStorage.getItem('role'))
    try{
       const result = await fetch(`${api}/acc/details/${role?.user?.id}`,{
        method:'GET'
       })
       if(!result.ok) throw new Error(result)
       const data = await result.json()
       return data
    }catch(err){
        console.log(err.message)
    }
}


function UseAccountdetailsFetch(){
    const {data,isLoading}=useQuery({
        queryKey:['account'],
        queryFn:accountdetailsFetch
    })
    return {data,isLoading}
}
export default UseAccountdetailsFetch;