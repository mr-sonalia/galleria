import LoadingScreen from "./components/UI/LoadingScreen";
import { Fragment, useEffect, useState } from "react";
// import { Switch, Route } from "react-router-dom";
import { readDB } from "./helpers";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./Footer/Footer";

const App = (props) => {
	const [loading, setLoading] = useState(true);

	const [res, setRes] = useState([]);

	const fetchRes = () => {
		readDB(setRes, "all");
	};

	useEffect(() => {
		fetchRes();
		const identifier = setTimeout(() => setLoading(false), 3000);
		return () => clearTimeout(identifier);
	}, []);

	return (
		<Fragment>
			{loading && <LoadingScreen />}
			<Fragment>
				<Header />
				{/* <Switch>
					<Route path="/" component={() => <Home data={res} />} exact></Route>
				</Switch> */}
				<Home data={res} />
				<Footer />
			</Fragment>
		</Fragment>
	);
};

export default App;
