import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"

async function Forming(params) {
const api = import.meta.env.VITE_API_BACKEND 
const role = JSON.parse(localStorage.getItem('role'))
const forming  = {...params,userid:role?.user?.id}
    try{
      const result = await fetch(`${api}/userdetails/form`,{
        method:'PUT',
        headers:{
           'Content-Type':'application/json'
        },
        body:JSON.stringify(forming)
      })
      if(!result.ok) throw new Error('Error in submiting the form please try again')
    }catch(err){
       console.log(err.message)
    }
}

function UseformSubmit(){
    const {mutate,isLoading} = useMutation({
        mutationFn:(daa)=>Forming(daa),
        onSuccess:()=>{
            toast.success('Your Details Submited successfully')
        }
    })
    return {mutate,isLoading}
}
export default UseformSubmit;