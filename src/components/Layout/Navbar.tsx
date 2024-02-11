import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";

const Navbar = () =>{
    return (
        <header className="h-12 my-2">
            <nav className="w-full h-full max-w-[1260px] px-[20px] mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-semibold">Technext Limited</h1>
                <ul className="space-x-5 text-base">
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/add-user"><Button>Add User</Button></NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar;