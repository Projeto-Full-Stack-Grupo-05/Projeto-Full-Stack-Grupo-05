import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledLoginForm, StyledLoginPage } from "./styles";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext/UserContext";
import { Link } from "react-router-dom";
import { LoginData, loginSchema } from "../../schema/LoginSchema";

export const LoginPage = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <>
      <HeaderLoggedOut />
      <StyledLoginPage>
        <StyledLoginForm onSubmit={handleSubmit(userLogin)}>
          <h2>Login</h2>
          <Input
            label={"Email"}
            type={"email"}
            placeholder={"Digitar email"}
            register={register("email")}
            error={errors.email}
          />

          <Input
            label={"Senha"}
            type={"password"}
            placeholder={"Digitar senha"}
            register={register("password")}
            error={errors.password}
          />
          <button type="button">Esqueci minha senha</button>

          <button type="submit">Entrar</button>
          <h4>Ainda não possui conta?</h4>
          <Link to="/register">Cadastrar</Link>
        </StyledLoginForm>
      </StyledLoginPage>
      <Footer />
    </>
  );
};
