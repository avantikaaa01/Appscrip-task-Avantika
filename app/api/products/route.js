export async function GET() {
  const res = await fetch("https://fakestoreapi.com/products", {
    headers: {
      "User-Agent": "Mozilla/5.0",
    },
  });

  const data = await res.json();
  return Response.json(data);
}
