import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { setLikesDB } from "../../store/dataSlice";
import { PostType } from "../../types";
import LikeIconSVG from "./LikeIconSVG";

interface Props {
  item: PostType;
  stateIndex: number;
}

const MasonryTile = (props: Props) => {
  const dispatch = useDispatch<AppDispatch>();

  let contributors =
    props.item.contributors.length === 1
      ? props.item.contributors[0]
      : props.item.contributors.join(",");

  const setLikesHandler = () => {
    dispatch(setLikesDB(props.item, props.stateIndex));
  };

  /* 
  <motion.div
    initial={{ opacity: 0, y: 100 }}
    whileInView={{
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    }}
    viewport={{ once: true }}
  >
  
  </motion.div>  */
  return (
    <div className="masonry--tile">
      <div className="masonry--tile-overlay">
        <div className="headings">
          <h4 className="h4">{props.item.title}</h4>
          <h5 className="h5">{contributors}</h5>
        </div>
        <div className="likes">
          <LikeIconSVG setLikes={setLikesHandler} />
          <span className="span likes-count">{props.item.likes}</span>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="masonry--tile-image"
        src={props.item.src}
        alt={props.item.title}
        loading={"lazy"}
      />
    </div>
  );
};

export default MasonryTile;
