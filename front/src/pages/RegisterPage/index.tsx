import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledDivOne, StyledLRegisterPage, StyledRegisterForm } from "./style";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IRegisterFormValues } from "../../context/UserContext/@types";
import { UserContext } from "../../context/UserContext/UserContext";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormValues>();
  const { userRegister } = useContext(UserContext);

  const submit: SubmitHandler<IRegisterFormValues> = (formData) => {
    userRegister(formData);
  };

  const phoneMask = (value: string) => {
    if (!value) return "";
    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})(\d)/, "($1) $2");
    value = value.replace(/(\d)(\d{4})$/, "$1-$2");

    return value;
  };

  return (
    <>
      <HeaderLoggedOut />
      <StyledLRegisterPage>
        <StyledRegisterForm onSubmit={handleSubmit(submit)}>
          <h2>Cadastro</h2>
          <h5>Informações pessoais</h5>
          <Input
            label="Nome"
            type="text"
            register={register("name")}
            placeholder="Ex: Samuel Leão"
            error={errors.name}
          />
          <Input
            label="Email"
            type="email"
            register={register("email")}
            placeholder="Ex: samuel@kenzie.com.br"
            error={errors.email}
          />
          <Input
            label="CPF"
            type="text"
            register={register("name")}
            placeholder="000.000.000-00"
            error={errors.email}
          />
          <Input
            label="Celular"
            type="tel"
            register={register("email")}
            placeholder="(DD) 90000-0000"
            onChange={(e) => (e.target.value = phoneMask(e.target.value))}
            maxLength={15}
            error={errors.email}
          />
          <Input
            label="Data de nascimento"
            type="date"
            register={register("email")}
            placeholder="00/00/00"
            error={errors.email}
          />

          <Input
            label="Descrição"
            type="textArea"
            register={register("email")}
            placeholder="Digitar descrição"
            className="Textarea"
            error={errors.email}
          />

          <h5>Infomações de endereço</h5>
          <Input
            label="CEP"
            type="text"
            register={register("email")}
            placeholder="00000.000"
            error={errors.email}
          />
          <StyledDivOne>
            <Input
              label="Estado"
              type="text"
              register={register("email")}
              placeholder="Digitar Estado"
              error={errors.email}
            />
            <Input
              label="Cidade"
              type="text"
              register={register("email")}
              placeholder="Digitar cidade"
              error={errors.email}
            />
          </StyledDivOne>
          <Input
            label="Rua"
            type="text"
            register={register("email")}
            placeholder="Digitar rua"
            error={errors.email}
          />
          <StyledDivOne>
            <Input
              label="Número"
              type="text"
              register={register("email")}
              placeholder="Digitar número"
              error={errors.email}
            />
            <Input
              label="Complemento"
              type="text"
              register={register("email")}
              placeholder="Ex: apart 307"
              error={errors.email}
            />
          </StyledDivOne>

          <h5>Tipo de conta</h5>
          <div>
            <button type="button">Comprador</button>
            <button type="button">Anunciante</button>
          </div>
          <Input
            label="Senha"
            type="password"
            register={register("password")}
            placeholder="Digitar senha"
            error={errors.password}
          />
          <Input
            label="Confirmar Senha"
            type="password"
            register={register("password")}
            placeholder="Digitar senha"
            error={errors.password}
          />
          <button type="submit">Finalizar cadastro</button>
        </StyledRegisterForm>
      </StyledLRegisterPage>
      <Footer />
    </>
  );
};
