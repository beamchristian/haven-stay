import { Haven } from "@/types/Haven/type";
import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function HavenCard({ haven }: { haven: Haven }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = haven;

  return (
    // Default to flex-col (vertical stack) on small screens,
    // then switch to flex-row (horizontal) on medium screens and up (md:)
    <div className='flex flex-col md:flex-row border-primary-800 border'>
      {/* Image container:
          - relative is needed for the fill prop on Image
          - h-48 sets a fixed height on small screens when stacked vertically
          - md:h-auto removes the fixed height on medium screens and up
          - md:flex-1 makes it take 1 fraction of the available width on medium screens and up
      */}
      <div className='relative h-48 md:h-auto md:flex-1'>
        <Image
          src={image}
          alt={`Haven ${name}`}
          // Adjust the border: border-b on small screens, no border-b on md+, border-r on md+
          className='object-cover border-b md:border-b-0 md:border-r border-primary-800'
          fill
        />
      </div>

      {/* Content container: flex-grow is fine, allows it to take remaining space */}
      <div className='flex-grow'>
        <div className='pt-5 pb-4 px-7 bg-primary-950'>
          <h3 className='text-accent-500 font-semibold text-2xl mb-3'>
            Haven {name}
          </h3>

          <div className='flex gap-3 items-center mb-2'>
            <UsersIcon className='h-5 w-5 text-primary-600' />
            <p className='text-lg text-primary-200'>
              For up to <span className='font-bold'>{maxCapacity}</span> guests
            </p>
          </div>

          <p className='flex gap-3 justify-end items-baseline'>
            {discount > 0 ? (
              <>
                <span className='text-3xl font-[350]'>
                  ${regularPrice - discount}
                </span>
                <span className='line-through font-semibold text-primary-600'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-3xl font-[350]'>${regularPrice}</span>
            )}
            <span className='text-primary-200'>/ night</span>
          </p>
        </div>

        {/* Link div:
            - bg-primary-950 and border-t are fine
            - text-center centers the text on small screens when stacked
            - md:text-right aligns the text to the right on medium screens and up
        */}
        <div className='bg-primary-950 border-t border-t-primary-800 text-center md:text-right'>
          <Link
            href={`/havens/${id}`}
            // Add border-l only on medium screens and up (md:border-l)
            className='md:border-l border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900'
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HavenCard;
