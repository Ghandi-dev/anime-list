import Link from "next/link";
const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <h1 className="md:text-2xl text-md font-bold text-color-primary">{title}</h1>
      {linkHref && linkTitle ? (
        <Link href={linkHref} className="md:text-xl text-md underline text-color-primary hover:text-color-accent">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
