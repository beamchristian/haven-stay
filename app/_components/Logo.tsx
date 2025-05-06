import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-transparent.png";

function Logo() {
  return (
    <Link
      href='/'
      className='flex justify-center gap-4 z-10 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 relative'
    >
      <Image src={logo} fill={true} quality={100} alt='HavenStay logo' />
    </Link>
  );
}

export default Logo;
