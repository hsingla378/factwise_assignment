import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineEdit } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

interface UserCardProps {
  id: number;
  name: string;
  age: string;
  gender: string;
  email: string;
  country: string;
  description: string;
  picture: string;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  age,
  gender,
  country,
  description,
  picture,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border p-4 rounded-lg shadow-sm transition-all duration-500">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={picture}
            alt={name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h3 className="text-xl">{name}</h3>
          </div>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-2xl rounded cursor-pointer"
        >
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="mt-6 flex flex-col gap-4">
          <div className="grid grid-cols-3">
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Age</span>
              <span>{age}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Gender</span>
              <span>{gender}</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-gray-500">Country</span>
              <span>{country}</span>
            </div>
          </div>
          <div>
            <p className="text-gray-500">Description</p>
            <p>{description}</p>
          </div>
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
