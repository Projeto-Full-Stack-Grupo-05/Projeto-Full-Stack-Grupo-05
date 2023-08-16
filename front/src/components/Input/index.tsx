import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";

interface IInputProps {
  label: string;
  type: "text" | "email" | "password";
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  error?: FieldError;
}

export const Input = ({
  label,
  type,
  register,
  error,
  placeholder,
}: IInputProps) => (
  <StyledFieldset>
    {label && <label htmlFor={register.name}>{label}</label>}
    <input
      type={type}
      id={register.name}
      placeholder={placeholder}
      {...register}
    />
    {error && <p>{error.message}</p>}
  </StyledFieldset>
);
