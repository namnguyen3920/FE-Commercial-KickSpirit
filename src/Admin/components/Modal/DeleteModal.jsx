import React, { useEffect } from "react";
import ModalLayout from "./ModalLayout";

const DeleteModal = ({ isOpen, onClose, handleDelete }) => {
  return (
    <>
      <ModalLayout
        title="Delete Confirmaion"
        isOpen={isOpen}
        onClose={onClose}
        className=""
      >
        <svg
          className="justify-center items-center text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
          aria-hidden="true"
          fill="currentColor"
          viewbox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <p className="justify-center items-center mb-4 text-gray-500 dark:text-gray-300">
          Are you sure you want to delete this item?
        </p>
        <div className="flex justify-center items-center space-x-4">
          <button
            onClick={onClose}
            type="button"
            className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => {
              handleDelete();
              onClose();
            }}
            className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
          >
            Yes, I'm sure
          </button>
        </div>
      </ModalLayout>
      {/* <div className="fixed p-4 w-full max-w-2xl max-h-full">
        <div className="z-50 fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-5">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            
          </div>
        </div>
      </div> */}
    </>
  );
};

export default React.memo(DeleteModal);
