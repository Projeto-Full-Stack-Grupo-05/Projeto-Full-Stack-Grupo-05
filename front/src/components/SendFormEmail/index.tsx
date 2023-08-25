import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link } from "react-router-dom";
import {
  SendEmailResetPasswordData,
  sendEmailResetPasswordSchema,
} from "../../schema/LoginSchema";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { DivContainer, FormContainer } from "./style";

export const SendEmailForm = () => {
  const { sendEmail } = useContext(UserContext);

  const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
    resolver: zodResolver(sendEmailResetPasswordSchema),
  });

  const onFormSubmit = (formData: SendEmailResetPasswordData) => {
    sendEmail(formData);
  };

  return (
    <DivContainer>
      <h2>Esqueceu sua senha?</h2>
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="email">
          Informe seu e-mail para a recuperação de senha
        </label>
        <input type="email" placeholder="example@.com" {...register("email")} />

        <button type="submit">Enviar</button>
      </FormContainer>

      <span>
        Voltar para <Link to="/login">login</Link>
      </span>
    </DivContainer>
  );
};
