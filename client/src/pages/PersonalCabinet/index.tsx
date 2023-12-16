import { Container, Form, InputErrorBox, Wrap } from "./styled";
import {
  AvatarImg,
  Button,
  ContentContainer,
  ErrorMessage,
  Input,
  Title,
} from "src/commonStyles";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { IStore } from "src/store/interfaces/store.interface";
import { getItem } from "src/utils/local-storage";
import { redirect } from "react-router-dom";
import { APP_ROUTES } from "src/utils/constants";
import { JWTPayload } from "src/utils/interfaces/jwt-payload.interface";
import store from "src/store";
import { setUser } from "src/store/actions";
import UsersService from "src/utils/api/services/Users";
import jwt from "jwt-decode";
import { useDispatch } from "react-redux";

interface IFormInput {
  firstName: string;
  lastName: string;
  birthday: string;
  sex: string;
  login: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export default function PersonalCabinet() {
  const user = useSelector((store: IStore) => store.auth.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    if (!user) return;

    const newUser = { ...user };

    const {
      firstName,
      lastName,
      birthday: dob,
      sex,
      email,
      password,
      passwordConfirm,
    } = data;

    console.log(`<${password}>`);

    if (password !== passwordConfirm) {
      reset();
      return;
    }

    if (firstName) {
      newUser.firstName = firstName;
    }
    if (lastName) {
      newUser.lastName = lastName;
    }
    if (dob) {
      newUser.dob = dob;
    }
    if (sex) {
      newUser.sex = sex;
    }
    if (email) {
      newUser.email = email;
    }
    if (password) {
      console.log(1);

      newUser.password = password;
    }

    await UsersService.updateUser(newUser);
    dispatch(setUser(newUser));
    reset();
  };

  return (
    <Wrap>
      <ContentContainer>
        <Title>Personal information</Title>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Container>
            <InputErrorBox>
              <Input
                {...register("firstName", {
                  required: { value: true, message: "Enter name" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters",
                  },
                  maxLength: { value: 50, message: "Max 50 signs" },
                })}
                id="firstName"
                autoComplete="off"
                defaultValue={user?.firstName || ""}
                $width="500px"
                placeholder="Name"
              />
              <ErrorMessage $dark>{errors.firstName?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("lastName", {
                  required: { value: true, message: "Enter surname" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters",
                  },
                  maxLength: { value: 50, message: "Max 50 signs" },
                })}
                id="lastName"
                autoComplete="off"
                defaultValue={user?.lastName || ""}
                $width="500px"
                placeholder="Surname"
              />
              <ErrorMessage $dark>{errors.lastName?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("sex", {
                  required: { value: true, message: "Enter sex" },
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters",
                  },
                  maxLength: { value: 50, message: "Max 50 signs" },
                })}
                id="sex"
                $width="500px"
                autoComplete="off"
                defaultValue={user?.sex || ""}
                placeholder="Sex"
              />
              <ErrorMessage $dark>{errors.sex?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("birthday", {
                  required: { value: true, message: "Enter birthday" },
                })}
                id="birthday"
                autoComplete="off"
                defaultValue={user?.dob || ""}
                $width="500px"
                placeholder="Birthday"
              />
              <ErrorMessage $dark>{errors.birthday?.message}</ErrorMessage>
            </InputErrorBox>
          </Container>

          <Container>
            <AvatarImg
              $backgroundImg={
                user?.imgUrl ||
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIKcTkARlljahDz7xR5gq-lwY3NSwsYMQdl_AlXfua4Yc2QcQ9QIG38gxtEiMGNAdoEck&usqp=CAU"
              }
              $margin_bottom="20px"
            />
            {/* <Button $light disabled $width="300px">
              Change password
            </Button> */}
            <Button $light type="submit">
              Save
            </Button>
          </Container>

          <Container>
            <InputErrorBox>
              <Input
                {...register("login", {
                  pattern: {
                    value: /^[A-Za-z]+$/,
                    message: "Only letters and numbers",
                  },
                  maxLength: { value: 50, message: "Max 50 signs" },
                })}
                id="login"
                autoComplete="off"
                value={user?.login || ""}
                disabled={true}
                readOnly={true}
                $disabled={true}
                $width="500px"
                placeholder="Login"
              />
              <ErrorMessage $dark>{errors.login?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("email", {
                  required: { value: true, message: "Enter email" },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    message: "Format: xxx@yyy.zzz",
                  },
                })}
                id="email"
                autoComplete="off"
                defaultValue={user?.email || ""}
                $width="500px"
                placeholder="Email"
              />
              <ErrorMessage $dark>{errors.email?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("password", {
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Only letters and numbers",
                  },
                  minLength: { value: 4, message: "Min 4 signs" },
                  maxLength: { value: 50, message: "Max 50 signs" },
                  required: { value: true, message: "Enter new password" },
                })}
                id="password"
                autoComplete="off"
                defaultValue={""}
                $width="500px"
                placeholder="Password"
              />
              <ErrorMessage $dark>{errors.password?.message}</ErrorMessage>
            </InputErrorBox>
            <InputErrorBox>
              <Input
                {...register("passwordConfirm", {
                  pattern: {
                    value: /^[A-Za-z0-9]+$/,
                    message: "Only letters and numbers",
                  },
                  minLength: { value: 4, message: "Min 4 signs" },
                  maxLength: { value: 50, message: "Max 50 signs" },
                  required: {
                    value: true,
                    message: "Confirm new password",
                  },
                })}
                id="passwordConfirm"
                autoComplete="off"
                defaultValue={""}
                $width="500px"
                placeholder="Confirm password"
              />
              <ErrorMessage $dark>
                {errors.passwordConfirm?.message}
              </ErrorMessage>
            </InputErrorBox>
          </Container>
        </Form>
      </ContentContainer>
    </Wrap>
  );
}

export const personalCabinetLoader = async () => {
  const token = getItem("token");
  if (!token) return redirect(APP_ROUTES.LOGIN);

  const payload: JWTPayload = jwt(token);
  let [user] = await Promise.all([UsersService.getUser(+payload.sub)]);

  if (!user.id) return null;

  store.dispatch(setUser(user));

  return user;
};
