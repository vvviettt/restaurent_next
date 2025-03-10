import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

export async function POST(req) {
  try {
    const prisma = new PrismaClient();
    const { email, password } = await req.json();

    const user = await prisma.Admin.findUnique({ where: { email } });
    console.log("user",user);
    

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return NextResponse.json({ message: "Email hoặc mật khẩu không đúng!" }, { status: 401 });
    }
    console.log("admin",user);
    

    return NextResponse.json({ message: "Đăng nhập thành công!", Admin: { id: user.id, email: user.email } });
  } catch (error) {
    console.log("error",error);
    
    return NextResponse.json({ message: "Lỗi server", error }, { status: 500 });
  }
}
