import React from "react";
import { RxCross2 } from "react-icons/rx";

// Define the props for the DeleteModal component
interface DeleteModalProps {
  onClose: () => void;
  onDelete: () => void;
}

// Define the DeleteModal component
const DeleteModal: React.FC<DeleteModalProps> = ({ onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center shadow-lg">
      <div className="bg-white p-3 rounded-lg shadow-lg">
        {/* Modal Header */}
        <div>
          <RxCross2
            className="text-xl ml-auto cursor-pointer"
            onClick={onClose}
          />
        </div>
        {/* Modal content container */}
        <div className="p-4">
          {/* Modal title */}
          <h2 className="text-xl mb-4">Are you sure you want to delete?</h2>
          {/* Action buttons container */}
          <div className="flex justify-end gap-4">
            {/* Cancel button */}
            <button
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
              onClick={onClose}
            >
              Cancel
            </button>
            {/* Delete button */}
            <button
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={onDelete}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
