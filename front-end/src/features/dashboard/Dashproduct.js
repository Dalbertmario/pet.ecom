import { useQuery } from "@tanstack/react-query"

async function Dashproduct() {
const api = import.meta.env.VITE_API_BACKEND
    try{
        const result = await fetch(`${api}/userdash/dashproduct`,{
            method:'GET'
        })
        if(!result.ok) throw new Error('Error in fetching Dashproduct')
        const data =await result.json()
        return data
    }catch(err){
        throw new Error(err.message)
    }
}

function UseDashBoradproduct(){
    const {data:dashing,isLoading:productloding}=useQuery({
        queryKey:['logos'],
        queryFn:Dashproduct
    })
return {dashing,productloding}
}

export default UseDashBoradproduct;