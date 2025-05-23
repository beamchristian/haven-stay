import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";

function Header() {
  return (
    <header className='border-b border-primary-900 px-2 py-2'>
      <div className='flex justify-between items-center'>
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
