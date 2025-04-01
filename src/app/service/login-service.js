import { headers } from "next/headers";

export async function POST(req) {
  const requestHeaders = headers();

  const { email, password } = await req.json();

  const res = await fetch("http://96.9.81.187:8080/api/v1/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: requestHeaders.get("authorization"),
    },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    return new Response(`Login failed: ${res.statusText}`, {
      status: res.status,
    });
  }

  const data = await res.json();
  return new Response(JSON.stringify(data), { status: 200 });
}
