export const dynamic = "force-dynamic";

export default async function Page() {
  let products = [];

  try {
    const res = await fetch("http://localhost/api/products", {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("API failed");

    products = await res.json();
  } catch (err) {
    console.error(err);
  }

  return (
    <main>
      <h1>DISCOVER THE PRODUCTS</h1>

      {products.length === 0 ? (
        <p>Unable to load products.</p>
      ) : (
        <div>
          {products.map((p) => (
            <div key={p.id}>
              <h2>{p.title}</h2>
              <p>{p.price}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
