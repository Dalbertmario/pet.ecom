import { useForm } from "react-hook-form"
import Createappuser from "../features/signUp/UserCreation"

export default function SignUp() {
const {register,handleSubmit,formState:{errors},getValues}=useForm()
const {userCreate}= Createappuser()
function formhandel(data){
  userCreate({email:data.email,password:data.password,username:data.username})
}
const password = getValues('password')

  return (
    <div className="bg-black h-screen">
    <div className="p-5 flex justify-center">
      <form
       onSubmit={handleSubmit(formhandel)}
        className="bg-slate-300 w-[400px] rounded-lg p-10 flex mt-44 flex-col gap-7 justify-center"
      >
          <h1 className="text-white content-start font-semibold text-xl m-auto">Create new User account</h1>
        <input
          {...register('username')}
          className="p-2 font-semibold focus:outline-stone-300 outline-2 bg-slate-100 rounded-lg"
          type="text"
          placeholder="UserName"
          required
        />
        <input
          {...register('password',{required:'password required',validate:(val)=>val === password || 'Not match the password'})}
          className="p-2 font-semibold focus:outline-stone-300 bg-slate-100 rounded-lg"
          type="password" // Changed to password
          placeholder="Password"
          required
        />
        <input {...register('re-password',{required:'Confirm password required'})} className="p-2 font-semibold focus:outline-stone-300 bg-slate-100 rounded-lg" type="password" placeholder="Confirm password"/>
       {errors?.password?.message && <p className="text-red-400 text-center">{errors?.password?.message}</p>}
        <input {...register('email',{required:'Email required',pattern:{
            pattern:{ 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'}
        }})} placeholder="Email"   className="p-2 font-semibold focus:outline-stone-300 bg-slate-100 rounded-lg"/>
        <button
          type="submit" // Ensure button type is submit
          className="hover:bg-blue-700 hover:text-white transition-all bg-blue-950 p-2 justify-center font-semibold rounded-lg text-slate-200 items-center"
        >Create account
        </button>
      </form>
    </div>
  </div>
  )
}
