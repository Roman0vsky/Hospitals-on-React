import { CardImg, Container, Inner, Wrap } from "./styled";
import { Text } from "src/commonStyles";
import { IReview } from "src/utils/interfaces/review.interface";

interface Props {
  data: IReview;
}

export default function Review({ data }: Props) {
  return (
    <Wrap>
      <CardImg
        $background={
          data.user.imgUrl ||
          "https://static.vecteezy.com/system/resources/previews/004/493/181/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg"
        }
      />
      <Container>
        <Inner>
          <Text $height="100%" $width="350px">
            {data.user.name}
          </Text>
          <Text $height="100%" $width="285px">
            {data.date}
          </Text>
        </Inner>
        <Text $height="100%" $width="650px" $min_height="180px">
          {data.text}
        </Text>
      </Container>
    </Wrap>
  );
}
