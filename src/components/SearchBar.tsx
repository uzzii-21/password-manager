import React, { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  let debounceTimer: ReturnType<typeof setTimeout> | null = null;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Clear the previous timer
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    // Set a new timer for 500 milliseconds
    debounceTimer = setTimeout(() => {
      console.log(debounceTimer);
      // Call the onSearch function with the search query
      onSearch(value);
    }, 1000);
  };

  return (
    <div className="flex items-center bg-gray-300 py-1 px-4 rounded-xl mb-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <input
        placeholder="Search..."
        value={searchQuery}
        onChange={handleInputChange}
        className="w-full p-2 text-sm bg-transparent outline-none"
      />
    </div>
  );
};

export default SearchBar;
