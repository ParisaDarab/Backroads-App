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


export const Service=({icon,title})=>{
 return(
  <article className="service" >
  <span className="service-icon"><i className={`fas ${icon} fa-fw`}></i></span>
  <div className="service-info">
    <h4 className="service-title">{title}</h4>
    <p className="service-text">
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Asperiores, officia.
    </p>
  </div>
</article>
 )
}