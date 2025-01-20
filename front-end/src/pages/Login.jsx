import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UseTokenValidation from "../features/signUp/tokenvalidation";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UseLocationfetching from "../features/locationfetch/locationfetching";

const api = import.meta.env.VITE_API_BACKEND;

export default function Login() {
  const { register, handleSubmit, reset } = useForm();
  const [error, setError] = useState('');
  const {tokenMutate,}=UseTokenValidation()
  const [form, setForm] = useState(null);
  const [loading, setLoading] = useState(false);
  const {role} =useSelector(state=>state.uistore)
  const {data} = UseLocationfetching() 
  const navigate= useNavigate()
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

  useEffect(() => {
    localStorage.removeItem("role");
    localStorage.removeItem('token')
}, []); 
//navigate
useEffect(() => {
  if (role?.user?.role === "admin") {
    navigate("/admin");
  } else if (role?.user?.role === "user") {
    navigate("/userdash");
  }else if(role?.user?.role=== "customer-care"){
    navigate('/customercare')
  }
}, [role, navigate]);

  function handleForm(data) {
    setForm(data);
  }
  return (
    <div className="bg-white h-screen">
      <div className="p-5 flex justify-center">
        <form
          onSubmit={handleSubmit(handleForm)}
          className="bg-slate-100 w-[400px] rounded-lg p-10 flex mt-44 flex-col gap-11 justify-center"
        >
          <h1 className="font-semibold text-red-500 font-condensed text-center text-2xl">Super Petsy</h1>
          <input
            {...register('username')}
            className="py-1 px-3 text-base focus:outline-red-300 outline-2 bg-slate-200 rounded-lg"
            type="text"
            placeholder="UserName"
            required
            defaultValue='wild_rds'
          />
          <input
            {...register('password')}
            className="py-1 px-3 text-base focus:outline-red-300 bg-slate-200 rounded-lg"
            type="password" // Changed to password
            placeholder="Password"
            required
            defaultValue={123456789}
          />
         {error &&  <p className="text-red-400 text-center">{error}</p>}
          <button
            type="submit" // Ensure button type is submit
            className="hover:bg-red-700 hover:text-white transition-all bg-red-500 p-2 justify-center font-semibold rounded-lg text-slate-200 items-center"
          >Login 
          </button>
          <p className="content-center">
            Create a new account <NavLink to='/signup'><button className="text-blue-500">Sign up</button></NavLink>
          </p>
        </form>
      </div>

    </div>
  );
}
