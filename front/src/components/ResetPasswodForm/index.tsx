import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ResetPasswordData,
  resetPasswordSchema,
} from "../../schema/LoginSchema";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";

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
    <div className="user-form-container">
      <p className="text-4xl mt-6 font-semibold">Recuperação de senha</p>
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email" className="user-form-label">
            Nova senha
          </label>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Sua nova senha"
              className="user-form-input"
              {...register("password")}
            />
          </div>
        </div>
        <div>
          <label htmlFor="password" className="user-form-label">
            Confirmação da senha
          </label>
          <div className="mt-2">
            <input
              type="password"
              placeholder="Confirmação da senha"
              className="user-form-input"
              {...register("passwordConfirm")}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="user-form-button">
            Atualizar senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
