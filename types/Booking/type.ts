// Define a type for the booking data structure for clarity and type safety
interface Cabin {
  name: string;
  image: string;
}

export interface Booking {
  id: number;
  guestId: number;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  numNights: number;
  totalPrice: number;
  numGuests: number;
  status: string; // e.g., 'upcoming', 'past' - often derived, but useful for typing
  created_at: string; // ISO date string
  cabins: Cabin; // Nested cabin details
  // Add other properties if they exist and are used by ReservationCard
}
