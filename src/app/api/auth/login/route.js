import { NextResponse } from "next/server";
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body;

  if (email !== "admin" || password !== "admin") {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      { status: 401 }
    );
  }

  const secret = process.env.JWT_SECRET || "";
  const token = sign(
    {
      email,
    },
    secret,
    {
      expiresIn: 360,
    }
  );
  const serializeCookie = serialize("OurSiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 360,
    path: "/",
  });

  const response = {
    message: "authenticated",
  };

  return new Response(JSON.stringify(response), {
    status: 200,
    headers: { "Set-Cookie": serializeCookie },
  });
}
