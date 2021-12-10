import React, { useEffect } from "react";
import auth from "./auth";

const LoginPage = () => {
  const loginUser = async () => {
    await auth.login();
  };

  useEffect(() => {
    loginUser();
  }, []);
  return <div>Login Page</div>;
};

export default LoginPage;
