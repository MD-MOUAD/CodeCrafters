import React from 'react';
import { Menu } from 'lucide-react';
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from 'next/link';
import { Butterfly_Kids } from 'next/font/google';
import { Button } from './ui/button';

export default function Header() {
  const navLinks = [
    {name :"home",href:"/"},
    {name :"blogs",href:"/blogs"},
    {name :"our story",href:"/our-story"},
    {name :"about",href:"/about"},
  ]
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-gray-900">BlogSpace</h1>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => {
              return(
                <Link href={link.href} className="text-gray-700 hover:text-gray-900 capitalize">{link.name}</Link>
              )
            }
            )}
            
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
          <div className='flex gap-3'>
            <Button>
            <Link href="sign-in" >Sign in</Link>
     
            </Button>
            <Button >
            <Link href="sign-up" >Sign up</Link>
              
            </Button>
          </div>

        </SignedOut>
            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full">
              <Menu className="w-5 h-5 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}