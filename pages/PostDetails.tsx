import { ReactNode } from "react";
import { PostType } from "../types";

type Props = {
	post: PostType
  children: ReactNode;
};

const PostDetails = ({post, children}: Props) => {
  return <div></div>;
};

export default PostDetails;
