import { useForm } from "react-hook-form";

const Register = () => {
    type RegisterFormData = {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        confirmPassword: string;
    };

    const { register, watch } = useForm<RegisterFormData>();

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
            <label className="text-gray-700 text-sm font-bold flex-1">
                Email
                <input
                    type="email"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("email", {
                        required: "This field is required",
                    })}
                />
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("password", {
                        required: "This field is required",
                        minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                        },
                    })}
                />
            </label>
            <label className="text-gray-700 text-sm font-bold flex-1">
                Confirm Password
                <input
                    type="password"
                    className="border rounded w-full py-1 px-2 font-normal"
                    {...register("confirmPassword", {
                        validate: (value) => {
                            if (!value) {
                                return "This filed is required";
                            } else if (watch("password") !== value) {
                                return "Your confirm password is not match";
                            }
                        },
                    })}
                />
            </label>
            <span>
                <button
                    type="submit"
                    className="bg-blue-600 text-stone-50 py-2 px-4 rounded-md font-bold hover:bg-blue-400 text-xl"
                >
                    Create Account
                </button>
            </span>
        </form>
    );
};
export default Register;
