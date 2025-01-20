import ModalLayout from "../../../Admin/components/Modal/ModalLayout";
import React from "react";
import { useState, useEffect } from "react";
import { UserRequest } from "../../../caller/api-requestor";

function EditUserInfoModal({ isOpen, onClose, user }) {
  const [userUpdate, setUserUpdate] = useState(user);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserUpdate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await UserRequest.modifyUserInfo(
        userUpdate,
        userUpdate.user_id
      );
      if (response.message === "User updated") {
        const currentUser = JSON.parse(localStorage.getItem("user"));

        const updatedUser = { ...currentUser, ...userUpdate };
        localStorage.setItem("user", JSON.stringify(updatedUser));
        console.log("User updated in localStorage:", updatedUser);

        // Reload lại trang
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };
  return (
    <>
      <ModalLayout title="Edit profile" isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit}>
          <div class="flex flex-col mb-4">
            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                name="first_name"
                id="name"
                value={userUpdate.first_name}
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                onChange={handleChange}
                required=""
              />
            </div>

            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                id="name"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={userUpdate.last_name}
                onChange={handleChange}
                required=""
              />
            </div>

            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="name"
                class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={userUpdate.email}
                disabled
              />
            </div>

            <div>
              <label
                for="name"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                name="name"
                id="name"
                class="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                value={userUpdate.username}
                disabled
              />
            </div>
          </div>

          <button
            type="submit"
            class="text-white inline-flex items-center bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Save
          </button>
        </form>
      </ModalLayout>
    </>
  );
}

export default EditUserInfoModal;
