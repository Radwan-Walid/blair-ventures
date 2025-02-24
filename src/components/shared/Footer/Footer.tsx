import Image from "next/image";
import Link from "next/link";
import { GoMoveToTop } from "react-icons/go";

const Footer = () => {
  return (
    <footer className="relative bg-white p-16 flex items-center justify-between gap-8 max-658:flex-col">
      <Link href="#navbar" className="absolute right-4 top-4 flex items-center gap-2 z-0 after:absolute after:left-0 after:bottom-[-2px] after:h-0.5 after:w-0 hover:after:w-full after:bg-foreground after:transition-all after:duration-200">
        <p>Back on top</p>
        <GoMoveToTop />
      </Link>
      <div className="flex flex-col gap-2 items-start max-658:items-center max-658:order-2">
        <p>Powered By</p>
        <Image className="h-6 w-auto" height={100} width={160} src="/godaddy.svg" alt="GoDaddy Logo" />
      </div>
      <p className="text-center max-658:order-3">Copyright © 2024 Blair Ventures - All Rights Reserved.</p>
      <div className="flex flex-col gap-2 items-start max-658:items-center max-658:order-1">
        <p>In Partnership with</p>
        <Link href="https://microengineering.ca/" target="_blank" className="hover:drop-shadow-xl hover:scale-105 transition-all duration-200">
          <Image className="h-10 w-auto" height={100} width={160} src="/meti.svg" alt="Micro Engineering Tech Inc. (METI) Logo" />
        </Link>
      </div>
    </footer>
  )
}

export default Footer;