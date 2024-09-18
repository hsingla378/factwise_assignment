import React, { useState } from "react";
import { Celebrity } from "../util/type";

// Props interface for the EditModal component
interface EditModalProps {
  celebrity: Celebrity;
  onClose: () => void;
  onSave: (updatedUser: Celebrity) => void;
}

const EditModal: React.FC<EditModalProps> = ({
  celebrity,
  onClose,
  onSave,
}) => {
  // State to manage form data
  const [formData, setFormData] = useState({
    first: celebrity.first,
    last: celebrity.last,
    dob: celebrity.dob,
    gender: celebrity.gender,
    country: celebrity.country,
    description: celebrity.description,
  });

  // Handler for input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handler for save button click
  const handleSave = () => {
    onSave({ ...celebrity, ...formData });
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-xl mb-4">Edit Celebrity</h2>
        <div className="flex items-center gap-4">
          <div className="mb-4">
            <label className="block text-gray-700">First Name</label>
            <input
              name="first"
              value={formData.first}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Last Name</label>
            <input
              name="last"
              value={formData.last}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="mb-4">
            <label className="block text-gray-700">DOB</label>
            <input
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <input
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Country</label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded resize-none"
            rows={6}
          />
        </div>
        <div className="flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
