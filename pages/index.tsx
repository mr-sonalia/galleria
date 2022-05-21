/** @format */

import { collection, DocumentData, getDocs } from "firebase/firestore";
import type { NextPage } from "next";
import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Head from "../components/Head";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import LoadingScreen from "../components/UI/LoadingScreen";
import { db, IMAGES_PATH } from "../firebaseConfig";
import { AppDispatch, RootState } from "../store";
import { setDataFetchedFromServer } from "../store/dataSlice";
import { DataState, PostType } from "../types";

type Props = {
  data: DataState;
  children: typeof React.Children;
};

const Home: NextPage<Props> = ({ data }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading } = useSelector((state: RootState) => state.data);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(
      setDataFetchedFromServer({
        posts: data.posts,
        loading: data.loading,
        error: data.error,
      })
    );
  }, [loading]);

  return (
    <Fragment>
      <Head />
      <LoadingScreen loading={loading} />
      <Header />
      <HomePage />
      <Footer />
    </Fragment>
  );
};

export default Home;

export async function getStaticProps() {
  const response = await getDocs(collection(db, IMAGES_PATH));
  const data = response.docs;

  const posts: PostType[] = [];
  try {
    const response = await getDocs(collection(db, IMAGES_PATH));
    response.forEach((item) => {
      const result: DocumentData = item.data();

      posts.unshift({
        id: item.id,
        title: result.title,
        src: result.src,
        likes: result.likes,
        contributors: result.contributors,
        comments: result.comments,
      });
    });
  } catch (err) {
    let error: [boolean, string] = [true, ""];

    if (err instanceof Error) error[1] = err.message;
    else if (typeof err === "string") error[1] = err;

    return {
      data: {
        posts: [],
        loading: false,
        error,
      },
    };
  }
  if (!data) {
    return {
      data: {
        posts: [],
        loading: false,
        error: [true, "Could not fetch data"],
      },
    };
  }

  return {
    props: {
      data: {
        posts,
        loading: false,
        error: [false, ""],
      },
    },
  };
}
