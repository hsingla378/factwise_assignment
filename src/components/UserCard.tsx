import React, { useMemo, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Celebrity } from "../util/type";

// Define the props interface for the UserCard component
interface UserCardProps {
  celebrity: Celebrity;
}

const UserCard: React.FC<UserCardProps> = ({ celebrity }) => {
  // Destructure the celebrity object using useMemo for memoization
  const { id, first, last, dob, gender, email, picture, country, description } =
    useMemo(() => celebrity, [celebrity]);

  // Combine first and last name
  const name = `${first} ${last}`;

  // State to manage the open/close state of the card
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-4 rounded-lg transition-all duration-500 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {/* Display the celebrity's picture */}
          <img
            src={picture}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            {/* Display the celebrity's name */}
            <h3 className="text-xl">{name}</h3>
          </div>
        </div>
        {/* Button to toggle the open/close state of the card */}
        <button
          onClick={(e) => {
            setIsOpen(!isOpen);
            e.stopPropagation();
          }}
          className="p-2 text-2xl rounded cursor-pointer"
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
          <div className="grid grid-cols-3">
            {/* Display the celebrity's age */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Age</span>
              <span>{dob}</span>
            </div>
            {/* Display the celebrity's gender */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Gender</span>
              <span className="capitalize">{gender}</span>
            </div>
            {/* Display the celebrity's country */}
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Country</span>
              <span>{country}</span>
            </div>
          </div>
          {/* Display the celebrity's description */}
          <div>
            <p className="text-gray-500">Description</p>
            <p>{description}</p>
          </div>
          {/* Edit and delete icons */}
          <div className="flex gap-4 justify-end text-2xl">
            <RiDeleteBin6Line className="text-red-500" />
            <MdOutlineEdit className="text-blue-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
