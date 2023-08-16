import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledDiv, StyledLoginForm, StyledLoginPage } from "./styles";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginSchema } from "./loginSchema";
import { UserContext } from "../../context/UserContext/UserContext";
import { ILoginFormValues } from "../../context/UserContext/@types";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const {
    handleSubmit,
    register,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    formState: { errors },
    reset,
  } = useForm<ILoginFormValues>({ resolver: yupResolver(LoginSchema) });

  const submit: SubmitHandler<ILoginFormValues> = (formData) => {
    userLogin(formData);
    reset();
  };

  return (
    <>
      <HeaderLoggedOut />
      <StyledLoginPage>
        <StyledLoginForm onSubmit={handleSubmit(submit)}>
          <h2>Login</h2>
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digitar email"}
            register={register("email")}
            error={errors.email}
          />
          <div className="forgetPasswordDiv">
            <Input
              label={"Senha"}
              type={"password"}
              placeholder={"Digitar senha"}
              register={register("password")}
              error={errors.password}
            />
            <button type="button">Esqueci minha senha</button>
          </div>
          <StyledDiv>
            <button type="submit">Entrar</button>
            <h4>Ainda não possui conta?</h4>
            <Link to="/register">Cadastrar</Link>
          </StyledDiv>
        </StyledLoginForm>
      </StyledLoginPage>
      <Footer />
    </>
  );
};
