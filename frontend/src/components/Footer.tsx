const Footer = () => {
    return (
        <div className="bg-blue-800 py-10">
            <div className="container mx-auto flex justify-between items-center">
                <span className="text-3xl text-stone-50 font-bold tracking-tight">
                    ZukkiiBooking.com
                </span>
                <span className="text-stone-50 font-thin tracking-tight flex gap-4">
                    <p className="cursor-pointer">Privacy Policy</p>
                    <p className="cursor-pointer">Terms of Service</p>
                </span>
            </div>
        </div>
    );
};
export default Footer;
