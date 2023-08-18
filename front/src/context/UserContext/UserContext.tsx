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

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const id = localStorage.getItem("@USERID");
    if (token) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(response.data);
          navigate("/dashboard");
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
      const response = await api.post("/users", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);

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
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      navigate("/shop");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
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
        userLogOut,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
