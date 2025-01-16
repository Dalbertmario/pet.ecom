import { useMutation, useQueryClient } from "@tanstack/react-query"

async function DeleteOrder(params){
const api = import.meta.env.VITE_API_BACKEND 
      const order = await fetch(`${api}/order/orderDelete/${params}`,{
        method:"DELETE"
      })
      if(!order.ok) throw new Error('Error in deleting the item')
        const data = await order.json()
        return data
}


function UseItemDelete(){
const query = useQueryClient()
    const {mutate,isLoading} = useMutation({
        mutationFn:(da)=>DeleteOrder(da),
        onSuccess:()=>{
            query.invalidateQueries(['order'])
        }
    })
    return {mutate,isLoading}
}

export default UseItemDelete