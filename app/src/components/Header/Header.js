import Wrapper from "../UI/Wrapper";
import Logo from "./Logo";
import Navbar from "./Navbar";
const Header = () => {
	return (
		<header className="header">
			<Wrapper setClass="container">
				<div className="header--inner">
					<div className="spacer"></div>
					<Logo />
					<Navbar />
				</div>
			</Wrapper>
		</header>
	);
};
export default Header;
