import { CardImg, Container, Wrap } from "./styled";
import { Text } from "src/commonStyles";

interface Props {
  imgUrl: string;
  fullName: string;
  specialization: string;
}

export default function DoctorCard(props: Props) {
  return (
    <Wrap
    /* onClick={() =>
        navigate(
          `${APP_ROUTES.CATALOG}/${props.catalogCard.name.split(" ").join("-")}`
        )
      } */
    >
      <CardImg
        $background={
          props.imgUrl ||
          "https://static.vecteezy.com/system/resources/previews/004/493/181/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg"
        }
      />
      <Container>
        <Text $height="90px" $width="650px" style={{ width: "650px" }}>
          {props.fullName}
        </Text>
        <Text $height="90px" $width="650px" style={{ width: "650px" }}>
          {props.specialization}
        </Text>
      </Container>
    </Wrap>
  );
}
