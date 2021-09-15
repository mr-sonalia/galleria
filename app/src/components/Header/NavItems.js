const NavItems = ({ link, icon, setClass }) => {
	return (
		<li className="nav-item">
			<a target="_blank" rel="noreferrer" referrerPolicy="no-referrer" className="nav-link" href={link}>
				<img className={`nav-icon ${setClass}`} src={icon} alt="" />
			</a>
		</li>
	);
};

export default NavItems;
