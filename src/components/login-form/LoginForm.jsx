import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { useAuthLogic } from "../../logic_handler/LoginPageLogic";
import { errorState } from "../../recoil/atoms/errorAtoms";

const LoginForm = ({ isLogin, setIsLogin }) => {
  const [error, setError] = useRecoilState(errorState);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const { handleLoginSubmit } = useAuthLogic({
    formData,
    isLogin,
    setIsLogin,
    error,
    setError,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Input = ({ type, id, name, value, onChange }) => {
    return (
      <input
        required
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
      />
    );
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center pt-12">
      <div className="flex items-center min-h-screen p-4s lg:justify-center">
        <div className="flex flex-col border overflow-hidden bg-white rounded-md shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="/">Kickspirit</a>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Need an account?</span>
              <button
                className="underline"
                onClick={() => {
                  setIsLogin(false);
                  setError(null);
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Account Login
            </h3>
            {error && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded p-4 mb-4 text-center">
                {error}
              </div>
            )}
            <form
              onSubmit={handleLoginSubmit}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  User name
                </label>
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-blue-600 hover:underline focus:text-blue-800"
                  >
                    Forgot Password?
                  </a>
                </div>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Log in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
