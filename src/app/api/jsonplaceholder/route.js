import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const data = await res.json();
  console.log("data api", data);
  return new NextResponse({ data });
}

export async function POST() {}
