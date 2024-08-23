import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

const Page = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center gap-4">
      <FileSearch size={64} className="text-color-accent"/>
      <div className="flex flex-col text-center">
        <h1 className="text-color-accent text-3xl font-bold">Not Found</h1>
        <Link href={"/"} className="hover:text-color-accent underline text-color-primary transition-all">
          Kembali
        </Link>
      </div>
    </div>
  );
};

export default Page;
