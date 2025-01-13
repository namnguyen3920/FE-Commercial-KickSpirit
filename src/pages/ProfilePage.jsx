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
  const [user, setUser] = useState({});

  const userId = JSON.parse(localStorage.getItem("user")).user_id;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Profile");

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await UserRequest.getUserById(userId);
        setUser(response);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const renderContent = () => {
    switch (selectedCategory) {
      case "Profile":
        return <Profile user={user} />;
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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar onSelectCategory={setSelectedCategory} />
      <div className="w-full bg-white flex flex-col items-center">
        {renderContent()}
      </div>
    </div>
  );
};

export default React.memo(ProfilePage);
