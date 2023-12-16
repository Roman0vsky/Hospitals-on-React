import { ContentContainer, Title } from "src/commonStyles";
import { Container, Content, H2, Wrap } from "./styled";
import CatalogCard from "./HospitalCard/HospitalCard";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";
import { redirect } from "react-router-dom";
import store from "src/store";
import { setCatalog, setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import { APP_ROUTES } from "src/utils/constants";
import CatalogService from "src/utils/api/services/Catalog";

export default function Home() {
  const hospitals = useSelector((store: IStore) => store.hospitalsCatalog.data);

  const cards = hospitals.map((card) => (
    <CatalogCard key={card.id} hospitalCard={card} />
  ));

  return (
    <Wrap>
      <Content>
        <Title>Hospitals</Title>
        <Container>{cards}</Container>
        {cards.length === 0 && <H2>Catalog is empty</H2>}
      </Content>
    </Wrap>
  );
}

export const dashboardLoader = async () => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user, hospitalsCatalog] = await Promise.all([
    UsersService.getUser(+payload.sub),
    CatalogService.getFullCatalog(),
  ]);

  if (!user.id) return null;

  store.dispatch(setUser(user));
  store.dispatch(setCatalog(hospitalsCatalog));

  return user;
};
