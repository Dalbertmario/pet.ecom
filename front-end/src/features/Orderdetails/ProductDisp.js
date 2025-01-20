import { useQuery } from "@tanstack/react-query"

async function Products(params) {
    const api = import.meta.env.VITE_API_BACKEND;
    try {
        const result = await fetch(`${api}/admin/allOrderFromto`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        if (!result.ok) {
            console.error('Unexpected error');
            return [];
        }
        const data = await result.json();
        console.log(data)
        return data;
    } catch (err) {
        console.error(err.message);
        return []; 
    }
}

function UseProductfrom(params){
    const {data,isLoading}=useQuery({
        queryKey:['datafrom',params],
        queryFn:()=>Products(params)
    }) 
    return {data,isLoading}
}

export default UseProductfrom;