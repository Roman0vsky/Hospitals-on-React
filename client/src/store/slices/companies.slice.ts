import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDoctorsState } from "../interfaces/companies.interface";
import { IDoctor } from "src/utils/interfaces/company.interface";

const InitialState: IDoctorsState = {
  data: [],
  activatedDoctor: null,
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState: InitialState,
  reducers: {
    setCompanies: (state, { payload }: PayloadAction<IDoctor[]>) => {
      state.data = payload;
    },
    resetCompanies: (state) => {
      state.data = [];
    },
    setActivatedCompany: (state, { payload }: PayloadAction<IDoctor>) => {
      state.activatedDoctor = payload;
    },
    resetActivatedCompany: (state) => {
      state.activatedDoctor = null;
    },
  },
});

export default companiesSlice;
