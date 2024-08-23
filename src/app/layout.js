import { Orbitron } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Utilities/Navbar";
import ScrollToTop from "@/components/Utilities/ScrollToTop.js";

const orbitron = Orbitron({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${orbitron.className} bg-color-dark`}>
        <ScrollToTop />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
