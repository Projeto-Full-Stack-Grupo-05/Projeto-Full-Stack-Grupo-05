import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SendEmailResetPasswordData,
  sendEmailResetPasswordSchema,
} from "../../schema/LoginSchema";
import { UserContext } from "../../context/UserContext/UserContext";
import { useContext } from "react";

export const SendEmailForm = () => {
  const { sendEmail } = useContext(UserContext);

  const { register, handleSubmit } = useForm<SendEmailResetPasswordData>({
    resolver: zodResolver(sendEmailResetPasswordSchema),
  });

  const onFormSubmit = (formData: SendEmailResetPasswordData) => {
    sendEmail(formData);
  };

  return (
    <div className="user-form-container">
      <form className="space-y-6 w-4/5" onSubmit={handleSubmit(onFormSubmit)}>
        <div>
          <label htmlFor="email" className="user-form-label">
            Informe um e-mail para a recuperação de senha
          </label>
          <div className="mt-4">
            <input
              type="email"
              placeholder="example@.com"
              className="user-form-input"
              {...register("email")}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="user-form-button">
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
