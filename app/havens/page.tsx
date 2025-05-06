import { Suspense } from "react";
import HavenList from "../_components/HavenList";
import Spinner from "../_components/Spinner";

export const metadata = {
  title: "Havens",
  description: "A list of all properties available for rent from HavenStay",
};

export default function Page() {
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

      <Suspense fallback={<Spinner />}>
        <HavenList />
      </Suspense>
    </div>
  );
}
