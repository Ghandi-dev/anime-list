"use client";
import { Rocket } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const isBrowser = () => typeof window !== "undefined"; //The approach recommended by Next.js

  const handleScroll = () => {
    // Show the button when the user scrolls down
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button
      className={`flex flex-col fixed bottom-0 right-0 px-2 py-2 mr-6 mb-[71px] z-50 items-center md:text-md text-sm gap-2 scrollToTopButton ${
        isVisible ? "visible" : ""
      }`}
      onClick={scrollToTop}
    >
      <Rocket size={32} className="inline-block bg-color-accent rounded-lg" />
      <h2 className="text-color-accent font-bold">BACK TO TOP</h2>
    </button>
  );
};

export default ScrollToTop;
