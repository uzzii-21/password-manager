// import PasswordList from "@/components/PasswordList";
import RecentList from "@/components/RecentList";
import VaultCard from "@/components/VaultCard";
import { Icons } from "@/components/icons";
import dynamic from "next/dynamic";
const PasswordList = dynamic(() => import("@/components/PasswordList"), {
  loading: () => <p>Loading...</p>,
})
export const passwordList = [
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
export default async function Home() {
  return (
    <main className="container mt-20">
      <section className="grid grid-cols-2 gap-4 mb-6">
        <VaultCard icon={<Icons.key />} name="Applications" noOfPass={10} />
        <VaultCard icon={<Icons.web3 />} name="Web3 Wallet" noOfPass={10} />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Recently Used
        </h2>
        <RecentList />
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">
          Recently Added
        </h2>
        <PasswordList passwordItems={passwordList} />
      </section>
    </main>

  );
}
