import Link from "next/link";
import Image from "next/image";
import bg from "@/public/bg.png";

export default async function Home() {
  return (
    <main className='mt-24'>
      <Image
        src={bg}
        fill
        placeholder='blur'
        quality={80}
        className='object-cover object-top'
        alt='Mountains and forests with cabins'
      />
      
      <div className='relative z-10 text-center'>
        <h1 className='text-8xl text-primary-50 mb-10 tracking-tight font-normal'>
          Haven Stay: Your Home Away From Home
        </h1>
        <Link
          href={`/havens`}
          className='bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
        >
          Find Your Haven Stay
        </Link>
      </div>
    </main>
  );
}
