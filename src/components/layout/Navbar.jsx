"use client"
import Link from "next/link";

import MobileNav from "./MobileNav";
import Avatar from "react-avatar";

const Navbar = () => {
  return (
    <section className=" border-b sticky top-0 bg-white/25 backdrop-blur-md z-50 ">
      <div className="flex justify-between items-center p-4 max-w-4xl mx-auto">
        <Link
          href={"/"}
          className="flex justify-center items-center gap-1 text-xl "
        >
          {/* <PiDiamondsFourFill className='rotate-45'/> */}
          {/* <Image
            src={"/profile.png"}
            width={100}
            height={100}
            alt="profile"
            className="w-8 h-8 rounded-full border"
          /> */}
          <Avatar name="Khim Chhetry"  round color="#af73d5" size="40" />
          <h1 className=" font-bold">Khim B. Chhetri</h1>
        </Link>
        <nav className="flex  gap-4 justify-center items-center">
          <ul className=" gap-8 font-semibold hidden md:flex ">
            {["Projects", "About", "Blog", "Contact"].map((item) => (
              <li
                key={`item-${item}`}
                className="flex flex-col justify-center items-center group relative"
              >
                <div className="w-2 h-2 rounded-full hidden group-hover:flex bg-blue-700 absolute -bottom-2 " />
                <Link href={`#${item}`}>{item}</Link>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center gap-2">
            <MobileNav />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Navbar;
