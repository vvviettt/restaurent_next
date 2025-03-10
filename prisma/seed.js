import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const defaultUser = {
    email: "admin@example.com",
    password: await bcrypt.hash("admin123", 10), 
  };

  await prisma.Admin.create({
    data: defaultUser,
  });
  
}

main()
  .catch((error) => {
    console.error("Lỗi khi seed dữ liệu:", error);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
