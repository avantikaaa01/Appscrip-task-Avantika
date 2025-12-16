export const dynamic = "force-dynamic";

export default async function Page() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("API response not OK");
    }

    products = await res.json();
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }

  return (
    <main>
      <h1>DISCOVER THE PRODUCTS</h1>

      {products.length === 0 ? (
        <p>Unable to load products.</p>
      ) : (
        <div className="grid">
          {products.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
