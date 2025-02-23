"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction, Suspense, useRef, useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navbarRef = useRef<HTMLDivElement>(null);
    
  return (
    <nav className={`${ isOpen ? "max-806:h-screen": "max-806:h-24" } relative flex items-center justify-center gap-14 text-lg py-4 pl-8 pr-14 mb-12 max-806:justify-between max-806:items-start max-806:shadow-md max-806:overflow-hidden max-806:bg-background transition-all duration-200`}>
        <Suspense>
          <NavbarLinks setIsOpen={setIsOpen} />
        </Suspense>

        <div ref={navbarRef} onClick={() => setIsOpen(!isOpen)} className=" max-806:order-6 hidden relative max-806:block max-806:absolute max-806:top-10 max-806:right-14 cursor-pointer self-center w-8 space-y-1.5">
          <div className={`${ isOpen && "rotate-45 top-2.5" } relative w-full h-1 rounded-full bg-black transition-all duration-200`} />
          <div className={`${ isOpen && "opacity-0" } relative w-full h-1 rounded-full bg-black transition-all duration-200`} />
          <div className={`${ isOpen && "-rotate-45 bottom-2.5" } relative w-full h-1 rounded-full bg-black transition-all duration-200`} />
        </div>
    </nav>
  )
}

const NavbarLinks = ({ setIsOpen }: { setIsOpen: Dispatch<SetStateAction<boolean>> }) => {
  const pathname = usePathname();

  return (
    <>
      <Link onClick={() => setIsOpen(false)} href="/about-us" className={`${ pathname === "/about-us" ? "after:w-full font-medium": "" } max-806:absolute max-806:top-32 max-806:text-2xl max-806:left-12 max-806:order-2 relative z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200`}>About Us</Link>
      <Link onClick={() => setIsOpen(false)} href="/employers" className={`${ pathname === "/employers" ? "after:w-full font-medium": "" } max-806:absolute max-806:top-48 max-806:text-2xl max-806:left-12 max-806:order-3 relative z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200`}>Employers</Link>
      <Link onClick={() => setIsOpen(false)} href="/" className="relative max-806:order-1 max-806:top-0.5">
        <Image height={200} width={320} className="h-24 w-auto max-806:h-16" priority src="/logo.svg" alt="Blair Ventures Logo" />
      </Link>
      <Link onClick={() => setIsOpen(false)} href="/job-seekers" className={`${ pathname === "/job-seekers" ? "after:w-full font-medium": "" } max-806:absolute max-806:top-64 max-806:text-2xl max-806:left-12 max-806:order-4 relative z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200`}>Job Seekers</Link>
      <Link onClick={() => setIsOpen(false)} href="/news" className={`${ pathname === "/news" ? "after:w-full font-medium": "" } max-806:absolute max-806:top-80 max-806:text-2xl max-806:left-12 max-806:order-5 relative z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200`}>News</Link>
    </>
  );
};

export default Navbar;