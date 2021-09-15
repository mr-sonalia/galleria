import MasonryTile from "./MasonryTile";
const MasonryContainer = ({ data }) => {
	const items = data.map((item) => (
		<MasonryTile
			key={item.id}
			// id={item.id}
			// src={item.src}
			// title={item.title}
			// contributors={item.contributors}
			// tags={item.tags}
			item={item}
		/>
	));

	return <div className="masonry">{items}</div>;
};

export default MasonryContainer;
