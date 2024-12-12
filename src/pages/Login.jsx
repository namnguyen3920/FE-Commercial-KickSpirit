import React, { useState, useEffect } from "react";
import { SecondaryHeader } from "../components";
import { SignUpForm, LoginForm } from "../components/login-form";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="max-w-screen-xl flex flex-wrap flex-col h-screen justify-between mx-auto p-4 items-center">
      <SecondaryHeader />

      {isLogin ? (
        <LoginForm isLogin={isLogin} setIsLogin={setIsLogin} />
      ) : (
        <SignUpForm isLogin={isLogin} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default React.memo(Login);
