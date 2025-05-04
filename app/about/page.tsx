import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import image2 from "@/public/about-2.jpg";
import Link from "next/link";

export const metadata = {
  title: "About",
};

export default function Page() {
  return (
    // Outer Grid: 1 column on small screens, 5 columns on medium/large screens
    // This grid provides the main structure and vertical gap between the two text/image sections
    <div className='grid grid-cols-1 gap-y-16 md:grid-cols-5 md:gap-x-24 md:gap-y-32 text-lg items-center'>
      {/* --- First Section: Text on Left (Desktop), Image on Right (Desktop) --- */}
      {/* This div spans all columns of the outer grid on all screen sizes */}
      {/* It also acts as a container for the nested grid controlling the text/image pair */}
      <div className='col-span-full grid grid-cols-1 gap-y-8 md:col-span-5 md:grid-cols-5 md:gap-x-24 items-center'>
        {/* Text Block 1: Takes full column on small, 3 columns on medium/large */}
        {/* Default order on mobile (appears first) */}
        <div className='col-span-full md:col-span-3'>
          <h1 className='text-4xl mb-6 md:mb-10 text-accent-400 font-medium'>
            Welcome to HavenStay
          </h1>

          <div className='space-y-6'>
            <p>
              Discover HavenStay, where the tranquil beauty of the lake meets
              the serenity of ancient woods. Nestled on the edge of pristine
              waters and surrounded by whispering pines, this is your exclusive
              escape from the everyday. It&apos;s not just about luxurious
              accommodations; it&apos;s an immersion into a world of profound
              peace and understated elegance.
            </p>
            <p>
              Our collection of exclusive properties offer a sanctuary of
              comfort, providing a perfect base to explore the crystal-clear
              lake waters and shaded forest trails. Breathe in the crisp, clean
              air, listen to the gentle lapping of waves, or gaze at the starlit
              sky from your private terrace or lakeside lounge area.
            </p>
            <p>
              This is a place crafted for slowing down, reconnecting with
              yourself and loved ones, and creating moments that last a
              lifetime. It&apos;s where refined luxury meets untouched
              wilderness, offering a truly restorative and unforgettable
              experience.
            </p>
          </div>
        </div>

        {/* Image 1: Takes full column on small, 2 columns on medium/large */}
        {/* Default order on mobile (appears after text) */}
        <div className='col-span-full md:col-span-2'>
          <Image
            src={image1}
            alt='Luxury lakeside property exterior with view of water'
            placeholder='blur'
            quality={80}
            // define width/height or aspect ratio to maintain its size.
          />
        </div>
      </div>

      {/* --- Second Section: Image on Left (Desktop), Text on Right (Desktop) --- */}
      {/* This div spans all columns of the outer grid on all screen sizes */}
      {/* It also acts as a container for the nested grid controlling the text/image pair */}
      <div className='col-span-full grid grid-cols-1 gap-y-8 md:col-span-5 md:grid-cols-5 md:gap-x-24 items-center'>
        {/* Image 2: Takes full column on small, 2 columns on medium/large */}
        {/* order-last makes it appear after the text on mobile */}
        {/* md:order-none resets the order on medium/large, so it follows source order */}
        <div className='relative aspect-square col-span-full md:col-span-2 order-last md:order-none'>
          <Image
            src={image2}
            fill
            placeholder='blur'
            quality={80}
            alt='Interior of a luxury property at HavenStay'
          />
        </div>

        {/* Text Block 2: Takes full column on small, 3 columns on medium/large */}
        {/* order-first makes it appear before the image on mobile */}
        {/* md:order-none resets the order on medium/large, so it follows source order */}
        <div className='col-span-full md:col-span-3 order-first md:order-none'>
          <h1 className='text-4xl mb-6 md:mb-10 text-accent-400 font-medium'>
            Our Dedication to Your Serenity
          </h1>

          <div className='space-y-8'>
            <p>
              Founded by individuals captivated by the unique magic of this
              place, HavenStay is managed with a passion for hospitality and a
              profound respect for the natural world. Every detail, from the
              design of our properties to the curated guest experience, is
              considered to ensure your stay is effortless and deeply relaxing.
            </p>
            <p>
              We believe true luxury lies in seamless comfort, genuine care, and
              the opportunity to simply be. Our dedicated team is committed to
              providing personalized attention, ensuring you feel not just
              welcomed, but truly at home. We blend the timeless peace of the
              lakeside setting with thoughtful amenities and service tailored to
              your desires. Come experience a place where tranquility is
              paramount, and every visit feels like a return to equilibrium.
            </p>

            <div className='mt-8'>
              <Link
                href='/havens'
                className='inline-block bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all'
              >
                Explore Our Luxury Retreats
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
