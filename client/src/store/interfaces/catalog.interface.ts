import { IHospital } from "src/utils/interfaces/catalog.interface";
import { IUser } from "src/utils/interfaces/user.interface";

export interface IHospitalState {
  data: IHospital[];
  activatedHospital: IHospital | null;
}
