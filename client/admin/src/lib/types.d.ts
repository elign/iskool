export interface User {
  userId: number;
  email: string;
  role: string;
}

export interface Event {
  date: string;
  eventName: string;
  description: string;
  eventType: string;
}
