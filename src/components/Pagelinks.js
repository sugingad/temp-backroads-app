import { pageLinks } from "./data";
import Pagelink from "./Pagelink";
const Pagelinks = ({ linkType, parentClass, itemClass }) => {
  const links =
    linkType === "footer"
      ? pageLinks.filter(({ text }) => text !== "tours")
      : pageLinks.filter(({ text }) => text !== "featured");

  return (
    <ul className={parentClass} id={parentClass}>
      {links.map((link) => {
        return <Pagelink key={link.id} link={link} itemClass={itemClass} />;
      })}
    </ul>
  );
};
export default Pagelinks;
