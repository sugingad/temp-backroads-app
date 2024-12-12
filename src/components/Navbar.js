import logo from "../images/logo.svg";
import { socialLinks } from "./data.js";
import Pagelinks from "./Pagelinks.js";
import Sociallinks from "./Sociallinks.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <Pagelinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((social) => {
            return (
              <Sociallinks key={social.id} itemClass="nav-icon" {...social} />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
