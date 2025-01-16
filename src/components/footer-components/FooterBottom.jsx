import React from "react";

const FooterBottom = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex flex-col items-center md:items-end text-sm text-gray-600">
          <div className="flex space-x-4 mb-2">
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Your Privacy Choices
            </a>
          </div>
          <div>©2025 Kickspirit. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterBottom);
