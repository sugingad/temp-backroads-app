const Sociallinks = ({ href, itemClass, icon }) => {
  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={itemClass}>
        <i className={`fab fa-${icon}`}></i>
      </a>
    </li>
  );
};
export default Sociallinks;
