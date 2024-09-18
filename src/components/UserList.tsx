import React from "react";
import { useDispatch, useSelector } from "react-redux";
import UserCard from "./UserCard";
import { Celebrity } from "../util/type";

const UserList = () => {
  // Retrieve the list of celebrities from the Redux store
  const celebrities = useSelector((store) => store.celebrities.celebrities);

  return (
    // Container for the list of UserCard components
    <div className="max-w-2xl m-auto flex flex-col gap-4 my-4">
      {celebrities.map((celebrity: Celebrity) => (
        <UserCard key={celebrity.id} celebrity={celebrity} />
      ))}
    </div>
  );
};

export default UserList;
