import { HeaderLoggedOut } from "../../components/HeaderLoggedOut";
import { Footer } from "../../components/Footer";
import { StyledDivOne, StyledLRegisterPage, StyledRegisterForm } from "./style";
import { Input } from "../../components/Input";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../context/UserContext/UserContext";
import { RegisterData } from "../../schema/RegisterSchema";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();
  const { userRegister } = useContext(UserContext);

  return (
    <>
      <HeaderLoggedOut />
      <StyledLRegisterPage>
        <StyledRegisterForm onSubmit={handleSubmit(userRegister)}>
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
            type="text"
            register={register("cellphone")}
            placeholder="(DDD) 90000-0000"
            error={errors.email}
          />
          <Input
            label="Data de nascimento"
            type="text"
            register={register("email")}
            placeholder="00/00/00"
            error={errors.email}
          />

          <Input
            label="Descrição"
            type="text"
            register={register("email")}
            placeholder="Digitar descrição"
            classname="Textarea"
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
          <div className="Type">
            <button type="button" className="Buyer">
              Comprador
            </button>
            <button type="button" className="Advertiser">
              Anunciante
            </button>
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
          <button type="submit" className="Finish">
            Finalizar cadastro
          </button>
        </StyledRegisterForm>
      </StyledLRegisterPage>
      <Footer />
    </>
  );
};
