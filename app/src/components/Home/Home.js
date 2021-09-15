import MasonryContainer from "../Masonry/MasonryContainer";
const Home = (props) => {
	return (
		<main className="container">
			<MasonryContainer data={props.data} />
		</main>
	);
};

export default Home;
