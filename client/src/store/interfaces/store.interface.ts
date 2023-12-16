import { IAuthState } from "./auth.interface";
import { IHospitalState } from "./catalog.interface";
import { IDoctorsState } from "./companies.interface";
import { IReviewState } from "./reviews.interface";

export interface IStore {
  auth: IAuthState;
  hospitalsCatalog: IHospitalState;
  doctors: IDoctorsState;
  reviews: IReviewState;
}
