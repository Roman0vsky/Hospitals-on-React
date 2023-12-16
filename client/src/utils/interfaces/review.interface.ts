export interface IReview {
  id: number;
  text: string;
  date: string;
  user: {
    id: number;
    name: string;
    imgUrl: string;
  };
}
