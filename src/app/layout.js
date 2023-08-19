import "./globals.css";
import "./index.scss";

import { Inter } from "next/font/google";
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
          {children}
        </body>
      </html>
    </UserContextProvider>
  );
}
