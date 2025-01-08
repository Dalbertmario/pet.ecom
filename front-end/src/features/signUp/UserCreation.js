import { useMutation } from "@tanstack/react-query"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

async function roleCreation(params) {
    const formdata = new FormData()
    console.log(params)
    formdata.append('username',params.username)
    formdata.append('password',params.password)
    formdata.append('email',params.email)

        const result = await fetch(`http://localhost:3000/auth/register`,{
            method:'POST',
            body:formdata
        })
         if(!result.ok) throw new Error('Error in Creating role')
}

function Createappuser(){
const navigate = useNavigate
     const {isLoading:adminLoading,mutate:userCreate} = useMutation({
        mutationFn:(data)=>roleCreation(data),
        onError:(err)=>{
            toast.error(err.message)
        },
        onSuccess:()=>{
            toast.success('Successfully created user')
             navigate('/login')
        }
     })
     return {adminLoading,userCreate}
}

export default Createappuser;