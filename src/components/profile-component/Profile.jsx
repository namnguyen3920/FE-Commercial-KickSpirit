import React from "react";
import { useState, useEffect } from "react";
import { EditUserInfoModal } from "./Modal";

const Profile = ({ currentUser }) => {
  const [newUserName, setNewUserName] = useState({});
  const [showAddModal, setShowAddModal] = useState(false);
  console.log("currentUser", currentUser);
  //setNewUserName(currentUser);
  const user = currentUser;

  const toggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleSubmitData = () => {};
  // console.log(newUser)
  return (
    <div className="w-3/4 px-20 py-10 font-sans ">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-lg font-semibold">Personal Information</h2>
        <button
          type="button"
          id="createProductModalButton"
          onClick={toggleAddModal}
          className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
        >
          Edit
        </button>
      </div>

      {showAddModal && (
        <EditUserInfoModal
          isOpen={toggleAddModal}
          onClose={toggleAddModal}
          user={user}
        />
      )}

      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="font-medium">Name</span>
          <div className="space-x-5">
            <span className="text-gray-600">
              {user.first_name} {user.last_name}
            </span>
          </div>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Email Address</span>
          <span className="text-gray-600">{user.email}</span>
        </div>
        <div className="flex justify-between py-1">
          <span className="font-medium">Username</span>
          <span className="text-gray-600">{user.username}</span>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Profile);
