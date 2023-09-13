import "../globals.css";
import Link from "next/link";
import React from "react";
import { Breed, Home, Search, Web } from "./icons/Icons";

const Navigation = () => {
  const links = [
    { label: <Home className="h-8 w-8" />, route: "/" },
    { label: <Breed className="h-8 w-8" />, route: "/kittens" },
    { label: <Web className="h-8 w-8" />, route: "/axiosKittens" },
    { label: <Search className="h-8 w-8" />, route: "/search" },
  ];

  return (
    <>
      <header className="p-1 border rounded">
        <nav>
          <div className="flex flex-row justify-between">
            {links.map(({ label, route }) => (
              <div
                className="h-8 w-[25%] flex flex-row justify-center"
                key={route}
              >
                <Link href={route}>{label}</Link>
              </div>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
