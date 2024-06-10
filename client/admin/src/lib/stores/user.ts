import { writable } from "svelte/store";
import type { User } from "../../lib/types";
export const userStore = writable<User | null>(null);

export function setUser(user: User) {
  userStore.set(user);
}

export function logout() {
  userStore.set(null);
}
