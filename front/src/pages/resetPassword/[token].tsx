import React from "react";
import { useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswodForm";
import { MainContainer } from "./styled";

export const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();

  return (
    <MainContainer>
      <ResetPasswordForm token={token as string} />
    </MainContainer>
  );
};
