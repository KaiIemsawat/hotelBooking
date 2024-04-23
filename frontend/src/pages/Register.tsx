import { useForm } from "react-hook-form";

const Register = () => {
    type RegisterFormData = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    const { register } = useForm<RegisterFormData>();

    return (
        <form className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold">Create an Account</h2>
            <div className="flex flex-col md:flex-row gap-5">
                <label className="text-gray-700 text-sm font-bold flex-1">
                    First Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("firstName", {
                            required: "This field is required",
                        })}
                    />
                </label>
                <label className="text-gray-700 text-sm font-bold flex-1">
                    Last Name
                    <input
                        type="text"
                        className="border rounded w-full py-1 px-2 font-normal"
                        {...register("lastName", {
                            required: "This field is required",
                        })}
                    />
                </label>
            </div>
        </form>
    );
};
export default Register;