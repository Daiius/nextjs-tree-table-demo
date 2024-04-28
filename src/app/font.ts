import localFont from 'next/font/local';
import { Inter } from "next/font/google";

export const bootstrapIcons = localFont({
  src: '../../public/bootstrap-icons.woff2',
  variable: '--font-bootstrap-icons',
  display: 'swap',
});

export const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});
