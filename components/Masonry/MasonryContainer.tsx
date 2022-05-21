import { PostType } from "../../types";
import MasonryTile from "./MasonryTile";

interface Props {
  posts: PostType[];
}

const MasonryContainer = (props: Props) => {
  const items = props.posts.map((item, index) => (
    <MasonryTile key={item.id} item={item} stateIndex={index} />
  ));

  return <div className="masonry">{items}</div>;
};

export default MasonryContainer;
