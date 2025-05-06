import ReservationCard from "@/app/_components/ReservationCard";
import { Reservation } from "@/types/Reservation/type";
import Link from "next/link";

export const metadata = {
  title: "Reservations",
};

export default function Page() {
  // CHANGE
  const reservations: Reservation[] = [];

  return (
    <div>
      <h2 className='font-semibold text-2xl text-accent-400 mb-7'>
        Your reservations
      </h2>

      {reservations.length === 0 ? (
        <p className='text-lg'>
          You have no reservations yet. Check out our{" "}
          <Link className='underline text-accent-500' href='/havens'>
            luxury havens &rarr;
          </Link>
        </p>
      ) : (
        <ul className='space-y-6'>
          {reservations.map((reservation) => (
            <ReservationCard reservation={reservation} key={reservation.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
