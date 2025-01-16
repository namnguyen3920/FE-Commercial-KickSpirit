import React from "react";

const SecondaryHeader = () => {
  return (
    <div class="fixed bg-header-color w-full z-20 top-0 start-0 border-b items-center px-9 py-5 border-gray-200 dark:bg-gray-900">
      <a href="/" class="flex items-center justify-center space-x-3">
        <img
          src="https://res.cloudinary.com/dfowalm4d/image/upload/v1736964871/logo_yhxhg0.png"
          class="h-16"
          alt="Kickspirit Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Kickspirit
        </span>
      </a>
    </div>
  );
};

export default React.memo(SecondaryHeader);
