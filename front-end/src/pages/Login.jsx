import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UseTokenValidation from "../features/signUp/tokenvalidation";
import { NavLink } from "react-router-dom";

const api = import.meta.env.VITE_API_BACKEND;

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const {tokenMutate,validData}=UseTokenValidation()
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleForm(data) {
    setForm(data);
  }
  useEffect(() => {
    if (form !== null) {
      async function logining() {
        setLoading(true);
        const formData = new FormData();
        formData.append('username', form.username);
        formData.append('password', form.password);
        console.log(form.username)
        try {
          const result = await fetch(`${api}/auth/login`, {
            method: 'POST',
            body: formData,
          });

          if (!result.ok) throw new Error('Invalid data');

          const data = await result.json();
          localStorage.setItem('token',data.token)
          tokenMutate(data.user)
          
          reset(); 
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false); 
        }
      }
      logining();
    }
  }, [form, reset,tokenMutate]);
  return (
    <div className="bg-blue-300 h-screen">
      <div className="p-5 flex justify-center">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="bg-slate-300 w-[400px] rounded-lg p-10 flex mt-44 flex-col gap-7 justify-center"
        >
          <h1 className="font-semibold text-center text-xl">Petting</h1>
          <input
            {...register('username')}
            className="p-2 font-semibold focus:outline-stone-300 outline-2 bg-slate-100 rounded-lg"
            type="text"
            placeholder="UserName"
            required
          />
          <input
            {...register('password')}
            className="p-2 font-semibold focus:outline-stone-300 bg-slate-100 rounded-lg"
            type="password" // Changed to password
            placeholder="Password"
            required
          />
         {error &&  <p className="text-red-400 text-center">{error}</p>}
          <button
            type="submit" // Ensure button type is submit
            className="hover:bg-blue-700 hover:text-white transition-all bg-blue-950 p-2 justify-center font-semibold rounded-lg text-slate-200 items-center"
          >Login 
          </button>
          <p>
            Create a new account <NavLink to='/signup'><button className="text-blue-500">Sign up</button></NavLink>
          </p>
        </form>
      </div>

    </div>
  );
}
