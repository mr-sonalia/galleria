import Image from "next/image";
import React from "react";

interface Props {
  link: string;
  className: string;
  iconPath: string;
  children?: typeof React.Children;
}

const NavItems = ({ link, iconPath, className }: Props) => {
  return (
    <li className="nav-item">
      <a
        target="_blank"
        rel="noreferrer"
        referrerPolicy="no-referrer"
        className="nav-link"
        href={link}
      >
        <Image className={`nav-icon ${className}`} src={iconPath} alt="" layout="fill"/>
      </a>
    </li>
  );
};

export default NavItems;
