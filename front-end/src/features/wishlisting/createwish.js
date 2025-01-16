import { useMutation, useQueryClient } from "@tanstack/react-query"

async function CreateWish(params) {
    const role = JSON.parse(localStorage.getItem('role'))
    const api = import.meta.env.VITE_API_BACKEND
    const det= {...params,userid:role?.user?.id}
    try{
      const result = await fetch(`${api}/wish/wishing`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(det)
      })
      if(!result.ok){
        throw new Error('Error in the create wishlist item')
      }
    }catch(err){
       console.logO(err.message)
    }
}

function UseCreateWishlist(){
const query = useQueryClient()
    const {mutate}=useMutation({
        mutationFn:(da)=>CreateWish(da),
        onSuccess:()=>{
            query.invalidateQueries(['wishlist'])
            query.invalidateQueries(['wishlists'])
        }
    })
    return {mutate}
}

export default UseCreateWishlist;