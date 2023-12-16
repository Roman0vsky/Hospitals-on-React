import { IHospital } from "src/utils/interfaces/catalog.interface";
import { IDoctor } from "src/utils/interfaces/company.interface";
import { IUser } from "src/utils/interfaces/user.interface";

export interface IDoctorsState {
  data: IDoctor[];
  activatedDoctor: IDoctor | null;
}
