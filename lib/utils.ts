import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Lato } from 'next/font/google';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
  variable: '--font-lato',
});
