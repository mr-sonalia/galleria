import { useState } from "react";
import { updateDB } from "../../helpers";
import LikeIconSVG from "./LikeIconSVG";

const MasonryTile = ({ item }) => {
	// console.log(item);
	const [likes, setLikes] = useState(item.likes);

	const setLikesHandler = () => {
		setLikes((prev) => {
			const curr = prev + 1;
			updateDB(item.id, { ...item, likes: curr });
			return curr;
		});
	};

	const contributors = item.contributors.length > 1 ? item.contributors.join(", ") : item.contributors;

	return (
		<div className="masonry--tile">
			<div className="masonry--tile-overlay">
				<div className="headings">
					<h4 className="h4">{item.title}</h4>
					<h5 className="h5">{contributors}</h5>
				</div>
				<div className="likes">
					<LikeIconSVG setLikes={setLikesHandler} />
					<span className="span likes-count">{likes}</span>
				</div>
			</div>
			<img className="masonry--tile-image" src={item.src} alt={item.title} />
		</div>
	);
};

export default MasonryTile;
