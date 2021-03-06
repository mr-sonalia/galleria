/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { collection, doc, setDoc } from "firebase/firestore";
import { AppDispatch } from ".";
import { db, IMAGES_PATH } from "../firebaseConfig";
import { DataState, PostType } from "../types";

const initialState: DataState = {
  posts: [],
  loading: true,
  error: [false, ""],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setDataFetchedFromServer: (state: DataState, action: PayloadAction<DataState>) => {
      if (state.loading) {
        state.posts = action.payload.posts;
        state.loading = action.payload.loading;
        state.error = action.payload.error;

      }
    },
    setUpdatedData: (
      state: DataState,
      action: PayloadAction<{ likes: number; stateIndex: number }>
    ) => {
      state.posts[action.payload.stateIndex].likes = action.payload.likes;
    },
  },
});

export const { setDataFetchedFromServer, setUpdatedData } = dataSlice.actions;

export const setLikesDB = (data: PostType, stateIndex: number) => async (dispatch: AppDispatch) => {
  const updatedData: PostType = { ...data, likes: data.likes + 1 };

  try {
    await setDoc(doc(collection(db, IMAGES_PATH), data.id), {
      ...updatedData,
    });
    dispatch(
      setUpdatedData({
        likes: updatedData.likes,
        stateIndex,
      })
    );
  } catch (error) {}
};

export const dataReducer = dataSlice.reducer;
export default dataSlice;
