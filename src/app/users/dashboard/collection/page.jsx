import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Dashboard/Header";

const Page = () => {
  return (
    <section className="mt-4 px-4 w-full">
      <Header title={"My Collection"} />
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 mt-2">
        <Link href={"/"} className="relative">
          <Image src={""} alt={""} width={350} height={350} className="w-full" />
          <div className="flex justify-center items-center absolute bottom-0 w-full bg-color-accent">
            <h5 className="md:text-xl text-sm text-center">Judul Anime: Judul anime</h5>
          </div>
        </Link>
        <Link href={"/"} className="relative">
          <Image src={""} alt={""} width={350} height={350} className="w-full" />
          <div className="flex justify-center items-center absolute bottom-0 w-full bg-color-accent">
            <h5 className="md:text-xl text-sm text-center">Judul Anime: Judul anime</h5>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Page;
