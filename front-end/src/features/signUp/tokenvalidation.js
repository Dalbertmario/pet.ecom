import { useMutation } from "@tanstack/react-query"
import { useDispatch } from "react-redux";
import { settingUser } from "../../ui/uistore";

async function tokenValidate(params) {
    const api = import.meta.env.VITE_API_BACKEND;
    const token = localStorage.getItem('token');
   
    try {
        const result = await fetch(`${api}/user/${params.role}`, {
            method: 'GET',
            headers: {
                'authorization': `Bearer ${token}` 
            }
        });

        if (!result.ok) throw new Error('Something went wrong');
        
        const data = await result.json();
        return data;
    } catch (err) {
        throw new Error(err.message);
    }
}

function TokenValidation() {
const dispatch = useDispatch()
    const { mutate: tokenMutate, data: validData, isLoading: ValidLoading } = useMutation({
        mutationFn: (datas) => tokenValidate(datas),
        onSuccess:(data)=>{
             dispatch(settingUser(data))
        },
        onError: (error) => {
            console.log("Error:", error.message);
        }
    });

    return { tokenMutate, validData, ValidLoading };
}

export default TokenValidation;