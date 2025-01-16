import { useQuery } from "@tanstack/react-query"

async function Uicorosel() {
const api = import.meta.env.VITE_API_BACKEND 
 try{
    const result = await fetch(`${api}/ui//corsol`,{
        method:'GET'
    })
    if(!result.ok){
        throw new Error('unexpected error in fetching corrosel image')
    }
    const data = await result.json()
    return data
 }catch(err){
     console.log(err.message)
 }
    
}

function UseCorosel(){
    const {data,isLoading} = useQuery({
        queryKey:['corosel'],
        queryFn:Uicorosel
    })
    return {data,isLoading}
}

export default UseCorosel