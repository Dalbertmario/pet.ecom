import { useMutation, useQuery } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setFormData } from "../../ui/uistore"

async function  ItemOrder(params) {
const api = import.meta.env.VITE_API_BACKEND
    try{
        const result = await fetch(`${api}/admin/form`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(params)
        })
        if(!result.ok){
            throw  new Error('Error in retiriving the the data')
        }
        const data = await result.json()
        return data
    }catch(err){
         console.log(err.message)
    }
}

function UseFormSubmition(){
const dispatch = useDispatch()
    const {mutate,isLoading} = useMutation({
        mutationFn:(data)=>ItemOrder(data),
        onSuccess:(da)=>{
            dispatch(setFormData(da))
        }
    })
    return {mutate,isLoading}
}

export default UseFormSubmition;