import { Container, H2, InfoContainer, Wrap } from "./styled";
import { AvatarImg, Button, Text, Title } from "src/commonStyles";
import DoctorCard from "src/pages/AddDoctor/DoctorCard/DoctorCard";
import { Link, redirect, useNavigate, useParams } from "react-router-dom";
import CatalogService from "src/utils/api/services/Catalog";
import { getItem } from "src/utils/local-storage";
import { APP_ROUTES } from "src/utils/constants";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import jwt from "jwt-decode";
import UsersService from "src/utils/api/services/Users";
import store from "src/store";
import { setActivatedCatalog, setCompanies, setUser } from "src/store/actions";
import CompaniesService from "src/utils/api/services/Companies";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";

export default function Doctors() {
  const { name } = useParams();
  const doctors = useSelector((store: IStore) => store.doctors.data);
  const activatedHospital = useSelector(
    (store: IStore) => store.hospitalsCatalog.activatedHospital
  );
  const navigate = useNavigate();

  function goToReviews() {
    return navigate(`${APP_ROUTES.CATALOG}/${name}/reviews`);
  }

  const cards = doctors.map((card) => (
    <Link
      to={`${APP_ROUTES.CATALOG}/${name}/${card.id}`}
      key={card.id}
      style={{ textDecoration: "none", color: "#000" }}
    >
      <DoctorCard
        key={card.id}
        imgUrl={card.imgUrl}
        fullName={card.fullName}
        specialization={card.specialization}
      />
    </Link>
  ));

  return (
    <Wrap>
      <InfoContainer>
        <Title>Hospital information</Title>
        <AvatarImg
          $backgroundImg={activatedHospital?.imgUrl || ""}
          $margin_bottom="20px"
        />
        <Text>{activatedHospital?.name}</Text>
        <Text>{activatedHospital?.address}</Text>
        <Text>{activatedHospital?.workTime}</Text>
        <Text>{activatedHospital?.phone}</Text>
        <Text>{activatedHospital?.email}</Text>
        <Button $light $width="320px" $margin="20px 0 0" onClick={goToReviews}>
          Check reviews
        </Button>
      </InfoContainer>
      <Container>{cards}</Container>
      {cards.length === 0 && <Container><H2>No doctors</H2></Container>}
    </Wrap>
  );
}

export const companiesLoader = async ({ params }: any) => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user, catalog] = await Promise.all([
    UsersService.getUser(+payload.sub),
    CatalogService.getCatalog({ name: params.name.split("-").join(" ") }),
  ]);
  if (!user.id) return null;

  if (catalog.length === 0) return redirect(APP_ROUTES.CATALOG);
  const companies = await CompaniesService.getCompanies({
    hospitalId: catalog[0].id,
  });

  store.dispatch(setUser(user));
  store.dispatch(setActivatedCatalog(catalog[0]));
  store.dispatch(setCompanies(companies));

  return user;
};
