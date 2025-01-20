import React, { useState } from "react";
import { useAuthLogic } from "../../logic_handler/LoginPageLogic";
import { useRecoilState } from "recoil";
import { errorState } from "../../recoil/atoms/errorAtoms";

const Input = ({ type, id, name, value, onChange }) => {
  return (
    <input
      required
      tpye={type}
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      className="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
    />
  );
};

const SignupForm = ({ isLogin, setIsLogin }) => {
  const [error, setError] = useRecoilState(errorState);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    confirm_password: "",
    isAdmin: false,
  });

  const { handleSignupSubmit } = useAuthLogic({
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

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center pt-12">
      <div className="flex items-center min-h-screen p-4s lg:justify-center">
        <div className="flex flex-col border overflow-hidden bg-white rounded-md shadow-xl max md:flex-row md:flex-1 lg:max-w-screen-md">
          <div className="p-4 py-6 text-white bg-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
            <div className="my-3 text-4xl font-bold tracking-wider text-center">
              <a href="/">Kickspirit</a>
            </div>
            <p className="flex flex-col items-center justify-center mt-10 text-center">
              <span>Already have an account?</span>
              <button
                className="underline"
                onClick={() => {
                  setIsLogin(true);
                  setError(null);
                }}
              >
                Login
              </button>
            </p>
          </div>
          <div className="p-5 bg-white md:flex-1">
            <h3 className="my-4 text-2xl font-semibold text-gray-700">
              Register
            </h3>
            {error && (
              <div className="bg-red-100 text-red-700 border border-red-400 rounded p-4 mb-4 text-center">
                {error}
              </div>
            )}
            <form
              onSubmit={handleSignupSubmit}
              className="flex flex-col space-y-5"
            >
              <div className="flex flex-col space-y-1">
                <label
                  for="text"
                  className="text-sm font-semibold text-gray-500"
                >
                  First Name
                </label>
                <Input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  for="text"
                  className="text-sm font-semibold text-gray-500"
                >
                  Last Name
                </label>
                <Input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  for="text"
                  className="text-sm font-semibold text-gray-500"
                >
                  Username
                </label>
                <Input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <label
                  for="email"
                  className="text-sm font-semibold text-gray-500"
                >
                  Email address
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
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
              <div className="flex flex-col space-y-1">
                <div className="flex items-center justify-between">
                  <label
                    for="password"
                    className="text-sm font-semibold text-gray-500"
                  >
                    Confirmation Password
                  </label>
                </div>
                <input
                  type="password"
                  id="confirm_password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  class="px-4 py-2 transition duration-300 border border-gray-300 rounded focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 text-lg font-semibold text-white transition-colors duration-300 bg-blue-500 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-blue-200 focus:ring-4"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SignupForm);
