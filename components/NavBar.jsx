"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { IoBookmarks } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoTrendingUp } from "react-icons/io5";

const NavBar = () => {
  const { data: session } = useSession();
  console.log({ session });

  // TODO: update icons
  const navButtons = [
    {
      text: "Explore", //suggesting place
      icon: <IoTrendingUp size={28} />,
      url: "/",
    },
    {
      text: "Search", //search with filter
      icon: <IoSearch size={28} />,
      url: "/search",
    },
    {
      text: "Bookmark", //saved place/dish
      icon: <IoBookmarks size={28} />,
      url: "/bookmarks",
    },
    {
      text: session?.user ? "Profile" : "Sign In",
      icon: <AiOutlineUser size={28} />,
      url: "/sign-in", // return /profile if logged in
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navButtons.map((button, index) => (
          <Link
            href={button.url}
            key={index}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 group"
          >
            {button.icon}
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
              {button.text}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
