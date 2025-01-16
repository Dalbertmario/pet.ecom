import { useQuery } from "@tanstack/react-query";
import { useDispatch } from "react-redux";

async function searchItem(params) {

const api = import.meta.env.VITE_API_BACKEND 
     if(params.length >= 1 ){
    const response = await fetch(`${api}/item/search?q=${encodeURIComponent(params)}`)
    const result = await response.json()
    return result
     }
}



function useSearch(params){
    const {data,isLoading} = useQuery({
        queryKey:['query',params],
        queryFn:()=>searchItem(params)
    })
    return {data,isLoading}
}


export default useSearch;