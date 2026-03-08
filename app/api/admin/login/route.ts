import { NextResponse  } from "next/server";

export async function POST(req: Request) {

  const { password } = await req.json()

  if (password === process.env.ADMIN_PASSWORD) {
    const response = NextResponse.json({ success: true })

    response.cookies.set("admin", "true", {
      httpOnly: true,
      path: "/",
      sameSite: "lax"
    })

    return response
  }

  return new Response("Unauthorized", { status: 401 })
}