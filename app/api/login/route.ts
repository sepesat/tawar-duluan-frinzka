// app/api/login/route.ts
export const runtime = 'nodejs'; // wajib untuk Prisma

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { SignJWT } from "jose";

export async function GET() {
  return NextResponse.json(
    { message: "Login API ready" },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  console.log("API LOGIN KEPAKE 👍");

  try {
    const body = await req.json();
    console.log("REQUEST BODY:", body);
    
    const { email, password } = body;
    
    if (!email || !password) {
      console.log("Missing email or password");
      return NextResponse.json({ error: "Email dan password harus diisi" }, { status: 400 });
    }

    console.log("Mencari user dengan email:", email);
    const user = await prisma.user.findUnique({ where: { email } });
    
    if (!user) {
      console.log("User tidak ditemukan");
      return NextResponse.json({ error: "Email tidak ditemukan" }, { status: 400 });
    }
    
    if (user.password !== password) {
      console.log("Password salah");
      return NextResponse.json({ error: "Password salah" }, { status: 400 });
    }

    console.log("User verified, creating token");
    const token = await new SignJWT({
      uid: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("7d")
      .sign(new TextEncoder().encode(process.env.JWT_SECRET!));

    const res = NextResponse.json({ success: true, role: user.role });
    res.headers.set(
      "Set-Cookie",
      `token=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=604800`
    );
    console.log("Login successful, returning response");
    return res;
  } catch (error: any) {
    console.error("LOGIN API ERROR:", error);
    console.error("ERROR STACK:", error.stack);
    return NextResponse.json({ error: "Internal server error: " + error.message }, { status: 500 });
  }
}

