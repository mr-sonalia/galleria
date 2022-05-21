import NavItems from "./NavItems";

const Navbar = () => {
  const navList = [
    {
      key: "i0",
      setClass: "github",
      icon: "/assets/icons/social/Behance.svg",
      link: "https://github.com/mr-sonalia",
    },
    {
      key: "i1",
      setClass: "linkedin",
      icon: "/assets/icons/social/Dribble.svg",
      link: "https://www.linkedin.com/in/yash-sonalia/",
    },
    { key: "i2", setClass: "behance", icon: "/assets/icons/social/GitHub.svg", link: "" },
    { key: "i3", setClass: "dribbble", icon: "/assets/icons/social/LinkedIn.svg", link: "" },
  ];

  const items = navList.map((item) => (
    <NavItems key={item.key} link={item.link} iconPath={item.icon} className={item.setClass} />
  ));
  return (
    <nav id="navbar" className="nav navbar">
      <ul className="nav-list">{items}</ul>
    </nav>
  );
};

export default Navbar;
