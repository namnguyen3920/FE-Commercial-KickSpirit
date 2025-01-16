import React from "react";

const ProceedToLoginModal = ({ isOpen, onClose, onProceedToLogin }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="text-center">
          <h2 className="text-xl font-bold text-red-600">⚠️ Login Required</h2>
          <p className="mt-2 text-gray-600">
            You must become a member to place an order.
          </p>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button
            onClick={onProceedToLogin}
            className="px-6 py-2 bg-blue-600 text-white rounded-md"
          >
            Proceed to Login
          </button>
          <button
            onClick={onClose}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-md"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProceedToLoginModal;
