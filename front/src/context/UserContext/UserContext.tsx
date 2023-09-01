import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IUser,
  IRegisterFormValues,
  ILoginFormValues,
  IDefaultProviderProps,
  IUserContext,
} from "./@types";
import { api } from "../../services/api";
import {
  ResetPasswordData,
  SendEmailResetPasswordData,
} from "../../schema/LoginSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const [editProfileIsOpen, setEditProfileisOpen] = useState(false);
  const [editAddressIsOpen, setEditAddressIsOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/user/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/admin");
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };
      userAutoLogin();
    }
  }, [navigate]);

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/user", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);

      navigate("/login");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    try {
      setLoading(true);
      const response = await api.post("/login", formData);
      localStorage.setItem("@TOKEN", response.data.token);
      localStorage.setItem("@USERID", response.data.user.id);
      localStorage.setItem("@USERNAME", response.data.user.name);
      localStorage.setItem("@USERDESC", response.data.user.description);
      localStorage.setItem("@USERANUNCIANTE", response.data.user.profile);

      setUser(response.data.user);
      navigate("/admin");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = (
    sendEmailResetPasswordData: SendEmailResetPasswordData
  ) => {
    api
      .post("/resetPassword", sendEmailResetPasswordData)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetPassword = (
    resetPasswordData: ResetPasswordData,
    token: string
  ) => {
    api
      .patch(`/resetPassword/${token}`, {
        password: resetPasswordData.password,
      })

      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        user,
        userRegister,
        userLogin,
        sendEmail,
        resetPassword,
        userLogOut,
        userMenuIsOpen,
        setUserMenuIsOpen,
        editProfileIsOpen,
        setEditProfileisOpen,
        editAddressIsOpen,
        setEditAddressIsOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
