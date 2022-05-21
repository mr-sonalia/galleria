import { useReducer } from "react";
import { addDB } from "../../helpers";

const initData = { src: "", title: "", contributors: [], tags: [] };

const reducer = (state, { type, payload }) => {
	switch (type) {
		case "reset":
			return initData;
		case "src":
			return { ...state, src: payload.src };
		case "title":
			return { ...state, title: payload.title };
		case "contributors":
			return { ...state, contributors: payload.contributors.split(",") };
		case "tags":
			return { ...state, tags: payload.tags.split(",") };
		default:
			return state;
	}
};
const NewTile = () => {
	const [data, dispatchData] = useReducer(reducer, initData);

	const submitHandler = (e) => {
		e.preventDefault();
		addDB(data);
		dispatchData({ type: "reset" });
		// canRender(true);
	};

	const srcHandler = (e) => {
		dispatchData({ type: "src", payload: { src: e.target.value } });
	};
	const titleHandler = (e) => {
		dispatchData({ type: "title", payload: { title: e.target.value } });
	};
	const contributorsHandler = (e) => {
		dispatchData({ type: "contributors", payload: { contributors: e.target.value } });
	};
	const tagsHandler = (e) => {
		dispatchData({ type: "tags", payload: { tags: e.target.value } });
	};

	// const showItemsHandler = () => {
	// 	console.log(res);
	// };
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label htmlFor="">Src</label>
					<input value={data.src} onChange={srcHandler} type="text" />
				</div>
				<div>
					<label htmlFor="">Title</label>
					<input value={data.title} onChange={titleHandler} type="text" />
				</div>
				<div>
					<label htmlFor="">Contributors</label>
					<input value={data.contributors} onChange={contributorsHandler} type="text" />
				</div>
				<div>
					<label htmlFor="">Tags</label>
					<input value={data.tags} onChange={tagsHandler} type="text" />
				</div>
				<button type="submit">Add to DB</button>
			</form>
			{/* <button onClick={showItemsHandler}>Show Items</button> */}
		</div>
	);
};

export default NewTile;
