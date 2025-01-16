import {useMutation, useQueryClient } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setCartToggel } from "../../ui/uistore"

async function carting(params) {
const api = import.meta.env.VITE_API_BACKEND 
    try{
       const result = await fetch(`${api}/cart/items`,{
          method : 'PUT',
          headers:{ "Content-Type": "application/json "},
          body:JSON.stringify(params)
       })
       if(!result.ok) throw new Error('Could able to post the product data to cart')
    }catch(err){
        console.log(err.message)
    }
}

function CartingData(){
const dispatch =useDispatch()
const query = useQueryClient()
    const {mutate}=useMutation({
        mutationFn:(data)=>carting(data),
        onSuccess:()=>{
            dispatch(setCartToggel(true))
            query.invalidateQueries(['cart'])
        }
    })
    return {mutate}
}
export default CartingData;