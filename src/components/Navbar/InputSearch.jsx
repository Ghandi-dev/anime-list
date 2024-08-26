"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = (event) => {
    const keyword = searchRef.current.value;
    if (!keyword || keyword.trim() == "") return;
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input placeholder="search" className="w-full rounded-md p-2" ref={searchRef} onKeyDown={handleSearch} />
      <button onClick={handleSearch}>
        <MagnifyingGlass size={24} className="absolute top-2 end-1" />
      </button>
    </div>
  );
};

export default InputSearch;
