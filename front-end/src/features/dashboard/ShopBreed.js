import { useQuery } from "@tanstack/react-query"
async function shopByBreed() {
const api = import.meta.env.VITE_API_BACKEND
     try{
        const result = await fetch(`${api}/userdash/shopByBreed`,{
            method:'GET'
        })
        if(!result.ok) throw new Error('Unexprected error')
        const data = await result.json()
        return data
     }catch(err){
        throw new Error(err.message)
     }  
}


function UseBybreed(){
    const {data:byBreed,isLoading}= useQuery({
      queryKey:['bybreed'],
      queryFn:shopByBreed
    })
    return {byBreed,isLoading}
}

export default UseBybreed;