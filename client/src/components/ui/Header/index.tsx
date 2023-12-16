import { Button, Logo, Search } from "src/commonStyles";
import { ContentContainer, MenuText, HeaderLink } from "./styled";
import { Wrap } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { removeItem } from "src/utils/local-storage";
import { useDispatch } from "react-redux";
import { resetUser } from "src/store/actions";
import { APP_ROUTES } from "src/utils/constants";

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = () => {
    removeItem("token");
    dispatch(resetUser());
    navigate(APP_ROUTES.LOGIN, { replace: true });
  };

  const onPersonalCabinetHandler = () => {
    navigate("cabinet");
  };

  const onHomePageHandler = () => {
    navigate("catalog");
  };

  return (
    <Wrap>
      <ContentContainer>
        <input type="checkbox" id="hmt" className="hidden-menu-ticker" />

        <label className="btn-menu" htmlFor="hmt">
          <span className="first"></span>
          <span className="second"></span>
          <span className="third"></span>
        </label>

        <ul className="hidden-menu">
          <li>
            <MenuText onClick={onHomePageHandler}>Home</MenuText>
          </li>
          <li>
            <MenuText onClick={onPersonalCabinetHandler}>
              Personal cabinet
            </MenuText>
          </li>
          <li>
            <MenuText onClick={onLogoutHandler}>Log out</MenuText>
          </li>
        </ul>

        <Logo onClick={onHomePageHandler}>H</Logo>

        <HeaderLink className="header-btn">Tickets</HeaderLink>

        <Search placeholder="Search..." />

        <HeaderLink className="header-btn" onClick={onPersonalCabinetHandler}>
          Cabinet
        </HeaderLink>

        <HeaderLink className="header-btn" onClick={onLogoutHandler}>
          Log out
        </HeaderLink>
      </ContentContainer>
    </Wrap>
  );
}
