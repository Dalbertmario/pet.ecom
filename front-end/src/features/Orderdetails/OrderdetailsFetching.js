import { useQuery } from "@tanstack/react-query"

async function fetchAllOrderDetails(params){
const api = import.meta.env.VITE_API_BACKEND
   try{
     const result = await fetch(`${api}/admin/orderDetails/${params}`)

     if(!result.ok){
        throw new Error('There is error in fetching data of orders')
     }
     const data = await result.json()

     return data
   }catch(err){
       console.log(err.message)
   }
}

function UseAllDataFetching(week){
    const{data,isLoading}=useQuery({
         queryKey:['allordersDetails',week],
         queryFn:()=>fetchAllOrderDetails(week)
    })
    return {data,isLoading}
}

export default UseAllDataFetching