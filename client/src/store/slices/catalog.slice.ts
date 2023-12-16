import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IHospitalState } from "../interfaces/catalog.interface";
import { IHospital } from "src/utils/interfaces/catalog.interface";

const InitialState: IHospitalState = {
  data: [],
  activatedHospital: null,
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState: InitialState,
  reducers: {
    setCatalog: (state, { payload }: PayloadAction<IHospital[]>) => {
      state.data = payload;
    },
    setActivatedCatalog: (state, { payload }: PayloadAction<IHospital>) => {
      state.activatedHospital = payload;
    },
    resetActivatedCatalog: (state) => {
      state.activatedHospital = null;
    },
  },
});

export default catalogSlice;
