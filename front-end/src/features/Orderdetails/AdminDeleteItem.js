async function adminDelete(params) {
const api = import.meta.env.VITE_API_BACKEND 
    try{
      const result = await fetch(`${api}/admin/adminDelete/${params}`)
      if(!result.ok){
        throw new Error(`Unexpected error in deleting the item ${params} `)
      }
      
    }catch(Er){
       
    }
}