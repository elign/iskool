export interface User {
  userId: number;
  email: string;
  role: string;
}

export interface Event {
  date: DateValue | undefined;
  eventName: string;
  description: string;
  eventType: string;
}
