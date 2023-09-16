import "./globals.css";
import "./index.scss";

import { Inter } from "next/font/google";
import { AuthProvider } from "../context/auth-context";
import { CartContext, CartProvider } from "@/contexts/cart-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WaysBook | Book store app ",
  description: "Best Store book ever",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </CartProvider>
    </AuthProvider>
  );
}
