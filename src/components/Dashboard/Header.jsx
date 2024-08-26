"use client";
import { ArrowSquareLeft } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";

const Header = ({ title }) => {
  const router = useRouter();
  const handleBack = (event) => {
    event.preventDefault();
    router.back();
  };
  return (
    <div className="flex justify-between items-center">
      <button onClick={handleBack} className="text-color-accent">
        <ArrowSquareLeft size={32} weight="fill" />
      </button>
      <h1 className="text-2xl text-color-primary text-center">{title}</h1>
    </div>
  );
};

export default Header;
