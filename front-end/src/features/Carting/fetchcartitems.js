import {  useQuery } from "@tanstack/react-query"

async function fetchcartitemsApi() {
    const api = import.meta.env.VITE_API_BACKEND 
    const id = JSON.parse(localStorage.getItem('role'))
    const userId = id?.user?.id
    if(!userId) throw new Error('User Id')
    try{
        const result = await fetch(`${api}/cart/fetchCartItems/${userId}`,{
            method:'GET'
        })
        if(!result.ok) throw new Error('There is an error in fetching the cart data')
        const res = await result.json()
        return res
    }catch(err){
        console.log(err)
    }

}
function UsefetchCartItems(){
    const {data,isLoading} = useQuery({
        queryKey:['cart'],
        queryFn:fetchcartitemsApi
    })
    return {data,isLoading}
}

export default UsefetchCartItems;