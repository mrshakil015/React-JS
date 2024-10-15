import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
  return (
    <div className="navbar max-w-6xl mx-auto">
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
            <li><a>Home</a></li>
            <li><a>Recipes</a></li>
            <li><a>About</a></li>
            <li><a>Search</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl font-bold text-[#150B2B]">Chefs Table</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>Recipes</a></li>
          <li><a>About</a></li>
          <li><a>Search</a></li>
        </ul>
      </div>
      <div className="navbar-end gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input  rounded-full bg-slate-200 w-24 md:w-auto" />
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Header;