import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Deve ser um e-mail"),
  password: z.string().nonempty("Senha é obrigatória"),
});

export const sendEmailResetPasswordSchema = loginSchema.omit({
  password: true,
});

export const resetPasswordSchema = loginSchema
  .omit({
    name: true,
    email: true,
  })
  .extend({
    passwordConfirm: z.string().min(1, "A confirmação de senha é obrigatória"),
  })
  .refine(({ password, passwordConfirm }) => password === passwordConfirm, {
    message: "As senhas precisam corresponderem",
    path: ["passwordConfirm"],
  });

export type LoginData = z.infer<typeof loginSchema>;
export type ResetPasswordData = z.infer<typeof resetPasswordSchema>;
export type SendEmailResetPasswordData = z.infer<
  typeof sendEmailResetPasswordSchema
>;
