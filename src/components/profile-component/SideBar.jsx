import React from "react";

const Sidebar = ({ onSelectCategory }) => {
  return (
    <div className="w-1/7 bg-gray-100 p-6 h-screen">
      <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>
      <ul className="space-y-4">
        <li
          onClick={() => onSelectCategory("Profile")}
          className="flex flex-row justify-center items-center cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <img src="./profile.png" alt="profile icon" className="w-10 h-10 " />
          <div className="hidden md:block">Profile</div>
        </li>
        <li
          onClick={() => onSelectCategory("Buying")}
          className="flex flex-row justify-center items-center cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <img src="./buying.png" alt="profile icon" className="w-10 h-10" />
          <div className="hidden md:block">Buying</div>
        </li>
        <li
          onClick={() => onSelectCategory("Selling")}
          className="flex flex-row justify-center items-center cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <img src="./selling.png" alt="profile icon" className="w-10 h-10" />
          <div className="hidden md:block">Selling</div>
        </li>
        <li
          onClick={() => onSelectCategory("Favorites")}
          className="flex flex-row justify-center items-center cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <img src="./setting.png" alt="profile icon" className="w-10 h-10" />
          <div className="hidden md:block">Setting</div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
