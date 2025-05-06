import { eachDayOfInterval } from "date-fns";
import { supabase } from "./supabase";

export async function getHaven(id: number) {
  const { data, error } = await supabase
    .from("havens")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Supabase error fetching reservations:", error);
    throw new Error("Reservations could not be loaded");
  }

  return data;
}

export async function getHavenPrice(id: number) {
  const { data, error } = await supabase
    .from("havens")
    .select("regularPrice, discount")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
  }

  return data;
}

export const getHavens = async function () {
  const { data, error } = await supabase
    .from("havens")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error);
    throw new Error("Havens could not be loaded");
  }

  return data;
};

// Clients are uniquely identified by their email address
export async function fetchClientRecordByEmail(clientEmailAddress: string) {
  const { data, error } = await supabase
    .from("clients")
    .select("*")
    .eq("email", clientEmailAddress)
    .single();
  if (error) {
    console.error(error);
    throw new Error("Could not find client");
  }
  return data;
}

export async function getReservation(id: number) {
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be loaded");
  }

  return data;
}

export async function getReservations(clientId: number) {
  const { data, error } = await supabase
    .from("reservations")
    .select(
      "id, created_at, startDate, endDate, numNights, numClients, totalPrice, clientId, havenId, havens(name, image)"
    )
    .eq("clientId", clientId)
    .order("startDate");

  if (error) {
    console.error(error);
    throw new Error("Reservations could not be loaded");
  }

  return data;
}

export async function getReservedDatesByHavenId(
  havenId: number
): Promise<Date[]> {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const todayISO = today.toISOString();

  // Getting all reservations
  const { data, error } = await supabase
    .from("reservations")
    .select("*")
    .eq("havenId", havenId)
    .or(`startDate.gte.${todayISO},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Reservations could not be loaded");
  }

  // Converting to actual dates to be displayed in the date picker
  const reservedDates = data
    .map((reservation) => {
      return eachDayOfInterval({
        start: new Date(reservation.startDate),
        end: new Date(reservation.endDate),
      });
    })
    .flat();

  return reservedDates;
}

export async function loadSystemConfiguration() {
  // Renamed function
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function addNewClient(clientInformation: string) {
  // Renamed function and parameter (assuming object type)
  const { data, error } = await supabase
    .from("clients")
    .insert([clientInformation]); // Parameter name usage updated

  if (error) {
    console.error(error);
    throw new Error("Client could not be created");
  }

  return data;
}

export async function createReservation(newReservation: object) {
  // Parameter type likely incorrect
  const { data, error } = await supabase
    .from("reservations")
    .insert([newReservation])
    // So that the newly created object gets returned!
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be created");
  }

  return data;
}

// UPDATE

// The fieldsToUpdate is an object which should ONLY contain the updated data
export async function modifyClientRecord(
  clientId: number,
  fieldsToUpdate: object
) {
  const { data, error } = await supabase
    .from("clients")
    .update(fieldsToUpdate)
    .eq("id", clientId)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Client could not be updated");
  }
  return data;
}

export async function updateReservation(id: number, updatedFields: string) {
  // Parameter type likely incorrect, keeping names
  const { data, error } = await supabase
    .from("reservations")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be updated");
  }
  return data;
}

// DELETE

export async function deleteReservation(id: number) {
  const { data, error } = await supabase
    .from("reservations")
    .delete()
    .eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Reservation could not be deleted");
  }
  return data;
}
