import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatUuid(uuid: string) {
  const sliced = uuid.toString().slice(0, 6);
  return `...${sliced}`;
}
