"use client";

import React, { useState, useContext } from "react";
import { CartContext } from "@/contexts/cart-context";

export default function CartScreen() {
  const { cart } = useContext(CartContext)
  console.log('cart', cart)
  return (
    <>
      <h1>Hllo world</h1>
      <h1>
        Aliquip voluptate eiusmod Lorem occaecat consectetur. Est voluptate
        nulla exercitation adipisicing commodo sit ipsum eiusmod cupidatat
        deserunt. Occaecat dolor nisi velit ea commodo laborum magna laboris.
        Incididunt adipisicing commodo cillum consequat. Dolore ea mollit nisi
        adipisicing ipsum ipsum ex laboris consequat. Anim veniam ex id anim
        commodo exercitation. Voluptate nisi ullamco dolor magna non labore
        exercitation mollit irure dolor cupidatat aute.
      </h1>
    </>
  );
}
