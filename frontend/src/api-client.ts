import { RegisterFormData } from "./pages/Register";

export const register = async (fromData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(fromData),
    });

    const responseBody = await response.json();
};
