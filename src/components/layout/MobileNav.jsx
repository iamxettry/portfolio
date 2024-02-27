'use client'
import Link from "next/link";
import { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";

const MobileNav = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="md:hidden">
       {
        toggle && (
            <div className="w-28 text-center absolute right-6 top-16 bg-slate-200 rounded-md py-4 shadow-sm shadow-gray-500">
            <ul className=" gap-2 font-semibold  flex flex-col">
              <Link href={""} className="border-b border-gray-400 py-1">
                Projects
              </Link>
              <Link href={""} className="border-b border-gray-400 py-1">
                About
              </Link>
              <Link href={""} className="border-b border-gray-400 py-1">
                Blog
              </Link>
              <Link href={""} className="border-b border-gray-400 py-1">
                Contact
              </Link>
            </ul>
          </div>
        )
       }
      </div>
      <RiMenu3Line className='md:hidden' onClick={()=>setToggle(!toggle)} />

    </>
  );
};

export default MobileNav;
