import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import catalogSlice from "./slices/catalog.slice";
import companiesSlice from "./slices/companies.slice";
import reviewsSlice from "./slices/reviews.slice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    hospitalsCatalog: catalogSlice.reducer,
    doctors: companiesSlice.reducer,
    reviews: reviewsSlice.reducer,
  },
});

export default store;
