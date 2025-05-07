import { getHaven } from "@/app/_lib/data-service";
import { Haven } from "@/types/Haven/type";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

// Correct the type definition for the params prop
export default async function Page({
  params,
}: {
  params: Promise<{ havenId: string }>;
}) {
  const { havenId } = await params; // Awaiting params for next.js convention

  // Added Number() conversion as getHaven likely expects a number ID
  const haven: Haven = await getHaven(havenId);

  const { name, maxCapacity, image, description } = haven;

  return (
    // Outer container: max-width, centered, top margin, responsive horizontal padding
    <div className='max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8'>
      <div
        className='grid grid-cols-1 lg:grid-cols-[3fr_4fr] gap-8 lg:gap-20
                      border border-primary-800 py-3 px-4 sm:px-6 md:px-8 lg:px-10 mb-24'
      >
        <div className='relative h-64 md:h-80 lg:h-auto'>
          <Image
            src={image}
            alt={`Haven ${name}`}
            fill
            className='object-cover'
          />
        </div>
        {/* Text Content container */}
        <div>
          <h3
            className='text-4xl sm:text-5xl lg:text-7xl font-black mb-5
                         bg-primary-950 p-4 md:p-6 lg:p-6 lg:pb-1 // Responsive padding
                         w-full // Should be full width within its container
                        '
          >
            Haven {name}
          </h3>
          <p className='text-lg text-primary-300 mb-10'>{description}</p>
          <ul className='flex flex-col gap-4 mb-7'>
            {/* ... (list items are already reasonably responsive) ... */}
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

      {/* Reservation section title */}
      <div>
        {/* Responsive text size */}
        <h2 className='text-3xl md:text-4xl lg:text-5xl font-semibold text-center'>
          Reserve today. Pay on arrival.
        </h2>
      </div>
    </div>
  );
}
