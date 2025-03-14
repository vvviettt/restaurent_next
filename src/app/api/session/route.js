import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function GET(req) {
  try {
    const token = req.cookies.get("session")?.value;
    if (!token) return NextResponse.json({ message: "Chưa đăng nhập!" }, { status: 401 });

    const user = jwt.verify(token, process.env.JWT_SECRET);
    return NextResponse.json({ user });
  } catch (error) {
    return NextResponse.json({ message: "Phiên đăng nhập không hợp lệ!" }, { status: 401 });
  }
}
