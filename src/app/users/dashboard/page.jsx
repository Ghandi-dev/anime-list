import authUserSession from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const Page = async () => {
  const user = await authUserSession();

  return (
    <div className="text-color-primary mt-8 flex flex-col justify-center items-center gap-4">
      <h3 className="text-2xl font-bold">Hi, {user?.name}</h3>
      <Image src={user?.image} alt={user?.name} width={300} height={300} className="rounded-xl" />
      <div className="flex gap-2 py-4">
        <Link href={"/users/dashboard/collection"} className="bg-color-accent px-4 py-2 rounded text-color-dark font-bold">
          My Collection
        </Link>
        <Link href={"/users/dashboard/comment"} className="bg-color-accent px-4 py-2 rounded text-color-dark font-bold">
          My Comment
        </Link>
      </div>
    </div>
  );
};
export default Page;
