import Link from "next/link";
import authUserSession from "@/libs/auth-libs";
const UserActionButton = async () => {
  const user = await authUserSession();

  const label = user ? "Sign out" : "Sign in";
  const actionURL = user ? "/api/auth/signout" : "/api/auth/signin";

  return (
    <div className="flex justify-between gap-2">
      {user ? <Link href={"/users/dashboard"}>Dashboard</Link> : null}
      <Link href={actionURL} className="">
        {label}
      </Link>
    </div>
  );
};

export default UserActionButton;
