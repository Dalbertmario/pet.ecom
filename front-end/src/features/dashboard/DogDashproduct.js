import { useQuery } from "@tanstack/react-query"

async function Dogdash() {
const api = import.meta.env.VITE_API_BACKEND 
    try{
       const result = await fetch(`${api}/userdash/dogDashprodut`,{
        method:'GET'
       })
       if(!result.ok) throw new Error('Unexpected Error')
       const data= await result.json()
       return data
    }catch(er){
        throw new Error(er.message)
    }
}

function UseDogdash(){
    const {data:dogDash}=useQuery({
        queryKey:['dogdash'],
        queryFn:Dogdash
    })
    return {dogDash}
}

export default UseDogdash;