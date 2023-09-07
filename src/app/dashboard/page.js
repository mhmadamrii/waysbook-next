"use client";

import { useAuth } from "@/src/context/auth-context";

export default function Dashboard() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div>
      <h1>super secreet dashboard</h1>
    </div>
  );
}
