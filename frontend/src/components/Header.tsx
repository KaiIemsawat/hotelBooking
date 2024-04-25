import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-blue-800 py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-white font-bold tracking-tight">
                    <Link to="/" className="text-stone-50">
                        ZukkiiBooking.com
                    </Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? (
                        <>
                            <Link to="/my-bookings">My Booking</Link>
                            <Link to="/my-hotels">My Hotels</Link>
                            <SignOutButton />
                        </>
                    ) : (
                        <Link
                            to="sign-in"
                            className="flex items-center bg-pink-300 text-stone-50 px-3 font-bold rounded-md hover:bg-pink-500"
                        >
                            Sign In
                        </Link>
                    )}
                </span>
            </div>
        </div>
    );
};
export default Header;
