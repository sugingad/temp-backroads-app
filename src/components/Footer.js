import { socialLinks } from "./data.js";
import Pagelinks from "./Pagelinks.js";
import Sociallinks from "./Sociallinks.js";
const Footer = () => {
  return (
    <footer className="section footer">
      <Pagelinks
        linkType="footer"
        parentClass="footer-links"
        itemClass="footer-link"
      />

      <ul className="footer-icons">
        {socialLinks.map((social) => {
          return (
            <Sociallinks key={social.id} itemClass="footer-icon" {...social} />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
