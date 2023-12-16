import { addItem } from "src/utils/local-storage";
import client from "../client";
import { API_ENDPOINTS } from "src/utils/constants";
import { IBackAuth } from "src/utils/interfaces/back-auth.interface";
import { IUser } from "src/utils/interfaces/user.interface";
import { IHospital } from "src/utils/interfaces/catalog.interface";
import { IReview } from "src/utils/interfaces/review.interface";

interface IGetCompanies {
  hospitalId?: number;
}

const ReviewsService = {
  getReviewes: async ({ hospitalId }: IGetCompanies): Promise<IReview[]> => {
    try {
      const response = await client.get(`${API_ENDPOINTS.REVIEWS}`);
      const data: IReview[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    }
    /* try {
      const response = await client.get(
        `${API_ENDPOINTS.REVIEWS}?${
          hospitalId ? `hospitalId=${hospitalId}` : ""
        }`
      );
      const data: IReview[] | string = await response.json();

      if (typeof data === "string") throw new Error(data);

      return data;
    } catch (err: any) {
      throw new Error(err.message);
    } */
  },
};

export default ReviewsService;
