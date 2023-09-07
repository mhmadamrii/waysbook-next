"use client";

import { useEffect } from "react";
import axios from "axios";

export default function PlaygroundLayout({ children }) {
  <main>
    <h2>Some navbar</h2>
    {children}
  </main>;
}

const getUser = async () => {
  try {
    const baseURL =
      "https://express-creation-mhmadamrii.vercel.app/api/v1/sign-in";
    const response = await axios.post(baseUrl);
  } catch (error) {
    console.log({ error });
  }
};
