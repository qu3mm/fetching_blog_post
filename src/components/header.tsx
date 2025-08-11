"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
    const pathname = usePathname();
    console.log(pathname)
 
  return (
    <div>
      <header className="flex justify-center  p-4 border-b-1 border-gray-200 bg-white  sticky top-0 w-full ">
        <nav className="mt-2">
          <ul className="flex items space-x-4 text-sm font-medium text-gray-700">
            <li>
              <Link className={pathname == '/' ? "font-bold": ""} href="/">HOME</Link>
            </li>
            <li>
              <Link className={pathname == '/post' ? "font-bold": ""} href="/post">POST</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
