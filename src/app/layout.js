"use client";

import "./globals.css";
import {Inter} from "next/font/google";
import {AuthProvider} from "../context/auth-context";
import {CartProvider} from "@/contexts/cart-context";
import {SnackbarProvider} from "notistack";

const inter = Inter({subsets: ["latin"]});

export default function RootLayout({children}) {
  return (
    <AuthProvider>
      <CartProvider>
        <html lang="en">
          <body className={inter.className}>
            <SnackbarProvider maxSnack={4}>{children}</SnackbarProvider>
          </body>
        </html>
      </CartProvider>
    </AuthProvider>
  );
}
