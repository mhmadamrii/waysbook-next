"use server"

export async function GET() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const data = await res.json();
  return new Response(JSON.stringify(data), {
    status: 200,
  });
}
