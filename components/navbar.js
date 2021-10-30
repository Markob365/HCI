const Navbar = () => {
    const menuItems = ['Home', 'AboutUs', 'Showcase', 'Blog', 'Contact', 'Sign in'];

    return (
        <nav className="inline-flex justify-between list-none w-max">
            {menuItems.map((item) => (
                <li
                    key={item}
                    className="w-36 py-4 font-normal text-2xl text-center text-purple-900 hover:text-white hover:bg-purple-900 hover:cursor-pointer"
                >
                    {item}
                </li>
            ))}
        </nav>
    );
};

export default Navbar;
