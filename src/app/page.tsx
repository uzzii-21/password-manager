"use client";
import PasswordList from "@/components/PasswordList";
import SearchBar from "@/components/SearchBar";

const passwordList = [
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
  {
    imageUrl:
      "https://1000logos.net/wp-content/uploads/2022/10/Amazon-Prime-Video-Icon.png",
    name: "Amazon Prime",
    email: "nothing@gmail.com",
    password: "<PASSWORD>",
  },
];
export default function Home() {
  const handleSearch = (query: string) => {
    // Implement your search logic here
    console.log("Searching for:", query);
  };

  return (
    <main>
      <aside className="p-4 w-[50%]">
        <SearchBar onSearch={handleSearch} />
        <div className="flex items-center bg-gray-300 py-1 px-4 rounded-xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            placeholder="Search..."
            className="w-full p-2 text-sm bg-transparent outline-none"
          />
        </div>
        <PasswordList passwordItems={passwordList} />
      </aside>
    </main>
  );
}
