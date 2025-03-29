import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | CodeCrafter",
};

const Home = () => {
  // const { userId } = auth();
  const navLinks = [
    { link: "home", href: "/" },
    { link: "about", href: "/about" },
    { link: "contact", href: "/contact" },
    { link: "footer", href: "/footer" },
  ];

  return (
    <div className="h-screen">
      <nav className="flex justify-between px-6 py-2">
        <div className="flex gap-3">
          {navLinks.map((item) => {
            return <Link href={item.href}>{item.link}</Link>;
          })}
        </div>
        <UserButton />
      </nav>
    </div>
  );
};
export default Home;
