import { useMutation, useQuery} from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setHeaderProducts, setLoading } from "../../../ui/uistore"


async function UsecatheaderProducts(params) {
    console.log(params)
const api = import.meta.env.VITE_API_BACKEND 
    try{
        const result = await fetch(`${api}/ui/cat-header/${params}`)
        if(!result.ok) throw new Error('Error in fetching the error')
        const data = await result.json()
        return data
    }catch(Err){
       console.log(Err.message)
    }
}


function UseFetchproducts(params){
    const {data,isLoading}=useQuery({
       queryKey:['headerproducts',params],
       queryFn:()=>UsecatheaderProducts(params)
    })
    return {data,isLoading}
}

export default UseFetchproducts;