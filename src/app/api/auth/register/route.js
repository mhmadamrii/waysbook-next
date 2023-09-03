import axios from "axios";

import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req) {
  const body = await req.json();
  console.log("body post", body);
  const response = await axios.post("https://express-creation-mhmadamrii.vercel.app/api/v1/sign-up", body);
  if (response.status === 200) {
    return new Response(JSON.stringify(response), {
      status: 200,
    });
  }
  return;
}
