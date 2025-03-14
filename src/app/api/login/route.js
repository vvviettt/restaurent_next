import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const { email, password } = await req.json();

    const user = await prisma.Admin.findUnique({ where: { email } });


    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ message: "Email hoặc mật khẩu không đúng!" }, { status: 401 });
    }

    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    const response = NextResponse.json({ message: "Đăng nhập thành công!", token });
    response.cookies.set("session", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", 
      maxAge: 3600, 
      path: "/",
    });

    return response;
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "Lỗi server", error }, { status: 500 });
  }
}
