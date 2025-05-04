import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href='/' className='flex items-center gap-4 z-10 '>
      <Image
        src='/logo-transparent.png'
        height={100}
        width={100}
        alt='HavenStay logo'
      />
    </Link>
  );
}

export default Logo;
