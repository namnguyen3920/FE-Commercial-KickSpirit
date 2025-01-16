import React, { useEffect, useState } from "react";

import {
  Buying,
  Setting,
  Profile,
  Selling,
  Sidebar,
} from "../components/profile-component";

import UserRequest from "../caller/api-requestor/UserRequest";

const ProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [selectedCategory, setSelectedCategory] = useState("Profile");

  const renderContent = () => {
    switch (selectedCategory) {
      case "Profile":
        return <Profile currentUser={user} />;
      case "Buying":
        return <Buying />;
      case "Selling":
        return <Selling />;
      case "Setting":
        return <Setting />;
      default:
        return <Profile />;
    }
  };
  return (
    <div className="flex h-screen">
      <Sidebar
        className="w-full h-full"
        onSelectCategory={setSelectedCategory}
      />
      <div className="w-full bg-white flex flex-col items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default React.memo(ProfilePage);
