import ProductCard from "../components/product-card/productCard";

export default async function Page() {
  let products = [];

  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    products = await res.json();
  } catch (error) {
    console.error("SSR fetch error:", error);
  }

  return (
    <main>
      <h1>DISCOVER THE PRODUCTS</h1>

      {products.length === 0 ? (
        <p>Unable to load products.</p>
      ) : (
        <div>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
