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
              <div className="flex flex-col space-y-5">
                <span className="flex items-center justify-center space-x-2">
                  <span className="h-px bg-gray-400 w-14"></span>
                  <span className="font-normal text-gray-500">
                    or login with
                  </span>
                  <span className="h-px bg-gray-400 w-14"></span>
                </span>
                <div className="flex flex-col space-y-4">
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-gray-800 rounded-md group hover:bg-gray-800 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="w-6 h-6 text-gray-800 group-hover:text-white"
                        viewBox="0 0 24 24"
                        version="1.1"
                        aria-hidden="true"
                      >
                        <path
                          fill="evenodd"
                          d="M2.25 12c0-5.384 4.366-9.75 9.75-9.75a9.7 9.7 0 0 1 6.64 2.623a.75.75 0 0 1 .018 1.08l-2.545 2.545a.75.75 0 0 1-1.029.03A4.62 4.62 0 0 0 12 7.35a4.65 4.65 0 0 0 0 9.3a4.64 4.64 0 0 0 3.883-2.1H12a.75.75 0 0 1-.75-.75v-3.6a.75.75 0 0 1 .75-.75h8.825a.75.75 0 0 1 .736.604A10 10 0 0 1 21.75 12c0 5.384-4.366 9.75-9.75 9.75S2.25 17.384 2.25 12M12 3.75a8.25 8.25 0 1 0 8.185 7.2H12.75v2.1h4.336a.75.75 0 0 1 .707 1A6.148 6.148 0 0 1 5.85 12A6.15 6.15 0 0 1 12 5.85c1.313 0 2.527.415 3.524 1.116l1.499-1.5A8.2 8.2 0 0 0 12 3.75"
                        ></path>
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-gray-800 group-hover:text-white">
                      Google
                    </span>
                  </a>
                  <a
                    href="#"
                    className="flex items-center justify-center px-4 py-2 space-x-2 transition-colors duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                  >
                    <span>
                      <svg
                        className="text-blue-500 group-hover:text-white"
                        viewBox="0 0 256 256"
                        width="20"
                        height="20"
                        fill="currentColor"
                      >
                        {/* <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          ></path> */}
                        <path
                          fill="#1877F2"
                          d="M256 128C256 57.308 198.692 0 128 0S0 57.308 0 128c0 63.888 46.808 116.843 108 126.445V165H75.5v-37H108V99.8c0-32.08 19.11-49.8 48.348-49.8C170.352 50 185 52.5 185 52.5V84h-16.14C152.959 84 148 93.867 148 103.99V128h35.5l-5.675 37H148v89.445c61.192-9.602 108-62.556 108-126.445"
                        />
                        <path
                          fill="#FFF"
                          d="m177.825 165l5.675-37H148v-24.01C148 93.866 152.959 84 168.86 84H185V52.5S170.352 50 156.347 50C127.11 50 108 67.72 108 99.8V128H75.5v37H108v89.445A129 129 0 0 0 128 256a129 129 0 0 0 20-1.555V165z"
                        />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                      Facebook
                    </span>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(LoginForm);
