"use client";
import PasswordList from "@/components/PasswordList";
import SearchBar from "@/components/SearchBar";
import VaultCard from "@/components/VaultCard";
import { Icons } from "@/components/icons";

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
    <main className="container mt-16">
      <section className="grid grid-cols-2 gap-4 my-4">
        <VaultCard icon={<Icons.key />} name="Applications" noOfPass={10} />
        <VaultCard icon={<Icons.web3 />} name="Web3 Wallet" noOfPass={10} />
        {/* <aside className="p-4 max-w-max bg-gray-100 h-screen">
        <SearchBar onSearch={handleSearch} />
      </aside> */}

      </section>
      <h2 className="text-xl font-semibold mb-4">
        Recently Used
      </h2>
      <ul className="flex items-center gap-4 mb-4">
        {
          passwordList.map((item) => (
            <li key={item.name}>
            <img
                src={item.imageUrl}
                alt={`${item.name} logo`}
                width="80"
                height="80"
                className="w-[60px] h-[60px] object-cover rounded-lg"
              />
            </li>
          ))
        }
       
      </ul>
      <h2 className="text-xl font-semibold mb-4">
        Recently Added
      </h2>
      <PasswordList passwordItems={passwordList} />

    </main>

  );
}
