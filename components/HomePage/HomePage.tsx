import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import MasonryContainer from "../Masonry/MasonryContainer";

interface Props {
  children?: typeof React.Children;
}
const HomePage = (props: Props) => {
  const data = useSelector((state: RootState) => state.data);
  return (
    <main className="container">
      <MasonryContainer posts={data.posts} />
    </main>
  );
};

export default HomePage;
