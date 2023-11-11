import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md px-9"
      >
        <p className="blue-gradient_text">ADAM</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
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
              "https://drive.google.com/file/d/1Sn5G5y2JlmdytLsz0t2_uZq4DlHKNg2O/view?usp=sharing"
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
