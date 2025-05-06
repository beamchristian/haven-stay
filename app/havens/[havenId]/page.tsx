import { getHaven } from "@/app/_lib/data-service";
import { Haven } from "@/types/Haven/type";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image"; // Assuming Image is used later in your actual code

// Correct the type definition for the params prop based on the error message ([havenId])
export default async function Page({
  params,
}: {
  params: { havenId: string };
}) {
  const { havenId } = await params; // <-- ADDED AWAIT HERE

  const haven: Haven = await getHaven(havenId); // <-- Use awaitedParams.havenId

  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    haven;

  return (
    <div className='max-w-6xl mx-auto mt-8'>
      <div className='grid grid-cols-[3fr_4fr] gap-20 border border-primary-800 py-3 px-10 mb-24'>
        <div className='relative scale-[1.15] -translate-x-3'>
          {/* Consider using Next/Image here for optimization */}
          <img src={image} alt={`Cabin ${name}`} />
        </div>

        <div>
          {/* Consider making this responsive, the translate-x and w-[150%] are fixed values */}
          <h3 className='text-accent-100 font-black text-7xl mb-5 translate-x-[-254px] bg-primary-950 p-6 pb-1 w-[150%]'>
            Haven {name}
          </h3>

          <p className='text-lg text-primary-300 mb-10'>{description}</p>

          <ul className='flex flex-col gap-4 mb-7'>
            <li className='flex gap-3 items-center'>
              <UsersIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                For up to <span className='font-bold'>{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <MapPinIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Located in the heart of the{" "}
                <span className='font-bold'>Dolomites</span> (Italy)
              </span>
            </li>
            <li className='flex gap-3 items-center'>
              <EyeSlashIcon className='h-5 w-5 text-primary-600' />
              <span className='text-lg'>
                Privacy <span className='font-bold'>100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className='text-5xl font-semibold text-center'>
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
