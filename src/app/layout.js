"use client";

import "./globals.css";
import "./index.scss";

import { Inter } from "next/font/google";
import { AuthProvider } from "../context/auth-context";
import { CartProvider } from "@/contexts/cart-context";
import { SnackbarProvider } from "notistack";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    // <SnackbarProvider maxSnack={4}>
    <AuthProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </CartProvider>
    </AuthProvider>
    // </SnackbarProvider>
  );
}
