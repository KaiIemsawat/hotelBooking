import { useMutation } from "react-query";

import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/AppContext";

const SignOutButton = () => {
    const { showToast } = useAppContext();

    const mutation = useMutation(apiClient.signOut, {
        onSuccess: () => {
            // Show toast
            showToast({ message: "Signed Out", type: "SUCCESS" });
        },
        onError: (error: Error) => {
            // Show toast
            showToast({ message: error.message, type: "ERROR" });
        },
    });

    const handleClick = () => {
        mutation.mutate();
    };
    return (
        <button
            onClick={handleClick}
            className="text-blue-600 hover:text-stone-50 px-3 font-bold hover:bg-stone-300/50 hover:rounded-md"
        >
            Sign Out
        </button>
    );
};
export default SignOutButton;
