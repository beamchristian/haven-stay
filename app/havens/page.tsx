import { Haven } from "@/types/Haven/type";
import HavenCard from "../_components/HavenCard";
import { getHavens } from "../_lib/data-service";

export const metadata = {
  title: "Havens",
  description: "A list of all properties available for rent from HavenStay",
};

export default async function Page() {
  // CHANGE
  const havens: Haven[] = await getHavens();

  return (
    <div>
      <h1 className='text-4xl mb-5 text-accent-400 font-medium'>
        Our Luxury Havens
      </h1>
      <p className='text-primary-200 text-lg mb-10'>
        Your perfect escape awaits. Find cozy, luxurious properties designed for
        relaxation and exploration. Enjoy beautiful views, explore nearby
        nature, or just unwind in your private hot tub. A peaceful retreat and
        your home away from home.
      </p>

      {havens.length > 0 && (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14'>
          {havens.map((haven) => (
            <HavenCard haven={haven} key={haven.id} />
          ))}
        </div>
      )}
    </div>
  );
}
