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
    <main className="max-w-screen-md mx-auto px-4">
      <section className="grid grid-cols-2 gap-4">
        <div className="rounded-xl p-4 bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-400">
            <path fillRule="evenodd" d="M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z" clipRule="evenodd" />
          </svg>
          <h2 className="text-xl font-semibold mt-8">
            Applications
          </h2>
          <p>10 Passwords</p>
        </div>
        <div className="rounded-xl p-4 bg-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 text-gray-400">
            <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
          </svg>
          <h2 className="text-xl font-semibold mt-8">
            Web3 Wallet
          </h2>
          <p>10 Passwords</p>
        </div>

        {/* <aside className="p-4 max-w-max bg-gray-100 h-screen">
        <SearchBar onSearch={handleSearch} />
      </aside> */}
      </section>
      <PasswordList passwordItems={passwordList} />

    </main>

  );
}
