import Link from "next/link";

const Navbar = () => {
    return (
        <div className="">
            <nav className="flex justify-center items-center h-16 border border-green-600">
                <ul className="flex justify-between w-1/2">
                    <Link href={'/'}>Home</Link>
                    <Link href={'/services'}>services</Link>
                    <Link href={'/about'}>about</Link>
                    {/* <Link to>Home</Link> */}
                   
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;