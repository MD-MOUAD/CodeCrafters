import React from "react";
import { Menu } from "lucide-react";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Header() {
  const navLinks = [
    { name: "home", href: "/" },
    { name: "blogs", href: "/blogs" },
    { name: "our story", href: "/our-story" },
    { name: "about", href: "/about" },
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">BlogSpace</h1>
          </div>

          <nav className="hidden space-x-8 md:flex">
            {navLinks.map((link) => {
              return (
                <Link
                  href={link.href}
                  key={link.href}
                  className="capitalize text-gray-700 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center space-x-4">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    avatarBox: "h-10 w-10",
                  },
                  variables: {
                    colorPrimary: "#ff7000",
                  },
                }}
              />
            </SignedIn>
            <SignedOut>
              <div className="flex gap-3">
                <Button
                  size={"sm"}
                  variant="outline"
                  className="hidden md:flex"
                >
                  <Link href="sign-in">Sign in</Link>
                </Button>
                <Button>
                  <Link href="sign-up">Sign up</Link>
                </Button>
              </div>
            </SignedOut>
            <button className="rounded-full p-2 hover:bg-gray-100 md:hidden">
              <Menu className="size-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
