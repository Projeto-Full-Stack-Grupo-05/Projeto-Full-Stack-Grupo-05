import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";
import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

export const Input = ({ label, register, error, ...rest }: IInputProps) => (
  <StyledFieldset>
    {label && <label htmlFor={register.name}>{label}</label>}
    {rest.type == "textArea" ? (
      <textarea {...register} className={rest.className} />
    ) : (
      <input id={register.name} {...register} {...rest} />
    )}
    {error && <p>{error.message}</p>}
  </StyledFieldset>
);




