const VITE_API_URL = import.meta.env.VITE_API_URL;

import type { Event } from "$lib/types";

export async function fetchEvents(): Promise<Event[]> {
  const response = await fetch(VITE_API_URL + "/events");
  if (!response.ok) {
    throw new Error("Failed to fetch events");
  }
  return response.json();
}

export async function createEvent(eventData: Event): Promise<Response> {
  const response = await fetch(VITE_API_URL + "/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  return response;
}
