import { useMutation } from "@tanstack/react-query"

async function tokenValidate(params) {
    const api = import.meta.env.VITE_API_BACKEND;
    const token = localStorage.getItem('token');
    
    try {
        const result = await fetch(`${api}/user/${params.role}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}` // Fixed the typo here
            }
        });

        if (!result.ok) throw new Error('Something went wrong');
        
        const data = await result.json();
        console.log(data); // Log the response data for debugging
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

function UseTokenValidation() {
    const { mutate: tokenMutate, data: validData, isLoading: ValidLoading } = useMutation({
        mutationFn: (datas) => tokenValidate(datas),
        onSuccess:(data)=>{
            console.log(data)
        },
        onError: (error) => {
            console.log("Error:", error.message);
        }
    });

    return { tokenMutate, validData, ValidLoading };
}

export default UseTokenValidation;