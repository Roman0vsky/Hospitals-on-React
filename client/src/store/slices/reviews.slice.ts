import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHospital } from "src/utils/interfaces/catalog.interface";
import { IReviewState } from "../interfaces/reviews.interface";
import { IReview } from "src/utils/interfaces/review.interface";

const InitialState: IReviewState = {
  data: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: InitialState,
  reducers: {
    setReviews: (state, { payload }: PayloadAction<IReview[]>) => {
      state.data = payload;
    },
    resetReviews: (state) => {
      state.data = [];
    },
  },
});

export default reviewsSlice;
