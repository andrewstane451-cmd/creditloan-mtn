import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const response = await fetch(
    "https://app.mobitechtechnologies.com/sms/sendsms",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        h_api_key:
          "e2b58aebc76321ed84d5eda39951fd5bc854264bedd9377f5e7c56bb7df8d6d2",
      },
      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
