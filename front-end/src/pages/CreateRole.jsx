import { useForm } from "react-hook-form";
import CreateUser from "../features/signUp/adminroleCreation";

export default function CreateRole() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {adminLoading,adminCreate}=CreateUser()

    function SubmitForm(data) {
        adminCreate(data)
    }

    return (
        <form onSubmit={handleSubmit(SubmitForm)} className="contenBody p-5">
            <div className="p-5 justify-center flex flex-col gap-7 bg-slate-300 rounded-lg">
                <input
                    {...register('username', { required: 'Username is required' })}
                    placeholder="Username"
                    className="inputfiled"
                />
                {errors['user-name'] && (
                    <p className="text-red-500 text-sm">{errors['user-name'].message}</p>
                )}
                <input
                    {...register('password', { required: 'Password is required' })}
                    placeholder="Password"
                    type="password"
                    className="inputfiled"
                />
                {errors.password && (
                    <p className="text-red-500 text-sm">{errors.password.message}</p>
                )}            
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: 'Invalid email address',
                        },
                    })}
                    placeholder="Email"
                    className="inputfiled"
                />
                {errors.email && (
                    <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
                <select
                    {...register('role', { required: 'Role is required' })}
                    className="inputfiled"
                >
                    <option value="">Select Role</option>
                    <option value="customer-care">Customer Care</option>
                    <option value="admin">Admin</option>
                </select>
                {errors.role && (
                    <p className="text-red-500 text-sm">{errors.role.message}</p>
                )}

          
                <button
                    type="submit"
                    className="bg-white p-2 rounded-lg font-semibold hover:bg-slate-100 transition-all"
                >
                    Create Role
                </button>
            </div>
        </form>
    );
}
