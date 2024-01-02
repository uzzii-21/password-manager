"use client";
import { motion } from "framer-motion"

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

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemAnimate = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.ul variants={container} initial="hidden"
    animate="visible"  className="grid grid-cols-2 gap-4">
      {passwordItems.map((item) => (
        <motion.li
          variants={itemAnimate}
          key={item.name}
          className="flex items-center justify-between bg-gray-100 p-2 rounded-xl"
        >
          <div className="flex items-center gap-4">
            <img
              src={item.imageUrl}
              alt={`${item.name} logo`}
              width="50"
              height="50"
              className="w-[50px] h-[50px] object-cover rounded-lg"
            />

            <div>
              <h2 className="text-base font-semibold">{item.name}</h2>
              <p className="text-xs">{item.email}</p>
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
        </motion.li>
      ))}
    </motion.ul>
  );
};

export default PasswordList;
