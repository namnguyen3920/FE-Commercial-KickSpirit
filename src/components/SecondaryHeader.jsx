import React from "react";

const SecondaryHeader = () => {
  return (
    <div class="fixed bg-header-color w-full z-20 top-0 start-0 border-b items-center px-9 py-5 border-gray-200 dark:bg-gray-900">
      <a href="/" class="flex items-center justify-center space-x-3">
        <img
          src="https://flowbite.com/docs/images/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
          Kickspirit
        </span>
      </a>
    </div>
  );
};

export default React.memo(SecondaryHeader);
