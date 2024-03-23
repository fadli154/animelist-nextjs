"use client";

import InputSearch from "@/components/Elements/InputSearch";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-blue-700 shadow-sm">
      <div className="container flex flex-col items-center w-full py-4 sm:flex-row sm:justify-between">
        <Link href="/" className="mb-2 text-lg font-bold text-white sm:mb-0">
          DilAnimeList
        </Link>
        <InputSearch />
      </div>
    </div>
  );
};

export default Navbar;
