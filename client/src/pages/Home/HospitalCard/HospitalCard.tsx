import { APP_ROUTES } from "src/utils/constants";
import { Wrap, CardImg, Container } from "./styled";
import { useNavigate } from "react-router-dom";
import { IHospital } from "src/utils/interfaces/catalog.interface";
import { Text } from "src/commonStyles";

interface Props {
  hospitalCard: IHospital;
}

export default function CatalogCard(props: Props) {
  const navigate = useNavigate();

  return (
    <Wrap
      onClick={() =>
        navigate(
          `${APP_ROUTES.CATALOG}/${props.hospitalCard.name.split(" ").join("-")}`
        )
      }
    >
      <CardImg
        $background={
          props.hospitalCard.imgUrl ||
          "https://static.vecteezy.com/system/resources/previews/004/493/181/original/hospital-building-for-healthcare-background-illustration-with-ambulance-car-doctor-patient-nurses-and-medical-clinic-exterior-free-vector.jpg"
        }
      />
      <Container>
        <Text $height="45px" $width="650px">
          {props.hospitalCard.name}
        </Text>
        <Text $height="145px" $width="650px">
          {props.hospitalCard.address}
        </Text>
      </Container>
    </Wrap>
  );
}
