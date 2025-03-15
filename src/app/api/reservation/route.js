import { NextResponse } from "next/server";

export async function POST(req, res) {
  const request = await req.json();
  const dateTimeString = `${request.date} ${request.time}`;
  const formattedDate = parseDate(dateTimeString);
  const data = {
    data: {
      time: formattedDate.toISOString(),
      name: request.name ?? "",
      email: request.email ?? "",
      person: request.person ?? "0",
      message: request.message ?? "",
      phone: request?.phone?.toString(),
    },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}bookings`,
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    }
  );
  if (response.ok) {
    return NextResponse.json(await response.json());
  }
  return NextResponse.json(
    {
      message: response.statusText,
    },
    { status: 400 }
  );
}

function parseDate(dateStr) {
  const [datePart, timePart] = dateStr.split(" ");
  let [year, month, day] = datePart.split("-").map(Number);
  let [hour, minute] = timePart.match(/\d+/g).map(Number);
  const period = timePart.includes("pm") ? "PM" : "AM";

  // Chuyển đổi thành 24h format
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;

  return new Date(year, month - 1, day, hour, minute);
}
