import Link from "next/link";

export default async function Home() {
  return (
    <div>
      <h1 className='text-3xl mb-2'>Haven Stay: Your Home Away From Home</h1>
      <Link href={`/properties`}>Find Your Haven Stay</Link>
    </div>
  );
}
