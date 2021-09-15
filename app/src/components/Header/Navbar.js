import githubIcon from "../../assets/icons/social/GitHub.svg";
import linkedInIcon from "../../assets/icons/social/LinkedIn.svg";
import BehanceIcon from "../../assets/icons/social/Behance.svg";
import DribbbleIcon from "../../assets/icons/social/Dribble.svg";
import NavItems from "./NavItems";

const Navbar = () => {
	const navList = [
		{ key: "i0", setClass: "github", icon: githubIcon, link: "https://github.com/mr-sonalia" },
		{ key: "i1", setClass: "linkedin", icon: linkedInIcon, link: "https://www.linkedin.com/in/yash-sonalia/" },
		{ key: "i2", setClass: "behance", icon: BehanceIcon, link: "" },
		{ key: "i3", setClass: "dribbble", icon: DribbbleIcon, link: "" },
	];

	const items = navList.map((item) => (
		<NavItems key={item.key} link={item.link} icon={item.icon} setClass={item.setClass} />
	));
	return (
		<nav id="navbar" className="nav navbar">
			<ul className="nav-list">{items}</ul>
		</nav>
	);
};

export default Navbar;
