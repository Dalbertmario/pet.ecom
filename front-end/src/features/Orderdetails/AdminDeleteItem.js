import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

async function adminDelete(params) {
const api = import.meta.env.VITE_API_BACKEND 

      const result = await fetch(`${api}/admin/adminDelete/${params}`,{
        method:'DELETE'
      })
      if(!result.ok){
        throw new Error(`Unexpected error in deleting the item ${params} `)
        
      }

}

function UseAdminDelete(){
const query = useQueryClient()
    const {mutate,isLoading}=useMutation({
        mutationFn:(params)=>adminDelete(params),
        onSuccess:()=>{
            query.invalidateQueries(['datafrom'])
            toast.success('Items deleted successfully')
        }
    })
    return {mutate,isLoading}
}

export default UseAdminDelete;