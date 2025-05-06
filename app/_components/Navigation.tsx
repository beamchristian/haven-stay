import Link from "next/link";

export default function Navigation() {
  return (
    <nav className='z-10 text-lg pr-[6%] md:[pr-[10%]]'>
      <ul className='flex gap-16 items-center'>
        <li>
          <Link
            href='/havens'
            className='hover:text-accent-400 transition-colors'
          >
            Havens
          </Link>
        </li>
        <li>
          <Link
            href='/about'
            className='hover:text-accent-400 transition-colors'
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href='/account'
            className='hover:text-accent-400 transition-colors'
          >
            Account
          </Link>
        </li>
      </ul>
    </nav>
  );
}
