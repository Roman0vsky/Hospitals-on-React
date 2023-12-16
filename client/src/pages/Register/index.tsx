import {
  Button,
  ErrorMessage,
  Input,
  Label,
  Page,
  Wrapper,
} from "src/commonStyles";
import { Box, Container, Content, Form, Inner, Title } from "./styled";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate, redirect, useNavigate } from "react-router-dom";
import { APP_ROUTES } from "src/utils/constants";
import AuthService from "src/utils/api/services/Auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "src/store/actions";
import { IStore } from "src/store/interfaces/store.interface";
import { useEffect } from "react";
import UsersService from "src/utils/api/services/Users";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import { getItem } from "src/utils/local-storage";
import jwt from "jwt-decode";
import store from "src/store";

interface IFormInput {
  firstName: string;
  lastName: string;
  email: string;
  login: string;
  password: string;
  passwordConfirm: string;
  manager: boolean;
}

export default function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   (async function () {
  //     const token = getItem("token");
  //     if (!token) return;

  //     const payload: JWTPayload = jwt(token);
  //     const user = await UsersService.getUser(+payload.sub);

  //     if (!user.id) return;

  //     dispatch(setUser(user));
  //     navigate(APP_ROUTES.DASHBOARD, { replace: true });
  //   })();
  // }, [dispatch, navigate]);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    setError,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const {
      firstName,
      lastName,
      email,
      login,
      password,
      passwordConfirm,
      manager,
    } = data;
    const roles = ["user"];

    if (password !== passwordConfirm) {
      setError("root", {
        type: "password confirmation",
        message: "Passwords don't match",
      });
      return;
    }

    try {
      const user = await AuthService.register({
        email,
        password,
        login,
        firstName,
        lastName,
        roles,
      });
      dispatch(setUser(user));
    } catch (err: any) {
      setError("root", { type: "400", message: err.message });
      return;
    }

    reset({
      firstName: "",
      lastName: "",
      email: "",
      login: "",
      password: "",
      passwordConfirm: "",
      manager: false,
    });

    return navigate(APP_ROUTES.CATALOG, { replace: true });
  };

  const goToLogin = () => navigate(APP_ROUTES.LOGIN);

  return (
    <Page>
      <Content>
        <Title>
          <span className="span" onClick={goToLogin}>
            Authorization
          </span>
          /<span className="span underline">Registration</span>
        </Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Inner>
            <Input
              {...register("firstName", {
                required: { value: true, message: "Enter name" },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters",
                },
                maxLength: { value: 50, message: "Max 50 signs" },
              })}
              placeholder="Name"
              autoComplete="off"
              id="firstName"
            />
            <ErrorMessage>{errors.firstName?.message}</ErrorMessage>
          </Inner>
          <Inner>
            <Input
              {...register("lastName", {
                required: { value: true, message: "Enter surname" },
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Only letters",
                },
                maxLength: { value: 50, message: "Max 50 signs" },
              })}
              placeholder="Surname"
              autoComplete="off"
              id="lastName"
            />
            <ErrorMessage>{errors.lastName?.message}</ErrorMessage>
          </Inner>
          <Inner>
            <Input
              {...register("email", {
                required: { value: true, message: "Enter email" },
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: "Format: xxx@yyy.zzz",
                },
              })}
              placeholder="Email"
              autoComplete="off"
              id="email"
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </Inner>
          <Inner>
            <Input
              {...register("login", {
                required: { value: true, message: "Enter login" },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Only letters and numbers",
                },
                minLength: { value: 4, message: "Min 4 signs" },
                maxLength: { value: 50, message: "Max 50 signs" },
              })}
              placeholder="Login"
              autoComplete="off"
              id="login"
            />
            <ErrorMessage>{errors.login?.message}</ErrorMessage>
          </Inner>
          <Inner>
            <Input
              {...register("password", {
                required: { value: true, message: "Enter password" },
                pattern: {
                  value: /^[A-Za-z0-9]+$/,
                  message: "Only letters and numbers",
                },
                minLength: { value: 4, message: "Min 4 signs" },
                maxLength: { value: 50, message: "Max 50 signs" },
              })}
              placeholder="Password"
              autoComplete="off"
              id="password"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </Inner>
          <Inner>
            <Input
              {...register("passwordConfirm", {
                required: { value: true, message: "Confirm password" },
              })}
              placeholder="Confirm password"
              autoComplete="off"
              id="passwordConfirm"
            />
            <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
          </Inner>
          <Box $width="500px" $checkbox>
            <Input
              {...register("manager")}
              $width="35px"
              $height="35px"
              autoComplete="off"
              id="manager"
              type="checkbox"
            />
            <Label htmlFor="manager" $checkbox>
              Are you a manager?
            </Label>
          </Box>
          <Container>
            <Button type="submit" $light>
              Sign up
            </Button>
          </Container>
        </Form>
      </Content>
    </Page>
  );
}

export const registerLoader = async () => {
  const token = getItem("token");
  if (!token) return null;

  const payload: JWTPayload = jwt(token);
  const user = await UsersService.getUser(+payload.sub);

  if (!user.id) return null;

  store.dispatch(setUser(user));
  return redirect(APP_ROUTES.CATALOG);
};
