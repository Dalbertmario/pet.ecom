import { useMutation, useQueryClient } from "@tanstack/react-query"
import {toast} from 'react-hot-toast'

async function DeleteCartItem(params) {
const api = import.meta.env.VITE_API_BACKEND 
const id = JSON.parse(localStorage.getItem('role'))
const userId = id?.user?.id
const datas ={userid:userId,cartid:params.cartid}
    try{
        const result = await fetch(`${api}/cart/itemDelete`,{
            method:'DELETE',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(datas)
        })
        if(!result.ok) throw new Error(`There is error in deleteing cart item`)
    }catch(err){
          console.log(err.message)
    }
}

function UseDeleteItem(){
const query = useQueryClient()
    const {mutate,isLoading}=useMutation({
        mutationFn:(params)=>DeleteCartItem(params),
        onSuccess:()=>{
          query.invalidateQueries(['cart'])
           toast.success('Item deleted')
        }
    })
    return {mutate,isLoading}
}

export default UseDeleteItem