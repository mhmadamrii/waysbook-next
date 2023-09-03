import { verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const cookiesStore = cookies();
  const token = cookiesStore.get("OurSiteJWT");
  if (!token) {
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  const { value } = token;
  const secret = process.env.JWT_SECRET || "";

  try {
    verify(value, secret);
    const response = {
      message: "authenticated",
    };

    return new Response(JSON.stringify(response), {
      status: 200,
    });
  } catch (error) {
    console.log({ error });
    return NextResponse.json(
      {
        message: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }
}
