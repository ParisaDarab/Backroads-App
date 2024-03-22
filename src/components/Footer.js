import { IconLink, NavLink } from "../data/Links";
import FooterLinks, { SocialMapLink } from "./map";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {NavLink.map(({ href, id, name }) => {
          return <FooterLinks href={href} id={id} name={name} key={id} />;
        })}
      </ul>
      {IconLink.map((item) => {
          return <SocialMapLink key={item.id} {...item} itemClass='footer-icon'/>;
        })}
      
      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
