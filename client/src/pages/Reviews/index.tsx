import { useState } from "react";
import { IReview } from "src/utils/interfaces/review.interface";
import Review from "./Review/Review";
import {
  Container,
  Form,
  InfoContainer,
  TextArea,
  TextAreaBox,
  Wrap,
} from "./styled";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, ErrorMessage } from "src/commonStyles";

interface IFormInput {
  review: string;
}

const ReviewsList: IReview[] = [
  {
    id: 1,
    text: "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
    date: "12/12/2023",
    user: {
      id: -1,
      name: "Alisa Slepakova",
      imgUrl:
        "https://4tololo.ru/sites/default/files/images/20180511162104.jpg",
    },
  },
  {
    id: 2,
    text: "My husband and I went for dinner in restaurant X and really enjoyed the atmosphere. The food was fresh and delicious, and the best part was that the chef sent us a dessert they had created that day. We were delighted.",
    date: "1/10/2001",
    user: {
      id: -1,
      name: "Clara Babery",
      imgUrl: "https://vjoy.cc/wp-content/uploads/2020/10/stat2-261216-28.jpg",
    },
  },
  {
    id: 3,
    text: "The bout must last 13 seconds: 2 seconds to approach, 1 second to strike, 10 seconds to count the referee.",
    date: "9/19/1995",
    user: {
      id: -1,
      name: "Mike Tyson",
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Mike_Tyson_2019_by_Glenn_Francis.jpg/250px-Mike_Tyson_2019_by_Glenn_Francis.jpg",
    },
  },
];

export default function Reviews() {
  const user = useSelector((store: IStore) => store.auth.user);
  // const reviewsList = useSelector((store: IStore) => store.reviews.data);
  const [reviews, setReviews] = useState<IReview[]>(ReviewsList);

  const reviewsItems = reviews.map((review) => (
    <Review key={review.id} data={review} />
  ));

  console.log(reviewsItems);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setReviews((prevState) => {
      if (!user) return prevState;

      const d = new Date();

      const newState = [...prevState];
      newState.push({
        id: prevState[prevState.length - 1].id + 1,
        text: `${data.review}`,
        date: `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`,
        user: {
          id: user.id,
          name: user.firstName + " " + user.lastName,
          imgUrl:
            user.imgUrl ||
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU",
        },
      });
      reset({ review: "" });
      return newState;
    });
  };

  return (
    <Wrap>
      <InfoContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TextAreaBox>
            <TextArea
              {...register("review", {
                required: { value: true, message: "Enter review" },
              })}
              placeholder="Your review text"
              $height="450px"
            />
            <ErrorMessage $dark>{errors.review?.message}</ErrorMessage>
          </TextAreaBox>
          <Button type="submit">Send</Button>
        </Form>
      </InfoContainer>
      <Container> {reviewsItems}</Container>
    </Wrap>
  );
}
