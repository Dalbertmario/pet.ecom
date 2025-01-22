import { useMutation } from "@tanstack/react-query"
import toast from 'react-hot-toast'

async function itemsPutting(params) {
    console.log(params)
    const api = import.meta.env.VITE_API_BACKEND
      const result = await fetch(`${api}/admin/editproduct`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(params)
      })
      if(!result.ok){
        throw new Error('Error in editing the product details')
}
}

function UseEditForm(){
    const {mutate,isLoading}=useMutation({
        mutationFn:(ds)=>itemsPutting(ds),
        onSuccess:()=>{
            toast.success('Item edited successfully')
        }
    })
    return {mutate,isLoading}
}

export default UseEditForm;