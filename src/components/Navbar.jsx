import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="header mt-1">
      <NavLink to="/" className="flex justify-center items-center ">
        <div className="hidden md:flex justify-center items-center">
          <div className="w-9 h-9 bg-green-200 rounded-full flex justify-center items-center animate-pulse  ">
            <div className="w-4 h-4 rounded-full bg-green-600 items-center justify-center flex- font-bold "></div>
          </div>
          <p className="text-green-400 font-medium ml-2 text-lg ">
            Available for work
          </p>
        </div>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium ">
        <Link
          to="Projects"
          spy={true}
          smooth={true}
          offset={-30}
          duration={800}
        >
          <NavLink>Projects</NavLink>
        </Link>
        <Link to="Contact" spy={true} smooth={true} offset={50} duration={2500}>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-blue-500" : "text-black"
            }
          >
            Contact
          </NavLink>
        </Link>
        <NavLink
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1XWACxc_5R--h8W4drVSCGCW-S1_fLaXG/view?usp=sharing"
            )
          }
        >
          <p className="blue-gradient_text">CV</p>
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
