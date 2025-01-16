import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux"
import { setLoading, setLocation } from "../../ui/uistore"

async function locationFormater(params){
const api = import.meta.env.VITE_API_BACKEND 
        const result = await fetch(`${api}/locations/location`,{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(params)
        })
          
        if(!result.ok) throw new Error('Could not fech the location')
        const data = await result.json()
        return data
  

}

function UseLocationFinder(){
    const dispatch = useDispatch()
    const {mutate,isLoading}=useMutation({
         mutationFn:(da)=>{
            dispatch(setLoading(true))
            return locationFormater(da)},
        onSuccess:(das)=>{
            dispatch(setLoading(false))
            dispatch(setLocation(das))
        }
    })
    return {mutate,isLoading}
}

export default UseLocationFinder;