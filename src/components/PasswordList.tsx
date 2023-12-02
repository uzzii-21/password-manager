"use client";
import React from "react";

interface PasswordItem {
  name: string;
  imageUrl: string;
  email: string;
  password: string;
}

interface PasswordListProps {
  passwordItems: PasswordItem[];
}

const PasswordList: React.FC<PasswordListProps> = ({ passwordItems }) => {
  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText("password");
      console.log("Password copied to clipboard!");
    } catch (err) {
      console.error("Unable to copy password", err);
    }
  };

  return (
    <ul className="space-y-2">
      {passwordItems.map((item) => (
        <li
          key={item.name}
          className="flex items-center gap-4 bg-gray-300 p-2 rounded-xl"
        >
          <img
            src={item.imageUrl}
            alt={`${item.name} logo`}
            width="50"
            height="50"
            className="w-[50px] h-[50px] object-cover rounded-lg"
          />

          <div>
            <h2 className="text-sm font-semibold">{item.name}</h2>
            <p className="text-xs">{item.email}</p>
            <div className="flex items-center gap-2">
              <p className="text-xs">••••••••</p>
            </div>
          </div>
          <button onClick={copyPassword}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
              <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default PasswordList;
