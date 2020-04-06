import { writable } from "svelte/store";

export const applications = writable(null);
export const user = writable({ email: null, password: null });
export const authenticated = writable(false);
