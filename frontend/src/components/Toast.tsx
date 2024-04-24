import { useEffect } from "react";

type ToastProps = {
    message: string;
    type: "SUCCESS" | "ERROR";
    onClose: () => void;
};

const Toast = ({ message, type, onClose }: ToastProps) => {
    // Work with timer
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 5000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    // conditional styling
    const style =
        type === "SUCCESS"
            ? "fixed top-4 right-4 z-50 p-4 rounded-md bg-green-600 text-stone-50 max-w-md"
            : "fixed top-4 right-4 z-50 p-4 rounded-md bg-red-600 text-stone-50 max-w-md";

    return (
        <div className={style}>
            <div className="flex justify-center items-center">
                <span className="text-lg font-semibold">{message}</span>
            </div>
        </div>
    );
};

export default Toast;
