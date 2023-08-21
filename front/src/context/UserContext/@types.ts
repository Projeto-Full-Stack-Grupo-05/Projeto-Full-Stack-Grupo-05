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
  userLogOut: () => void;
}
