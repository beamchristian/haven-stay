import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo-transparent.png";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10'>
      <Image
        src={logo}
        height={80}
        width={80}
        quality={100}
        alt='HavenStay logo'
      />
    </Link>
  );
}

export default Logo;
