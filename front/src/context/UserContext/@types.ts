import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "../../schema/LoginSchema";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  description: string;
  profile: string;
  cellphone: string;
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  birthdate: string;
  userImg: string;
  cpf: string;
}

export interface IRegisterFormValues {
  name: string;
  email: string;
  password: string;
  description: string;
  profile: string;
  cellphone: string;
  address: {
    zip_code: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
  };
  birthdate: string;
  userImg: string;
  cpf: string;
  confirmPassword: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  sendEmail: (sendEmailResetPasswordData: SendEmailResetPasswordData) => void;
  resetPassword: (resetPasswordData: ResetPasswordData, token: string) => void;
  userLogOut: () => void;
  userMenuIsOpen: boolean;
  setUserMenuIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editProfileIsOpen: boolean;
  setEditProfileisOpen: React.Dispatch<React.SetStateAction<boolean>>;
  editAddressIsOpen: boolean;
  setEditAddressIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
