const FooterLinks = ({ href, name }) => {
  return (
    <li>
      <a href={href} className="footer-link">
        {name}
      </a>
    </li>
  );
};
export default FooterLinks;

export const NavMapLink = ({ href, name }) => {
  return (
    <li>
      <a href={href} className="nav-link">
        {" "}
        {name}
      </a>
    </li>
  );
};

export const SocialMapLink = ({ icon, itemClass }) => {
  return (
    <li>
      <a href="https://www.twitter.com" target="_blank" className={itemClass}>
        <i className={`fab ${icon}`}></i>
      </a>
    </li>
  );
};
