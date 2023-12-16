import { Calendar, Container, InfoContainer, Wrap } from "./styled";
import { Button, Title, AvatarImg, Text } from "src/commonStyles";
import { redirect } from "react-router-dom";
import { getItem } from "src/utils/local-storage";
import { APP_ROUTES } from "src/utils/constants";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import jwt from "jwt-decode";
import store from "src/store";
import { setActivatedCompany, setUser } from "src/store/actions";
import CompaniesService from "src/utils/api/services/Companies";
import { IStore } from "src/store/interfaces/store.interface";
import { useSelector } from "react-redux";

export default function Doctor() {
  const doctor = useSelector((store: IStore) => store.doctors.activatedDoctor);

  return (
    <Wrap>
      <InfoContainer>
        <Title>Doctor information</Title>
        <AvatarImg
          $backgroundImg={
            doctor?.imgUrl ||
            "https://nordin.by/wp-content/uploads/2022/12/doctor-full.jpg"
          }
          $margin_bottom="20px"
        />
        <Text>{doctor?.fullName}</Text>
        <Text>{doctor?.specialization}</Text>
        <Text>{doctor?.workTime}</Text>
      </InfoContainer>
      <Container>
        <Calendar>
          <thead>
            <tr>
              <th colSpan={7}>July 2023</th>
            </tr>
            <tr>
              <th>Su</th>
              <th>Mo</th>
              <th>Tu</th>
              <th>We</th>
              <th>Th</th>
              <th>Fr</th>
              <th>Sa</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>26</td>
              <td>27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
              <td className="today">1</td>
              <td>2</td>
            </tr>
            <tr>
              <td>3</td>
              <td className="active">4</td>
              <td className="active">5</td>
              <td className="active">6</td>
              <td>7</td>
              <td>8</td>
              <td>9</td>
            </tr>
            <tr>
              <td>10</td>
              <td className="active">11</td>
              <td className="active">12</td>
              <td className="active">13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td>17</td>
              <td className="active">18</td>
              <td className="active">19</td>
              <td className="active">20</td>
              <td>21</td>
              <td>22</td>
              <td>23</td>
            </tr>
            <tr>
              <td>24</td>
              <td className="active">25</td>
              <td className="active">26</td>
              <td className="active">27</td>
              <td>28</td>
              <td>29</td>
              <td>30</td>
            </tr>
            <tr>
              <td>31</td>
              <td>1</td>
              <td>2</td>
              <td>3</td>
              <td>4</td>
              <td>5</td>
              <td>6</td>
            </tr>
          </tbody>
        </Calendar>
      </Container>
    </Wrap>
  );
}

export const doctorLoader = async ({ params }: any) => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user, company] = await Promise.all([
    UsersService.getUser(+payload.sub),
    CompaniesService.getCompany({ id: params.id }),
  ]);
  if (!user.id) return null;

  store.dispatch(setUser(user));
  store.dispatch(setActivatedCompany(company));

  return user;
};
