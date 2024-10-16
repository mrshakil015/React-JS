import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const RawNav = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile", name: "Profile" }
      ];
      
    return (
        <nav className="text-black bg-yellow-100 p-6">
            <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                    <IoMdClose></IoMdClose> 
                    : <RiMenu2Fill></RiMenu2Fill>
                }
                
            </div>
           <ul className={`md:flex duration-1000 absolute md:static bg-yellow-100 px-6 
            ${open ? 'top-24' : '-top-60'}
            shadow-lg md:shadow-none`}>
           {
                routes.map(route => <Link key={route.id} route={route}></Link>)
            }
           </ul>
        </nav>
    );
};

export default RawNav;