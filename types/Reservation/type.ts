interface Haven {
  name: string;
  image: string;
}

export interface Reservation {
  id: number;
  clientId: number;
  startDate: string; // ISO date string
  endDate: string; // ISO date string
  numNights: number;
  totalPrice: number;
  numClients: number;
  status: string; // e.g., 'upcoming', 'past' - often derived, but useful for typing
  created_at: string; // ISO date string
  havens: Haven; // Nested haven details
  // Add other properties if they exist and are used by ReservationCard
}
