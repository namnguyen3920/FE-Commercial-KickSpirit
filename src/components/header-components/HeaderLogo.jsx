import React from "react";
import { useRecoilState } from "recoil";
import { searchProductState } from "../../recoil/atoms/productAtoms";
import {
  UserCircleIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const HeaderLogo = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchProductState);
  const isLogedin = localStorage.getItem("user");
  const handleInputSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  console.log("Current searchQuery:", searchQuery);
  console.log("Is logedin: ", isLogedin);
  return (
    <div className="w-full flex justify-center items-center py-8 mx-2 p-10">
      <div className="flex lg:w-full md:order-2 md:px-10">
        <div className="relative w-full hidden md:block">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            value={searchQuery}
            onChange={handleInputSearchChange}
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search..."
          />
        </div>
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </div>
      <a href="/" className="flex items-center space-x-3">
        <img
          src="https://res.cloudinary.com/dfowalm4d/image/upload/v1736964871/logo_yhxhg0.png"
          className="h-8"
          alt="Kickspirit Logo"
        />
        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Kickspirit
        </span>
      </a>
      <div
        className="justify-between hidden lg:flex lg:w-auto lg:order-2"
        id="navbar-search"
      >
        <div className="relative items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <div className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500">
            <a href="#" aria-current="page">
              Home
            </a>
          </div>
          <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <a href="#">About</a>
          </div>
          <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
            <a href="#">Services</a>
          </div>
          {isLogedin ? <ProfileBtn /> : <LoginSignUpBtn />}
        </div>
      </div>
      <button
        data-collapse-toggle="navbar-search"
        type="button"
        className="sm:order-3 inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-search"
        aria-expanded="false"
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
    </div>
  );
};

const LoginSignUpBtn = () => {
  return (
    <div className="relative items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <div className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <a
          href="/login"
          className="flex h-[50px] w-40 items-center justify-center overflow-hidden bg-white text-black shadow-2xl border "
        >
          <span className="relative z-10">Log In</span>
        </a>
      </div>
      <div>
        <a
          href="#"
          className="relative flex h-[50px] w-40 items-center justify-center overflow-hidden bg-gray-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-main-color before:duration-500 before:ease-out hover:shadow-orange-600 hover:before:h-56 hover:before:w-56"
        >
          <span className="relative z-10">Sign Up</span>
        </a>
      </div>
    </div>
  );
};

const ProfileBtn = () => {
  const handleLogoutClick = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const isAdmin = user ? user.isAdmin === 1 : false;
  return (
    <div className="relative items-center flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <div className="group relative cursor-pointer block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">
        <a href="#" className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </a>
        <div className="invisible absolute right-0 top-full z-50 flex w-40 flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
          <a
            href="/profile"
            class="my-2 flex border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          >
            <UserCircleIcon className="w-6 h-6 mr-2" />
            Profile
          </a>
          {isAdmin && (
            <a
              href="/admin"
              class="my-2 flex border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
            >
              Admin
            </a>
          )}

          <a
            href=""
            class="my-2 flex border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          >
            <BanknotesIcon className="w-6 h-6 mr-2" />
            <span>Buying</span>
          </a>

          <a
            href=""
            class="my-2 flex border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          >
            <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2" />
            Selling
          </a>

          <a
            href=""
            class="my-2 flex border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2"
          >
            <Cog8ToothIcon className="w-6 h-6 mr-2" />
            Settings
          </a>

          <button
            onClick={handleLogoutClick}
            class="my-2 block border-b border-gray-100 py-1 font-semibold text-red-500 hover:text-red-900 md:mx-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderLogo;
