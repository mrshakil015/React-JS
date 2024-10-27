import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png'

const Navbar = () => {
    const navLinks = <>
        <li><NavLink to="/news">News</NavLink></li>
        <li><NavLink to="/destination">Destination</NavLink></li>
        <li><NavLink to="/blog">Blog</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
    </>

    return (
        <div className="navbar text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-extrabold">TRAVEL GURU</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered  md:w-auto" />
                </div>
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn bg-[#F9A51A] border-none px-7">Login</button>
            </div>
        </div>
    );
};

export default Navbar;