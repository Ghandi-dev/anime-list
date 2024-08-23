"use client";

import { MagnifyingGlass } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${searchRef.current.value}`);
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
