import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledFieldset } from "./style";

interface IInputProps {
  label: string;
  type: string;
  register: UseFormRegisterReturn<string>;
  placeholder: string;
  classname?: string;
  error?: FieldError;
}

export const Input = ({
  label,
  type,
  register,
  error,
  placeholder,
  classname,
}: IInputProps) => (
  <StyledFieldset>
    {label && <label htmlFor={register.name}>{label}</label>}
    <input
      type={type}
      id={register.name}
      placeholder={placeholder}
      {...register}
      className={classname}
    />
    {error && <p>{error.message}</p>}
  </StyledFieldset>
);
