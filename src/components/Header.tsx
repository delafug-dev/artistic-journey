'use client';

import React, { useEffect } from 'react'
import Link from "next/link";
import headerStyles from "@/styles/header.module.css";
import { usePathname } from 'next/navigation';

export const Header = () => {

  const path = usePathname();
  console.log(path);

  return (
    <nav className={`${path === '/' ? 'left-1/2 z-10 absolute transform -translate-x-1/2' : ''} flex justify-center items-center`}>
      <ul className="flex flex-row items-center gap-24 mt-10 font-nav text-2xl text-white">
        <li>
          <Link href="/" className='block after:block relative after:absolute after:bg-white w-fit after:w-full after:h-[3px] after:contents[""] after:scale-x-0 after:hover:scale-x-100 after:origin-center after:transition after:duration-300'>
            Home
          </Link>
        </li>
        <li>
          <Link href="discover" className='block after:block relative after:absolute after:bg-white w-fit after:w-full after:h-[3px] after:contents[""] after:scale-x-0 after:hover:scale-x-100 after:origin-center after:transition after:duration-300'>
            Discover
          </Link>
        </li>
        <li>
          <Link href="gallery" className='block after:block relative after:absolute after:bg-white w-fit after:w-full after:h-[3px] after:contents[""] after:scale-x-0 after:hover:scale-x-100 after:origin-center after:transition after:duration-300'>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="artists" className='block after:block relative after:absolute after:bg-white w-fit after:w-full after:h-[3px] after:contents[""] after:scale-x-0 after:hover:scale-x-100 after:origin-center after:transition after:duration-300'>
            Artists
          </Link>
        </li>
      </ul>
    </nav>
  );
}
