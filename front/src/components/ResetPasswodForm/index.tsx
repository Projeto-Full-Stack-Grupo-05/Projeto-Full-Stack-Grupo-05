import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResetPasswordData,
  resetPasswordSchema,
} from "../../schema/LoginSchema";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";
import { DivContainer, FormContainer } from "./styled";

interface ResetPasswordFormProps {
  token: string;
}

const ResetPasswordForm = ({ token }: ResetPasswordFormProps) => {
  const { resetPassword } = useContext(UserContext);
  const { register, handleSubmit } = useForm<ResetPasswordData>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onFormSubmit = (formData: ResetPasswordData) => {
    resetPassword(formData, token);
  };

  return (
    <DivContainer>
      <h2>Recuperação de senha</h2>
      <FormContainer onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email">Nova senha</label>
          <div>
            <input
              type="password"
              placeholder="Sua nova senha"
              {...register("password")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password">Confirmação da senha</label>
          <div>
            <input
              type="password"
              placeholder="Confirmação da senha"
              {...register("passwordConfirm")}
            />
          </div>
        </div>
        <div>
          <button type="submit">Atualizar senha</button>
        </div>
      </FormContainer>
    </DivContainer>
  );
};

export default ResetPasswordForm;
