import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

async function checkout(params) {
const api = import.meta.env.VITE_API_BACKEND 
       const result = await fetch(`${api}/order/items`,
        {
            method:'POST',
            headers:{'Content-Type' :'application/json'},
            body:JSON.stringify(params)
        }
       )
       if(!result.ok){
        throw new Error('Error in posting the your order')
       }
}

function UseOrderPost(){
const navigate = useNavigate()
    const{mutate}=useMutation({
        mutationFn:(da)=>checkout(da),
        onSuccess:()=>{
            navigate('/success')
        },onError:(err)=>{
            console.log(err)
            toast.error('Unexpected error try ordering sometime later')
        }
    })
    return {mutate}
}

export default UseOrderPost;