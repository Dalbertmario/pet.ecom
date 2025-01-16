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
    <div className="bg-white h-screen">
    <div className="p-5 flex justify-center">
      <form
       onSubmit={handleSubmit(formhandel)}
        className="bg-slate-100 w-[400px] rounded-lg p-10 flex mt-[75px] flex-col gap-11 justify-center"
      >
          <h1 className="content-start font-semibold text-red-500 text-2xl m-auto font-condensed ">Super Petsy</h1>
        <input
          {...register('username')}
          className="py-1 px-3 focus:outline-stone-300 outline-2 bg-slate-200 rounded-lg"
          type="text"
          placeholder="UserName"
          required
        />
        <input
          {...register('password',{required:'password required',validate:(val)=>val === password || 'Not match the password'})}
          className="py-1 px-3  focus:outline-stone-300 bg-slate-200 rounded-lg"
          type="password" // Changed to password
          placeholder="Password"
          required
        />
        <input {...register('re-password',{required:'Confirm password required'})} className="px-3 py-1 focus:outline-stone-300 bg-slate-200 rounded-lg" type="password" placeholder="Confirm password"/>
       {errors?.password?.message && <p className="text-red-400 text-center">{errors?.password?.message}</p>}
        <input {...register('email',{required:'Email required',pattern:{
            pattern:{ 
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'}
        }})} placeholder="Email"   className="py-1 px-2  focus:outline-stone-300 bg-slate-200 rounded-lg"/>
        <button
          type="submit" // Ensure button type is submit
          className="hover:bg-red-700 hover:text-white transition-all bg-red-500 p-2 justify-center font-semibold rounded-lg text-slate-200 items-center"
        >Create account
        </button>
      </form>
    </div>
  </div>
  )
}
