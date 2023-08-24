import React from "react";
import { useParams } from "react-router-dom";
import ResetPasswordForm from "../../components/ResetPasswodForm";

export const ResetPassword: React.FC = () => {
  const { token } = useParams<{ token: string }>();

  return (
    <main className="body min-h-screen flex items-center justify-center">
      <ResetPasswordForm token={token as string} />
    </main>
  );
};
