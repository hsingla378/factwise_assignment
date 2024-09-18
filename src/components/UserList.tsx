import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaSearch } from "react-icons/fa"; // Importing the search icon
import UserCard from "./UserCard";
import { Celebrity } from "../util/type";

const UserList = () => {
  // Retrieve the list of celebrities from the Redux store
  const celebrities = useSelector(
    (store: any) => store.celebrities.celebrities
  );
  const [filteredCelebrities, setFilteredCelebrities] =
    useState<Celebrity[]>(celebrities);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to filter celebrities by search term
  const filterCelebrities = (term: string) => {
    if (term.trim() === "") {
      setFilteredCelebrities(celebrities);
    } else {
      setFilteredCelebrities(
        celebrities.filter((celebrity: Celebrity) =>
          `${celebrity.first} ${celebrity.last}`
            .toLowerCase()
            .includes(term.toLowerCase())
        )
      );
    }
  };

  // UseEffect for manual debouncing using setTimeout
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      filterCelebrities(searchTerm);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, celebrities]);

  return (
    <div className="max-w-2xl m-auto flex flex-col gap-4 my-4 p-4">
      {/* Search Bar with Icon */}
      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search celebrities..."
          className="p-2 pl-10 border rounded w-full"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Render filtered list of UserCards */}
      {filteredCelebrities.map((celebrity: Celebrity) => (
        <UserCard key={celebrity.id} celebrity={celebrity} />
      ))}
    </div>
  );
};

export default UserList;
