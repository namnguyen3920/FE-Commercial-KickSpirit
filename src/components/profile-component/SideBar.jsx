import React from "react";
import {
  UserCircleIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";

const Sidebar = ({ onSelectCategory }) => {
  return (
    <div className="w-1/4 h-screen bg-gray-50 p-6 border-r border-gray-200">
      <h2 className="text-2xl font-semibold mb-6 text-center">Profile</h2>
      <ul className="space-y-4">
        <li
          onClick={() => onSelectCategory("Profile")}
          className="flex flex-row justify-center items-center hover:bg-gray-200 cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <UserCircleIcon className="w-6 h-6 mr-2" />
          <div className="hidden md:block">Profile</div>
        </li>
        <li
          onClick={() => onSelectCategory("Buying")}
          className="flex flex-row justify-center items-cente hover:bg-gray-200 cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <BanknotesIcon className="w-6 h-6 mr-2" />
          <div className="hidden md:block">Buying</div>
        </li>
        <li
          onClick={() => onSelectCategory("Selling")}
          className="flex flex-row justify-center items-center hover:bg-gray-200 cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <ClipboardDocumentCheckIcon className="w-6 h-6 mr-2" />
          <div className="hidden md:block">Selling</div>
        </li>
        <li
          onClick={() => onSelectCategory("Favorites")}
          className="flex flex-row justify-center items-center hover:bg-gray-200 cursor-pointer hover:bg-profile-color py-5 px-2 space-x-2"
        >
          <Cog8ToothIcon className="w-6 h-6 mr-2" />
          <div className="hidden md:block">Setting</div>
        </li>
      </ul>
    </div>
  );
};

export default React.memo(Sidebar);
