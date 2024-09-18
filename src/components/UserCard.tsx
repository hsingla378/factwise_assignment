import React, { useMemo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Celebrity } from "../util/type";
import { useDispatch } from "react-redux";
import { deleteCelebrity, editCelebrity } from "../util/celebritiesSlice";
import toast from "react-hot-toast";
import { calculateAge } from "../util/constant";
import DeleteModal from "./DeleteModal";

// Define the props interface for the UserCard component
interface UserCardProps {
  celebrity: Celebrity;
}

const UserCard: React.FC<UserCardProps> = ({ celebrity }) => {
  // Destructure the celebrity object using useMemo for memoization
  const { id, first, last, dob, gender, email, picture, country, description } =
    useMemo(() => celebrity, [celebrity]);

  const dispatch = useDispatch();

  // State to manage the open/close state of the card
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [formData, setFormData] = useState({
    first,
    last,
    dob,
    gender,
    country,
    description,
  });

  // Calculate age from DOB
  const age = useMemo(() => calculateAge(dob), [dob]);

  const handleCardOpen = () => {
    setIsOpen(!isOpen);
    setIsEditing(false);
  };

  // Function to handle the deletion of a celebrity
  const handleDelete = () => {
    dispatch(deleteCelebrity(id));
    toast.success("Celebrity deleted successfully");
    setShowDeleteModal(false);
  };

  // Function to handle input changes in edit mode
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to save the updated details
  const handleSave = () => {
    dispatch(editCelebrity({ id, updatedCelebrity: formData }));
    toast.success("Celebrity data updated successfully");
    setIsEditing(false); // Exit editing mode after save
  };

  // Function to cancel editing
  const handleCancel = () => {
    // Reset form data to the original values and exit editing mode
    setFormData({ first, last, dob, gender, country, description });
    setIsEditing(false);
  };

  // Function to show the delete confirmation modal
  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
  };

  // Function to close the delete confirmation modal
  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className="border p-4 rounded-lg transition-all duration-500 shadow-md">
      {/* Render the delete confirmation modal if showDeleteModal is true */}
      {showDeleteModal && (
        <DeleteModal onClose={handleCloseDeleteModal} onDelete={handleDelete} />
      )}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Display the celebrity's picture */}
          <img
            src={picture}
            alt={`${first} ${last}`}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            {/* Display the celebrity's name */}
            {!isEditing ? (
              <h3 className="text-xl">{`${formData.first} ${formData.last}`}</h3>
            ) : (
              <div className="flex gap-2">
                <input
                  name="first"
                  value={formData.first}
                  onChange={handleChange}
                  className="border rounded p-1"
                />
                <input
                  name="last"
                  value={formData.last}
                  onChange={handleChange}
                  className="border rounded p-1"
                />
              </div>
            )}
            <p className="text-gray-500">{email}</p>
          </div>
        </div>
        {/* Button to toggle the open/close state of the card */}
        <button
          onClick={handleCardOpen}
          className="p-2 text-xl rounded cursor-pointer"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      {/* Collapsible section */}
      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-6 flex flex-col gap-4">
          <div className="grid grid-cols-3 gap-2">
            {/* Display or edit the DOB */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Age</span>
              {!isEditing ? (
                <span>{age} Years</span>
              ) : (
                <input
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="border rounded p-1"
                />
              )}
            </div>

            {/* Display or edit the Gender */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Gender</span>
              {!isEditing ? (
                <span className="capitalize">{formData.gender}</span>
              ) : (
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="border rounded p-1"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              )}
            </div>

            {/* Display or edit the Country */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Country</span>
              {!isEditing ? (
                <span>{formData.country}</span>
              ) : (
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="border rounded p-1"
                />
              )}
            </div>
          </div>

          {/* Display or edit the Description */}
          <div>
            <p className="text-gray-500">Description</p>
            {!isEditing ? (
              <p>{formData.description}</p>
            ) : (
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border rounded p-2"
                rows={6}
              />
            )}
          </div>

          {/* Edit, Save, Cancel, and Delete icons */}
          {!isEditing ? (
            <div className="flex gap-3 justify-end text-xl">
              <RiDeleteBin6Line
                className="text-red-500 cursor-pointer"
                onClick={handleShowDeleteModal}
              />
              <MdOutlineEdit
                className="text-blue-500 cursor-pointer"
                onClick={() => setIsEditing(true)}
              />
            </div>
          ) : (
            <div className="text-base flex gap-3 justify-end">
              <button
                onClick={handleSave}
                className="px-4 py-1 bg-blue-600 text-white rounded"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="px-4 py-1 bg-gray-300 rounded"
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
