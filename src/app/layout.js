// "use client";

import "./globals.css";
import "./index.scss";
import "bootstrap/dist/css/bootstrap.css";

import { Inter } from "next/font/google";
import { NavbarAuth } from "../components/Navbars";
import { UserContextProvider } from "@/contexts/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaysBook | Book store app ",
  description: "Best Store book ever",
};

export default function RootLayout({ children }) {
  return (
    <UserContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <NavbarAuth />
          {children}
        </body>
      </html>
    </UserContextProvider>
  );
}
